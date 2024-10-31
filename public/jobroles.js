// Job roles and skills dataset
// Job roles and their skills dataset
const jobRoles = [
    {
        role: "Frontend Developer",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Vue.js",
            "Responsive Design",
            "Git",
            "Webpack"
        ]
    },
    {
        role: "Backend Developer",
        skills: [
            "Node.js",
            "Python",
            "Ruby",
            "Java",
            "SQL",
            "REST API",
            "Docker",
            "Kubernetes"
        ]
    },
    {
        role: "Data Scientist",
        skills: [
            "Python",
            "R",
            "Machine Learning",
            "Data Visualization",
            "Pandas",
            "NumPy",
            "SQL",
            "Deep Learning"
        ]
    },

    {
        role: "UI/UX Designer",
        skills: [
            "Figma",
            "Sketch",
            "Adobe XD",
            "Wireframing",
            "Prototyping",
            "User Research",
            "Usability Testing",
            "Interaction Design",
            "Information Architecture"
        ]
    },
    
    {
        role: "Project Manager",
        skills: [
            "Agile",
            "Scrum",
            "Project Planning",
            "Stakeholder Management",
            "Risk Management",
            "JIRA",
            "Trello",
            "Kanban",
            "Team Leadership"
        ]
    },

    {
        role: "DevOps Engineer",
        skills: [
            "AWS",
            "Azure",
            "CI/CD",
            "Linux",
            "Docker",
            "Kubernetes",
            "Ansible",
            "Jenkins",
            "Terraform"
        ]
    },
    
    {
        role: "Marketing Manager",
        skills: [
            "SEO",
            "Content Marketing",
            "Google Analytics",
            "Social Media Strategy",
            "Email Marketing",
            "Campaign Management",
            "PPC",
            "Copywriting"
        ]
    },
    {
        role: "Cybersecurity Analyst",
        skills: [
            "Network Security",
            "Penetration Testing",
            "Incident Response",
            "SIEM",
            "Firewalls",
            "Encryption",
            "Risk Assessment",
            "Threat Analysis"
        ]
    },
    {
        role: "Mobile App Developer",
        skills: [
            "Swift",
            "Kotlin",
            "Java",
            "Flutter",
            "React Native",
            "Mobile UI/UX Design",
            "REST APIs",
            "App Store Deployment"
        ]
    },
    {
        role: "Machine Learning Engineer",
        skills: [
            "Python",
            "TensorFlow",
            "PyTorch",
            "Scikit-Learn",
            "Data Preprocessing",
            "Model Optimization",
            "Natural Language Processing",
            "Computer Vision"
        ]
    },
   
      
    {
        role: "Marketing Specialist",
        skills: [
            "SEO",
            "Content Marketing",
            "Social Media Strategy",
            "Google Analytics",
            "Email Marketing",
            "Copywriting",
            "Brand Management",
            "Market Research"
        ]
    },

    
    {
        role: "Sales Executive",
        skills: [
            "Lead Generation",
            "CRM Tools",
            "Negotiation",
            "Prospecting",
            "Sales Pitching",
            "Cold Calling",
            "Customer Relationship Management",
            "Pipeline Management"
        ]
    },
    {
        role: "Content Writer",
        skills: [
            "SEO Writing",
            "Copywriting",
            "Content Strategy",
            "Proofreading",
            "Research",
            "Editing",
            "Blogging",
            "WordPress"
        ]
    },
    {
        role: "Human Resources Manager",
        skills: [
            "Recruitment",
            "Onboarding",
            "Employee Relations",
            "Conflict Resolution",
            "Performance Management",
            "Labor Laws",
            "Negotiation",
            "Teamwork"
        ]
    },
    
    {
        role: "Operations Manager",
        skills: [
            "Operations Management",
            "Supply Chain",
            "Inventory Management",
            "Process Improvement",
            "Budgeting",
            "Data Analysis",
            "Leadership",
            "Vendor Management"
        ]
    },
    {
        role: "Customer Service Manager",
        skills: [
            "Customer Support",
            "Conflict Resolution",
            "Communication",
            "Leadership",
            "CRM Systems",
            "Team Management",
            "Problem Solving",
            "Empathy"
        ]
    },
    {
        role: "Event Planner",
        skills: [
            "Event Coordination",
            "Vendor Management",
            "Budget Management",
            "Logistics",
            "Client Relations",
            "Creativity",
            "Negotiation",
            "Attention to Detail"
        ]
    },
    {
        role: "Public Relations Specialist",
        skills: [
            "Media Relations",
            "Crisis Management",
            "Press Releases",
            "Social Media Management",
            "Public Speaking",
            "Brand Management",
            "Event Coordination",
            "Writing"
        ]
    },
    {
        role: "Financial Analyst",
        skills: [
            "Financial Analysis",
            "Budgeting",
            "Forecasting",
            "Excel",
            "Financial Reporting",
            "Investment Strategy",
            "Risk Management",
            "Market Research"
        ]
    },
    {
        role: "Full Stack Developer",
        skills: [
            "JavaScript",
            "HTML",
            "CSS",
            "Node.js",
            "React",
            "MongoDB",
            "Express",
            "Git"
        ]
    },
    {
        role: "Cloud Engineer",
        skills: [
            "AWS",
            "Azure",
            "Google Cloud",
            "Docker",
            "Kubernetes",
            "Serverless Architecture",
            "Terraform",
            "Networking"
        ]
    },
    {
        role: "AI Engineer",
        skills: [
            "Machine Learning",
            "Deep Learning",
            "Python",
            "TensorFlow",
            "PyTorch",
            "Natural Language Processing",
            "Data Modeling",
            "AI Ethics"
        ]
    },
    {
        role: "Blockchain Developer",
        skills: [
            "Solidity",
            "Ethereum",
            "Smart Contracts",
            "Cryptography",
            "Consensus Algorithms",
            "DeFi",
            "Hyperledger",
            "Web3.js"
        ]
    },
    {
        role: "Game Developer",
        skills: [
            "C#",
            "Unity",
            "Unreal Engine",
            "3D Modeling",
            "Game Physics",
            "Scripting",
            "AI for Games",
            "Multiplayer Systems"
]
    },
    {
        role: "Mobile App Developer",
        skills: [
            "Java",
            "Swift",
            "Kotlin",
            "React Native",
            "Flutter",
            "APIs",
            "Git",
            "UI/UX Design"
        ]
    },
    
  
  
    {
        role: "Business Analyst",
        skills: [
            "Data Analysis",
            "Business Strategy",
            "Stakeholder Management",
            "Problem Solving",
            "Requirements Gathering",
            "Process Mapping",
            "Communication",
            "Decision-Making"
        ]
    },
]

  
    
 
  

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
    
