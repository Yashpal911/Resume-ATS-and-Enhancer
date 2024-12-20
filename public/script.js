window.onload = function () {

window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional: Adds a smooth scrolling effect
  });


  };
  

// container under result
let suggestionhide = true;

let resultSection = document.getElementById("results");
let suggestionSection = document.getElementById("suggestions");
let start = true;


function btn2(){
    if(start == false){
        location.reload();
        start = true;

           }
}

function resultdiv(result, score , name){
    
    removeExtra();
    
    resultSection.classList.add("resultsDecoration");
    
    const resultHeading = document.createElement("h3");
    resultHeading.innerText = `Hello ${name}, Based on Your Resume, Your ATS score is ${result}`;
    resultSection.appendChild(resultHeading);
    const section = document.createElement("h3");
    section.setAttribute("class","result_div");
    section.innerText = `Your ATS score is ${score} out of 100`;
    resultSection.appendChild(section);


}
function createSuggestionBox(){
    if(suggestionhide==true){
        suggestionSection.classList.remove("hide");
        suggestionhide = false;
    }
}

// container under suggestion suggestions
function ProjectDetails(heading,text,modifiedText){
  createSuggestionBox()
  document.getElementById("projectSuggestion").classList.remove("hide");

        const section = document.createElement("li");
        section.setAttribute("class","suggestions_div")
        section.innerHTML = `<h3> ${heading}</h3> <p>${text}</p> <p> ${modifiedText}</p>`;
        document.getElementById("projectSuggestion").appendChild(section);

}

function socialMediaDetails(){
  createSuggestionBox()
  document.getElementById("SocialMediaSuggestion").classList.remove("hide");

        const section = document.createElement("div");
        section.setAttribute("class","suggestions_div")
        section.innerHTML = `<h3>Add more links to your Social Media profiles such as Linkedin, Github, Personal Portfolio, Twitter, etc.</h3>`;
        document.getElementById("SocialMediaSuggestion").appendChild(section);

}
function SkillDetails(skills){
  createSuggestionBox()
  document.getElementById("skillsSuggestion").classList.remove("hide");

        const section = document.createElement("ul");
        section.setAttribute("class","suggestions_div")
        section.innerHTML = `<li>${skills}</li>`;
        document.getElementById("skillsSuggestion").appendChild(section);

}
function SummaryDetails(Summary, UpdatedSummary){
  createSuggestionBox()
  document.getElementById("summarySuggestion").classList.remove("hide");

        const section = document.createElement("span");
        section.setAttribute("class","suggestions_div")
        if(Summary == "Null"){
            section.innerHTML = `<p>Add an Overall <b>Profile section</b> in your resume to improve Your ATS Score </br>"${UpdatedSummary}"</p>`
        }
        else{
            section.innerHTML = `<p>The Overall <b> Profile Summary</b> of your shared resume is "${Summary.strike()}" which is not Suitable for your Job. </p></br> <p>Use this Updated Version To improve Your ATS Score </br>"${UpdatedSummary}"</p>`;
        }
        document.getElementById("summarySuggestion").appendChild(section);

}



function removeExtra(){
    const container = document.querySelector(".container")    
    const mainSection = document.querySelector("main");        
    container.classList.add("hide")
    mainSection.classList.add("hide")
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
        alert('Please select a file (PDF or Word).');
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
    formData.append('jobRole', jobRoleSelect.value);
    
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
        
        calculateScore(data.skills,data.projectCount, data.experience, data.username, data.socialMedia , data.internship);       

     
        SummaryDetails(data.Summary, data.UpdatedSummary)
     
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Adds a smooth scrolling effect
          });
        

        start = false;

        document.getElementById("checkATS").removeAttribute("href");


     
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
function calculateScore(userSkills, projectCount, experience, name ,socialMedia, intership) {
    
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
    if (experience >= 0 && experience <= 12) {
        totalScore += 2;
    } else if (experience >= 25 && experience <= 48) {
        totalScore += 4;
    } else if (experience > 48) {
        totalScore += 5;
    }

    // score based in interships
    if(intership>=0 && intership<=2){
        totalScore += 3;
        }
        else if(intership>=3){
            totalScore += 4;
        }


    //Based in social media
    if (socialMedia >= 0 && socialMedia <= 2) {
        totalScore += 2;
        socialMediaDetails()
    } else if (socialMedia >= 3 && socialMedia <= 4) {
        totalScore += 4;
    } else if (socialMedia >4) {
        totalScore += 5;
    }

    AverageScore = Math.round((totalScore * 4) / 10);
    
    // End Result Based on totalScore
    if(AverageScore>=0 && AverageScore<=3){
        result = "Unsatisfactory";
    } else if(AverageScore>3 && AverageScore<=5){
        result = "Below Average";
    } else if(AverageScore>5 && AverageScore<=7){
        result = "Average"
    } else if(AverageScore>7 && AverageScore<=9){
        result = "Good"
    } else if(AverageScore>9 && AverageScore<=10){
        result = "Excellent"
    }

   let Score = totalScore*4 ; 
    
    resultdiv(result,Score,name)


    jobRoles.forEach(job => {
        if (job.role === jobRole) {
            job.projects.forEach(project => {
                ProjectDetails(`${project.name}`, `Details : ${project.description}`,`Technologies: ${project.technologies}`);

            });
            job.skills.forEach(skill=>{
                if (userSkills.includes(skill)) {
                    console.log(`${skill} founded`)
                }
                else{
                    SkillDetails(skill);
                }
            });
        }
    });

};
