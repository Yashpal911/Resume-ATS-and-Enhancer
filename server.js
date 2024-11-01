const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');
const {
    GoogleGenerativeAI
  } = require("@google/generative-ai");
  
  const apiKey = 'AIzaSyB_1rt2G-Py9SA4UOLuHM5dgyBmYeJyW9g';
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
        const phoneNumberMatch = text.match(/\(?\+?\d{1,3}\)?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/);
        const skillsMatch = textWithHashes.match(/Skills#?\s*[:\s]*(.*?)(?=\n(?:Experience|OtherHeading|Education)|$)/is);
        const Summary = textWithHashes.match(/Summary#?\s*[:\s]*(.*?)(?=\n(?:Skills|Experience|OtherHeading|Education)|$)/is);
        const educationMatch = textWithHashes.match(/Education#?\s*[:\s]*(.*?)(?=\n(?:Skills|Experience|OtherHeading)|$)/is);

        let sum = Summary[1].trim()
        const chatSession = model.startChat({
            generationConfig,
        //  safetySettings: Adjust safety settings
        //  See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [
            ],
          });
        
          const result = await chatSession.sendMessage(`provide me how much projects has been discussed within this resume ${text} (reply only number no text)`);
          const result2 = await chatSession.sendMessage(`Check the grammer and is there any need of modification: ${sum} if ok then retrun true else return the modified string`);
          const question = await chatSession.sendMessage(`provide some skills based on the given to enhance it "${skillsMatch[1].trim()}"`);
         console.log(question.response.text())
          // let resultt = result.response.text();

        // Check if the matches were found before calling .trim()
        res.json({
            phoneNumber: phoneNumberMatch ? phoneNumberMatch[0] : 'Not found',
            skills: skillsMatch && skillsMatch[1] ? skillsMatch[1].trim().replace(/#/g, ' ') : 'Not found',
            education: educationMatch && educationMatch[1] ? educationMatch[1].trim().replace(/#/g, ' ') : 'Not found',
            textWithHashes: textWithHashes,
            result: result.response.text(),
            // result2: result2.response.text()
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
