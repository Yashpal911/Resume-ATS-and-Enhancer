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
        ],
        projects: [
            {
                name: "Responsive Portfolio Website",
                description: "A personal portfolio website with responsive design using HTML, CSS, and JavaScript.",
                technologies: ["HTML", "CSS", "JavaScript"]
            },
            {
                name: "Real-Time Chat Application",
                description: "A real-time chat application built using Vue.js and WebSocket for real-time communication.",
                technologies: ["Vue.js", "JavaScript", "WebSocket"]
            },
            {
                name: "E-commerce Frontend",
                description: "Designed and developed the frontend for an e-commerce website using React and Redux for state management.",
                technologies: ["React", "JavaScript", "Redux"]
            }
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
        ],
        projects: [
            {
                name: "RESTful API for E-commerce Platform",
                description: "Developed a RESTful API for handling product, user, and order management using Node.js and Express.",
                technologies: ["Node.js", "Express", "SQL"]
            },
            {
                name: "Microservices Architecture",
                description: "Designed and implemented a microservices architecture for a scalable web application using Docker and Kubernetes.",
                technologies: ["Docker", "Kubernetes", "Node.js"]
            },
            {
                name: "Payment Gateway Integration",
                description: "Implemented payment gateway integration for a web application using Java and Python.",
                technologies: ["Java", "Python", "SQL"]
            }
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
        ],
        projects: [
            {
                name: "Customer Churn Prediction",
                description: "Built a machine learning model to predict customer churn using historical customer data.",
                technologies: ["Python", "Scikit-learn", "Pandas"]
            },
            {
                name: "Sales Forecasting",
                description: "Developed a time series forecasting model to predict future sales using past data.",
                technologies: ["Python", "TensorFlow", "Pandas"]
            },
            {
                name: "Data Visualization Dashboard",
                description: "Created an interactive data visualization dashboard for business intelligence insights.",
                technologies: ["Python", "R", "Tableau"]
            }
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
        ],
        projects: [
            {
                name: "Mobile App UI Redesign",
                description: "Redesigned the UI for a mobile application to enhance user engagement and retention.",
                technologies: ["Figma", "Sketch", "Adobe XD"]
            },
            {
                name: "Website Wireframing and Prototyping",
                description: "Created wireframes and prototypes for a new SaaS platform using Figma.",
                technologies: ["Figma", "Prototyping", "Wireframing"]
            },
            {
                name: "User Research for E-commerce Platform",
                description: "Conducted user research and usability testing for an e-commerce platform to improve user experience.",
                technologies: ["User Research", "Usability Testing", "Interaction Design"]
            }
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
        ],
        projects: [
            {
                name: "Agile Project for Software Development",
                description: "Led an Agile team for developing a software product, overseeing the project from planning to deployment.",
                technologies: ["Agile", "Scrum", "JIRA"]
            },
            {
                name: "Risk Management Implementation",
                description: "Implemented risk management strategies for a large-scale IT project to mitigate potential delays.",
                technologies: ["Risk Management", "Stakeholder Management", "Trello"]
            },
            {
                name: "Scrum Team Coordination",
                description: "Managed and coordinated multiple Scrum teams for a complex software project with cross-functional dependencies.",
                technologies: ["Scrum", "Kanban", "Team Leadership"]
            }
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
        ],
        projects: [
            {
                name: "CI/CD Pipeline Setup",
                description: "Set up a CI/CD pipeline using Jenkins to automate testing and deployment processes.",
                technologies: ["Jenkins", "CI/CD", "Docker"]
            },
            {
                name: "Cloud Infrastructure Automation",
                description: "Automated infrastructure provisioning using Terraform on AWS and Azure.",
                technologies: ["AWS", "Azure", "Terraform"]
            },
            {
                name: "Kubernetes Cluster Setup",
                description: "Deployed and managed Kubernetes clusters for containerized applications.",
                technologies: ["Kubernetes", "Docker", "Ansible"]
            }
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
        ],
        projects: [
            {
                name: "SEO Optimization Campaign",
                description: "Led an SEO optimization campaign that improved organic traffic by 30% over three months.",
                technologies: ["SEO", "Google Analytics", "Content Marketing"]
            },
            {
                name: "Email Marketing Automation",
                description: "Implemented an email marketing automation workflow that increased engagement by 20%.",
                technologies: ["Email Marketing", "Campaign Management", "Automation"]
            },
            {
                name: "Social Media Strategy for Brand Awareness",
                description: "Developed a comprehensive social media strategy that resulted in a 50% increase in followers.",
                technologies: ["Social Media Strategy", "Content Marketing", "PPC"]
            }
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
        ],
        projects: [
            {
                name: "Penetration Testing for E-commerce Platform",
                description: "Performed penetration testing on an e-commerce platform, identifying critical vulnerabilities.",
                technologies: ["Penetration Testing", "Risk Assessment", "Network Security"]
            },
            {
                name: "Incident Response for Ransomware Attack",
                description: "Led an incident response team during a ransomware attack, restoring systems and mitigating damage.",
                technologies: ["Incident Response", "SIEM", "Firewalls"]
            },
            {
                name: "Network Security Audit",
                description: "Conducted a network security audit for a financial institution, ensuring compliance with regulatory standards.",
                technologies: ["Network Security", "Encryption", "Risk Assessment"]
            }
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
        ],
        projects: [
            {
                name: "iOS Shopping App",
                description: "Developed an iOS shopping app with seamless payment integration and dynamic product catalogs.",
                technologies: ["Swift", "REST APIs", "App Store Deployment"]
            },
            {
                name: "Cross-Platform Fitness App",
                description: "Built a cross-platform fitness app using React Native that tracks user progress and syncs with wearables.",
                technologies: ["React Native", "Kotlin", "Mobile UI/UX Design"]
            },
            {
                name: "Flutter-based Social Media App",
                description: "Created a social media application using Flutter that supports real-time messaging and media sharing.",
                technologies: ["Flutter", "Java", "Mobile UI/UX Design"]
            }
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
        ],
        projects: [
            {
                name: "Image Recognition System",
                description: "Developed an image recognition system using convolutional neural networks (CNNs) with TensorFlow.",
                technologies: ["TensorFlow", "Python", "Computer Vision"]
            },
            {
                name: "NLP-based Sentiment Analysis Tool",
                description: "Created a sentiment analysis tool using natural language processing and machine learning algorithms.",
                technologies: ["Natural Language Processing", "Scikit-Learn", "PyTorch"]
            },
            {
                name: "Predictive Maintenance System",
                description: "Built a predictive maintenance model to forecast machine failures using time-series data.",
                technologies: ["Python", "Model Optimization", "Data Preprocessing"]
            }
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
        ],
        projects: [
            {
                name: "Content Marketing Strategy",
                description: "Developed a content marketing strategy that increased website traffic by 40% over six months.",
                technologies: ["SEO", "Content Marketing", "Google Analytics"]
            },
            {
                name: "Email Newsletter Campaign",
                description: "Launched an email newsletter campaign that improved open rates by 15% through A/B testing.",
                technologies: ["Email Marketing", "Copywriting", "Brand Management"]
            },
            {
                name: "Social Media Engagement Drive",
                description: "Led a social media engagement drive that tripled the number of customer interactions.",
                technologies: ["Social Media Strategy", "Market Research", "Content Marketing"]
            }
        ]
    }
]
