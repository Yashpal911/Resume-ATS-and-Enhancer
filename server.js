const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');
const { headingPattern, educationPattern } = require('./public/headings.js');
const {
    GoogleGenerativeAI
} = require("@google/generative-ai");

const apiKey = 'AIzaSyA2yYzR13Dm1zL3PURIEflCpPx8Rbm87gY';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};




const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public')); // Serve static files from the 'public' directory

app.post('/parse', upload.single('file'), async (req, res) => {
    const filePath = path.join(__dirname, req.file.path);
    const fileType = path.extname(req.file.originalname).toLowerCase();

    const jobRole = req.body.jobRole;

    try {
        let text = '';

        if (fileType === '.pdf') {
            // Handle PDF files
            const dataBuffer = fs.readFileSync(filePath);
            const data = await pdfParse(dataBuffer);
            text = data.text;
        } else if (fileType === '.docx') {
            // Handle Word files
            const result = await mammoth.extractRawText({ path: filePath });
            text = result.value; // The extracted text
        } else if (fileType === '.jpg' || fileType === '.png') {
            // Handle image files using Tesseract for OCR
            const { data: ocrResult } = await Tesseract.recognize(filePath, 'eng');
            text = ocrResult.text;
        } else {
            return res.status(400).json({ error: 'Unsupported file format. Please upload a PDF, Word, or image file.' });
        }

        // Replace newlines with '#\n'
        let textWithHashes = text.replace(/\n/g, '#\n');




        // Extract specific details using regex
        const name = text.match(/\b([A-Z][a-z]*\s[A-Z][a-z]*)\b/g);
        const phoneNumberMatch = text.match(/\(?\+?\d{1,3}\)?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/);
        const skillsMatch = textWithHashes.match(/Skills#?\s*[:\s]*(.*?)(?=\n(?:Experience|OtherHeading|Education)|$)/is);
        const educationMatch = textWithHashes.match(new RegExp(`${educationPattern}#?\\s*[:\\s]*(.*?)(?=\\n(?:${headingPattern})|$)`, "is"));
        const SummaryMatch = textWithHashes.match(new RegExp(`summary#?\s*[:\s]*(.*?)(?=\n(?:${headingPattern})|$)`, "is"));


        console.log(jobRole);
        const chatSession = model.startChat({
            generationConfig,
            //  safetySettings: Adjust safety settings
            //  See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [
            ],
        });
        const Summary = SummaryMatch && SummaryMatch[1] ? SummaryMatch[1].trim() : 'Null';
        // Question to Gemini API
        const projectCount = await chatSession.sendMessage(`tell me the no. of projects mention in this resume ${text} (one word answer in interger)`);
        const experience = await chatSession.sendMessage(`tell me the how much experince is gained in this resume ${text} (including interships and jobs. return only integer months form or return 0) `);
        const intership = await chatSession.sendMessage(`tell me the number of interships done in this resume "${text}" (return only interger value or return 0)`)
        const socialMedia = await chatSession.sendMessage(`tell me how much many social media links is given in this resume "${text}" (return only integer value or return 0)`)

        const summaryCheck = await chatSession.sendMessage(`check weather the overview "${Summary}" belongs to the "${jobRole}" (Return "True" or "False") `);
        const summaryUpdated = await chatSession.sendMessage(`update the overview Profile Summary for resume to make it more suitable for the "${jobRole}" (keep short & provide just result not multiple)`)


        // Check if the matches were found before calling .trim()
        res.json({
            phoneNumber: phoneNumberMatch ? phoneNumberMatch[0] : 'Null',
            username: name ? name[0] : 'Null',
            skills: skillsMatch && skillsMatch[1] ? skillsMatch[1].trim() : 'Null',
            education: educationMatch && educationMatch[1] ? educationMatch[1].trim() : 'Null',
            projectCount: projectCount.response.text(),
            experience: experience.response.text(),
            internship: intership.response.text(),
            socialMedia: socialMedia.response.text(),
            Summary: SummaryMatch && SummaryMatch[1] ? SummaryMatch[1].trim() : 'Null',
            SummaryCheck: summaryCheck.response.text(),
            UpdatedSummary: summaryUpdated.response.text(),


        });


    } catch (error) {
        console.error('Error extracting text or details:', error);
        res.status(500).json({ error: 'Error processing the file.' });
    } finally {
        fs.unlinkSync(filePath);  // Clean up uploaded file
    }
});




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
