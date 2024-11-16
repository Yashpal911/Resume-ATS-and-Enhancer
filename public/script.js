
// container under result
let resultHide = true;
let suggestionhide = true;

let resultSection = document.getElementById("results");


let greetingSection = document.getElementById("greetings");

// for greeting the user
function greetings(name){
    greetingSection.innerText=`Hello ${name}`
}

function resultdiv(branch, text){
    if(resultHide == true){

        resultSection.classList.add("resultsDecoration");

        const resultHeading = document.createElement("h1");
        resultHeading.innerText = `Result`;
        resultSection.appendChild(resultHeading);
        let div = document.createElement("div");
        div.setAttribute("id","mainResult")
        resultSection.appendChild(div);

        
        const section = document.createElement("p");
        section.setAttribute("class","result_div")
        section.innerText = `${branch} :: ${text}`;
        document.getElementById("mainResult").appendChild(section);

        resultHide = false;

    }

    else{
        const section = document.createElement("p");
        section.setAttribute("class","result_div")
        section.innerText = `${branch} :: ${text}`;
        document.getElementById("mainResult").appendChild(section);
    }

}


// container under suggestion suggestions
function suggestionDetails(heading,text,modifiedText){
    if(suggestionhide==true){
        resultSection.classList.add("SuggestionDecoration");

        const SuggestionHeading = document.createElement("h1");
        SuggestionHeading.innerText = `Suggestions`;
        resultSection.appendChild(SuggestionHeading);
        let div = document.createElement("p");
        div.setAttribute("id","mainSuggestion")
        resultSection.appendChild(div);

        const section = document.createElement("p");
        section.setAttribute("class","suggestions_div")
        section.innerHTML = `hello`;
        document.getElementById("mainSuggestion").appendChild(section);

        suggestionhide = false;
    }

    else{
    const section = document.createElement("p");
    section.setAttribute("class","suggestions_div")
    section.innerText = `helllo`;
    document.getElementById("mainSuggestion").appendChild(section);
    }
}


const dropZone = document.getElementById('dropZone');
const uploadButton = document.getElementById('uploadButton');
const fileInput = document.getElementById('fileInput');
let selectedFile = null;

let score= 0;
// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop zone when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});

// Remove highlight when item is no longer hovering
['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropZone.addEventListener('drop', handleDrop, false);
dropZone.addEventListener('click', () => fileInput.click());

// Handle file input change
fileInput.addEventListener('change', handleFileSelect);

uploadButton.addEventListener('click', async () => {
    if (!selectedFile) {
        alert('Please select a file (PDF, Word, or image).');
        return;
    }
    
    if (jobRoleSelect.value === '') {
        // User selected the default option
        alert('Please select a job role!');
        return false;
    } 
    
    const allowedExtensions = [
        'application/pdf', 
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
        'image/jpeg', 
        'image/png'
    ];
    
    // Check if the file type is valid
    if (!allowedExtensions.includes(selectedFile.type)) {
        alert('Please upload a valid file: PDF, Word (docx), JPG, or PNG.');
        return;
    }
    
    const formData = new FormData();
    formData.append('file', selectedFile);
    
    // SHOW LODAING INDICATOR
    const loadingMessage = document.createElement('p');
    loadingMessage.textContent = 'Uploading...';
    dropZone.appendChild(loadingMessage);
    uploadButton.disabled= true;                //Button disabled
    


    try {
        const response = await fetch('/parse', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        


        greetings(data.username);
        
        calculateScore(data.skills, data.projectCount, data.internship);       
     
    } catch (error) {
        console.error('Error:', error);
    }
    finally {
        // Remove loading indicator
        dropZone.removeChild(loadingMessage);

        // Button Enabled
        uploadButton.disabled= false;     
    }
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    dropZone.classList.add('dragover');
}

function unhighlight() {
    dropZone.classList.remove('dragover');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    if (files.length) {
        selectedFile = files[0]; // Save the selected file
        dropZone.innerHTML = `<p>${selectedFile.name}</p>`; // Display the file name
    }
}

function handleFileSelect(e) {
    const files = e.target.files;

    if (files.length) {
        selectedFile = files[0]; // Save the selected file
        dropZone.innerHTML = `<p>${selectedFile.name}</p>`; // Display the file name
    }
}


// Calculate score based on job roles and skills
function calculateScore(userSkills, projectCount, experience) {
    const jobRole = jobRoleSelect.value; // Assuming jobRoleSelect is a reference to the select input
    let totalScore = 0;
    let match = 0;
    let result= " ";

    jobRoles.forEach(job => {
        if (job.role === jobRole) {
            job.skills.forEach(skill => {
                if (userSkills.includes(skill)) {
                    match++;
                }
            });
        }
    });
    // Score based on skills
    if (match >= 1 && match <= 2) {
        totalScore += 2;
    } else if (match >= 3 && match <= 4) {
        totalScore += 4;
    } else if (match > 4) {
        totalScore += 5;
    }

    // Score based on project count
    if (projectCount >= 1 && projectCount <= 2) {
        totalScore += 2;
    } else if (projectCount >= 3 && projectCount <= 4) {
        totalScore += 4;
    } else if (projectCount > 4) {
        totalScore += 5;
    }

    // Score based on experience in terms of months
    if (experience >= 0 && experience <= 24) {
        totalScore += 2;
    } else if (experience >= 25 && experience <= 48) {
        totalScore += 4;
    } else if (experience > 48) {
        totalScore += 5;
    }

    // Project Based in social media
    
    


    // End Result Based on totalScore
    if(totalScore>=0 && totalScore<=4){
        result = "Unsatisfactory";
    } else if(totalScore>=5 && totalScore<=10){
        result = "Below Average";
    } else if(totalScore>=11 && totalScore<=14){
        result = "Average"
    } else if(totalScore>=15 && totalScore<=18){
        result = "Impressive"
    } else if(totalScore>=19 && totalScore<=20){
        result = "Excellent"
    }


    resultdiv("Result score",`${result} and ${totalScore}`)
};
