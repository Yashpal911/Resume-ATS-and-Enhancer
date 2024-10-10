// Export the dataset if using in a module-based environment
// module.exports = jobRoles;  // Uncomment this line if using Node.js or modules

    // ... (other job roles)

    const jobRoleSelect = document.getElementById('jobrole');

    document.addEventListener('DOMContentLoaded', () => {
        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'SELECT JOB ROLE';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        jobRoleSelect.appendChild(defaultOption);
    
        // Sort jobRoles array alphabetically by the job role
        const sortedJobRoles = jobRoles.sort((a, b) => a.role.localeCompare(b.role));
    
        sortedJobRoles.forEach(job => {
            const option = document.createElement('option');
            option.value = job.role;
            option.textContent = job.role;
            jobRoleSelect.appendChild(option);
        });
    });
    





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
        document.getElementById('phoneNumber').textContent = data.phoneNumber || 'Not found';
        document.getElementById('skills').textContent = data.skills || 'Not found';
        document.getElementById('education').textContent = data.education || 'Not found';
        
        console.log('Text with hashes:', data.textWithHashes);
        console.log('result:', data.result);
        calculateScore(data.skills);       
     
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
function calculateScore(userSkills) {
    const jobRole = jobRoleSelect.value; // Assuming jobRoleSelect is a reference to the select input
    let totalScore = 0;

    jobRoles.forEach(job => {
        if (job.role === jobRole) {
            job.skills.forEach(skill => {
                if (userSkills.includes(skill)) {
                    totalScore++;
                    console.log(skill)
                }
            });
        }
    });

    console.log(`Score for ${jobRole}:`, totalScore);
    document.getElementById('score').innerText = totalScore;
    return totalScore;
};
