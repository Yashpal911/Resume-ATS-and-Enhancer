// Job roles and skills dataset
// Job roles and their skills dataset    
 
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
    },{
        role: "Cloud Architect",
        skills: [
            "AWS",
            "Azure",
            "Google Cloud Platform",
            "Infrastructure as Code",
            "DevOps",
            "Security Best Practices",
            "Serverless Computing",
            "Networking"
        ],
        projects: [
            {
                name: "Multi-Cloud Deployment Strategy",
                description: "Designed and implemented a multi-cloud deployment strategy to increase service availability and resilience.",
                technologies: ["AWS", "Azure", "Google Cloud Platform"]
            },
            {
                name: "Serverless Application Architecture",
                description: "Developed a serverless application architecture using AWS Lambda and API Gateway to handle high-traffic workloads.",
                technologies: ["AWS Lambda", "Serverless Framework", "API Gateway"]
            },
            {
                name: "Cloud Security Compliance",
                description: "Implemented security best practices to ensure cloud environments met compliance standards such as SOC 2 and ISO 27001.",
                technologies: ["AWS", "Azure", "Security Best Practices"]
            }
        ]
    },
    {
        role: "Game Developer",
        skills: [
            "Unity",
            "Unreal Engine",
            "C#",
            "C++",
            "Game Physics",
            "3D Modeling",
            "Animation",
            "Shader Programming"
        ],
        projects: [
            {
                name: "3D Adventure Game",
                description: "Developed a 3D adventure game using Unity with realistic physics and immersive gameplay mechanics.",
                technologies: ["Unity", "C#", "3D Modeling"]
            },
            {
                name: "Multiplayer Battle Arena",
                description: "Created a real-time multiplayer battle arena game using Unreal Engine and optimized for network performance.",
                technologies: ["Unreal Engine", "C++", "Game Physics"]
            },
            {
                name: "Mobile Puzzle Game",
                description: "Designed and built a mobile puzzle game with interactive animations and levels using Unity.",
                technologies: ["Unity", "C#", "Animation"]
            }
        ]
    },
    {
        role: "AI Researcher",
        skills: [
            "Machine Learning",
            "Deep Learning",
            "Neural Networks",
            "Natural Language Processing",
            "Python",
            "TensorFlow",
            "PyTorch",
            "Research Writing"
        ],
        projects: [
            {
                name: "Generative Adversarial Networks",
                description: "Conducted research and built models using GANs for image generation and data augmentation.",
                technologies: ["Python", "TensorFlow", "PyTorch"]
            },
            {
                name: "Speech Recognition System",
                description: "Developed an end-to-end speech recognition system using deep learning and NLP techniques.",
                technologies: ["Python", "Deep Learning", "Natural Language Processing"]
            },
            {
                name: "AI-based Recommendation System",
                description: "Created an AI-based recommendation engine for an e-commerce platform to improve product suggestions.",
                technologies: ["Python", "Machine Learning", "Neural Networks"]
            }
        ]
    },
    {
        role: "Blockchain Developer",
        skills: [
            "Solidity",
            "Ethereum",
            "Smart Contracts",
            "Web3.js",
            "Hyperledger",
            "Cryptography",
            "Decentralized Applications",
            "Blockchain Architecture"
        ],
        projects: [
            {
                name: "Decentralized Finance (DeFi) Platform",
                description: "Built a DeFi platform enabling peer-to-peer lending and borrowing using smart contracts.",
                technologies: ["Solidity", "Ethereum", "Web3.js"]
            },
            {
                name: "NFT Marketplace",
                description: "Developed a marketplace for minting and trading NFTs with integrated wallet support.",
                technologies: ["Solidity", "Smart Contracts", "Web3.js"]
            },
            {
                name: "Supply Chain Blockchain Solution",
                description: "Implemented a blockchain-based solution for tracking and verifying supply chain logistics.",
                technologies: ["Hyperledger", "Blockchain Architecture", "Cryptography"]
            }
        ]
    },
    {
        role: "Systems Analyst",
        skills: [
            "Systems Analysis",
            "UML Diagrams",
            "Requirements Gathering",
            "Business Process Mapping",
            "SQL",
            "Technical Documentation",
            "Data Modeling",
            "ERP Systems"
        ],
        projects: [
            {
                name: "Business Process Re-engineering",
                description: "Conducted analysis and re-engineered business processes for increased efficiency using UML and process mapping.",
                technologies: ["UML", "Business Process Mapping", "Technical Documentation"]
            },
            {
                name: "System Integration Analysis",
                description: "Led the analysis and integration of a new ERP system with existing business applications.",
                technologies: ["ERP Systems", "Data Modeling", "SQL"]
            },
            {
                name: "Technical Documentation Creation",
                description: "Developed comprehensive technical documentation for software implementation and support.",
                technologies: ["Technical Documentation", "Systems Analysis", "SQL"]
            }
        ]
    },{
        role: "Quality Assurance (QA) Engineer",
        skills: [
            "Manual Testing",
            "Automation Testing",
            "Selenium",
            "JUnit",
            "Load Testing",
            "Bug Tracking",
            "Test Case Design",
            "CI/CD"
        ],
        projects: [
            {
                name: "Automated Test Suite Development",
                description: "Developed a comprehensive automated test suite using Selenium and JUnit for a web application.",
                technologies: ["Selenium", "JUnit", "CI/CD"]
            },
            {
                name: "Load Testing for E-commerce Platform",
                description: "Performed load and stress testing on an e-commerce platform to ensure performance under peak load.",
                technologies: ["Load Testing", "Bug Tracking", "CI/CD"]
            },
            {
                name: "End-to-End Testing Framework",
                description: "Built an end-to-end testing framework for continuous integration and deployment pipelines.",
                technologies: ["Test Case Design", "Automation Testing", "CI/CD"]
            }
        ]
    },
    {
        role: "Technical Writer",
        skills: [
            "Technical Documentation",
            "Content Creation",
            "Editing",
            "SEO",
            "AP Style",
            "Markdown",
            "JIRA",
            "Git"
        ],
        projects: [
            {
                name: "User Guide for SaaS Platform",
                description: "Authored a comprehensive user guide for a SaaS product, including setup and troubleshooting steps.",
                technologies: ["Technical Documentation", "Markdown", "Content Creation"]
            },
            {
                name: "API Documentation",
                description: "Created detailed API documentation with code samples and use cases for developer integration.",
                technologies: ["Technical Documentation", "Markdown", "Git"]
            },
            {
                name: "Knowledge Base Articles",
                description: "Wrote and edited knowledge base articles to enhance customer support and onboarding.",
                technologies: ["SEO", "AP Style", "JIRA"]
            }
        ]
    },
    {
        role: "IT Support Specialist",
        skills: [
            "Technical Support",
            "Troubleshooting",
            "Networking",
            "Windows",
            "Linux",
            "Customer Support",
            "Ticketing Systems",
            "Remote Support"
        ],
        projects: [
            {
                name: "Helpdesk System Optimization",
                description: "Streamlined helpdesk ticketing system processes to reduce response time by 25%.",
                technologies: ["Ticketing Systems", "Customer Support", "Remote Support"]
            },
            {
                name: "Network Troubleshooting Guide",
                description: "Developed a comprehensive troubleshooting guide for common network issues.",
                technologies: ["Networking", "Technical Support", "Windows"]
            },
            {
                name: "IT Training Sessions",
                description: "Conducted IT training sessions for new hires to improve onboarding efficiency.",
                technologies: ["Windows", "Linux", "Customer Support"]
            }
        ]
    },
    {
        role: "Database Administrator (DBA)",
        skills: [
            "SQL",
            "Oracle",
            "MySQL",
            "Backup and Recovery",
            "Performance Tuning",
            "Data Security",
            "Database Design",
            "Replication"
        ],
        projects: [
            {
                name: "Database Migration Project",
                description: "Managed the migration of a large database from Oracle to MySQL with minimal downtime.",
                technologies: ["Oracle", "MySQL", "Backup and Recovery"]
            },
            {
                name: "Performance Tuning Initiative",
                description: "Optimized database performance by identifying slow queries and improving indexing strategies.",
                technologies: ["SQL", "Performance Tuning", "Database Design"]
            },
            {
                name: "Data Replication Setup",
                description: "Configured data replication for high availability and disaster recovery.",
                technologies: ["Replication", "Data Security", "SQL"]
            }
        ]
    },
    {
        role: "Embedded Systems Engineer",
        skills: [
            "C",
            "C++",
            "Microcontrollers",
            "RTOS",
            "Circuit Design",
            "Embedded Linux",
            "Firmware Development",
            "I2C/SPI"
        ],
        projects: [
            {
                name: "IoT Home Automation System",
                description: "Developed firmware for an IoT-based home automation system using microcontrollers and RTOS.",
                technologies: ["C", "Microcontrollers", "RTOS"]
            },
            {
                name: "Wearable Health Monitor",
                description: "Designed and programmed a wearable device for real-time health monitoring.",
                technologies: ["C++", "Embedded Linux", "Firmware Development"]
            },
            {
                name: "Robotic Arm Control System",
                description: "Implemented control software for a robotic arm with precise movement using I2C and SPI protocols.",
                technologies: ["C", "I2C/SPI", "Circuit Design"]
            }
        ]
    },
    {
        role: "Product Manager",
        skills: [
            "Product Roadmapping",
            "Market Analysis",
            "Agile",
            "User Story Creation",
            "MVP Planning",
            "Stakeholder Communication",
            "Data Analysis",
            "User Feedback"
        ],
        projects: [
            {
                name: "SaaS Product Launch",
                description: "Managed the end-to-end product launch of a SaaS platform, including MVP definition and user onboarding.",
                technologies: ["Product Roadmapping", "User Story Creation", "Agile"]
            },
            {
                name: "Feature Prioritization Framework",
                description: "Developed a feature prioritization framework based on user feedback and market analysis.",
                technologies: ["MVP Planning", "User Feedback", "Data Analysis"]
            },
            {
                name: "Cross-Functional Team Leadership",
                description: "Led a cross-functional team to develop and iterate on a mobile app product.",
                technologies: ["Stakeholder Communication", "Agile", "User Story Creation"]
            }
        ]
    },
    {
        role: "Robotics Engineer",
        skills: [
            "ROS (Robot Operating System)",
            "Python",
            "C++",
            "Machine Vision",
            "Path Planning",
            "Sensors and Actuators",
            "3D Simulation",
            "Robotic Arm Programming"
        ],
        projects: [
            {
                name: "Autonomous Navigation Robot",
                description: "Built an autonomous robot capable of navigating complex environments using ROS.",
                technologies: ["ROS", "Python", "Path Planning"]
            },
            {
                name: "Machine Vision System",
                description: "Implemented a machine vision system for a robotic inspection line.",
                technologies: ["Machine Vision", "C++", "Sensors and Actuators"]
            },
            {
                name: "Robotic Arm Simulation",
                description: "Simulated and programmed a robotic arm for precise assembly tasks in a virtual environment.",
                technologies: ["3D Simulation", "Robotic Arm Programming", "C++"]
            }
        ]
    },
    {
        role: "Network Engineer",
        skills: [
            "Routing and Switching",
            "Firewall Configuration",
            "VPNs",
            "Cisco",
            "Network Monitoring",
            "Load Balancing",
            "LAN/WAN",
            "VoIP"
        ],
        projects: [
            {
                name: "Corporate Network Infrastructure Upgrade",
                description: "Led a network infrastructure upgrade for improved speed and reliability in a corporate environment.",
                technologies: ["Routing and Switching", "Cisco", "LAN/WAN"]
            },
            {
                name: "Firewall and Security Implementation",
                description: "Configured firewalls and VPNs to enhance network security.",
                technologies: ["Firewall Configuration", "VPNs", "Network Monitoring"]
            },
            {
                name: "VoIP System Deployment",
                description: "Deployed a VoIP system for seamless communication across multiple offices.",
                technologies: ["VoIP", "Load Balancing", "Cisco"]
            }
        ]
    },
    {
        role: "UX Researcher",
        skills: [
            "User Interviews",
            "Usability Testing",
            "A/B Testing",
            "Persona Development",
            "Data Analysis",
            "Heatmap Analysis",
            "Surveys",
            "Prototyping"
        ],
        projects: [
            {
                name: "User Research for SaaS Onboarding",
                description: "Conducted user interviews and surveys to improve the onboarding process for a SaaS product.",
                technologies: ["User Interviews", "Surveys", "Data Analysis"]
            },
            {
                name: "A/B Testing for Feature Validation",
                description: "Ran A/B tests to validate new features and optimize user engagement.",
                technologies: ["A/B Testing", "Usability Testing", "Heatmap Analysis"]
            },
            {
                name: "Persona Development for E-commerce",
                description: "Developed user personas to guide the redesign of an e-commerce website.",
                technologies: ["Persona Development", "Prototyping", "User Feedback"]
            }
        ]
    },
    {
        role: "Mobile Game Developer",
        skills: [
            "Unity",
            "C#",
            "2D Game Design",
            "Game Physics",
            "Monetization Strategies",
            "Animation",
            "AR/VR Integration",
            "Play Store/App Store Deployment"
        ],
        projects: [
            {
                name: "2D Platformer Game",
                description: "Developed a 2D platformer game with complex physics and interactive levels using Unity.",
                technologies: ["Unity", "C#", "2D Game Design"]
            },
            {
                name: "AR Puzzle Game",
                description: "Built an augmented reality (AR) puzzle game with interactive gameplay using Unity.",
                technologies: ["Unity", "AR/VR Integration", "C#"]
            },
            {
                name: "In-app Monetization Implementation",
                description: "Implemented in-app purchases and ads for monetization of a mobile game.",
                technologies: ["Monetization Strategies", "Animation", "Play Store Deployment"]
            }
        ]
    },
   
    {
        role: "Salesforce Developer",
        skills: [
            "Salesforce",
            "Apex",
            "Visualforce",
            "Lightning Components",
            "SOQL",
            "Workflow Automation",
            "API Integration",
            "Data Migration"
        ],
        projects: [
            {
                name: "Custom Salesforce App",
                description: "Developed a custom Salesforce application using Apex and Visualforce for sales automation.",
                technologies: ["Salesforce", "Apex", "Visualforce"]
            },
            {
                name: "Lightning Component Development",
                description: "Created interactive Lightning components to enhance the Salesforce user experience.",
                technologies: ["Lightning Components", "Apex", "API Integration"]
            },
            {
                name: "Salesforce Data Migration",
                description: "Led the data migration project to move customer records from legacy CRM to Salesforce.",
                technologies: ["Data Migration", "SOQL", "Salesforce"]
            }
        ]
    },
    {
        role: "Full Stack Developer",
        skills: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "GraphQL",
            "JavaScript",
            "Responsive Design",
            "REST APIs"
        ],
        projects: [
            {
                name: "E-commerce Platform",
                description: "Built a full-stack e-commerce platform with React front-end and Node.js/Express back-end.",
                technologies: ["React", "Node.js", "MongoDB"]
            },
            {
                name: "GraphQL API",
                description: "Developed a GraphQL API for efficient data querying and interaction with the front-end.",
                technologies: ["GraphQL", "Node.js", "Express"]
            },
            {
                name: "Responsive Portfolio Site",
                description: "Created a responsive personal portfolio site showcasing various projects.",
                technologies: ["React", "Responsive Design", "JavaScript"]
            }
        ]
    },{
        role: "Cloud Solutions Architect",
        skills: [
            "AWS",
            "Azure",
            "Cloud Migration",
            "Containerization",
            "Infrastructure as Code",
            "Security Compliance",
            "Cost Optimization",
            "Multi-cloud Strategies"
        ],
        projects: [
            {
                name: "Cloud Migration for Retail Platform",
                description: "Led the migration of a legacy retail platform to AWS, improving scalability and performance.",
                technologies: ["AWS", "Cloud Migration", "Infrastructure as Code"]
            },
            {
                name: "Multi-cloud Strategy Implementation",
                description: "Designed a multi-cloud strategy to enhance reliability and vendor independence.",
                technologies: ["Azure", "Multi-cloud Strategies", "Containerization"]
            },
            {
                name: "Cost Optimization Initiative",
                description: "Implemented cost-saving measures that reduced cloud expenses by 30%.",
                technologies: ["Cost Optimization", "Security Compliance", "AWS"]
            }
        ]
    },
    {
        role: "Game Designer",
        skills: [
            "Game Mechanics",
            "Level Design",
            "Storyboarding",
            "Unity",
            "Unreal Engine",
            "Prototyping",
            "User Experience",
            "Playtesting"
        ],
        projects: [
            {
                name: "Fantasy RPG Game Development",
                description: "Designed core gameplay mechanics and levels for an immersive RPG game.",
                technologies: ["Unity", "Game Mechanics", "Level Design"]
            },
            {
                name: "Prototyping for Mobile Puzzle Game",
                description: "Created prototypes for a mobile puzzle game with intuitive UX.",
                technologies: ["Prototyping", "User Experience", "Playtesting"]
            },
            {
                name: "Narrative Storyboard for Adventure Game",
                description: "Developed a detailed storyboard for a story-driven adventure game.",
                technologies: ["Storyboarding", "Unreal Engine", "Game Mechanics"]
            }
        ]
    },
    {
        role: "AI/ML Engineer",
        skills: [
            "Machine Learning",
            "Deep Learning",
            "TensorFlow",
            "PyTorch",
            "Natural Language Processing",
            "Data Preprocessing",
            "Model Deployment",
            "Reinforcement Learning"
        ],
        projects: [
            {
                name: "Image Classification Model",
                description: "Built and trained an image classification model with high accuracy using TensorFlow.",
                technologies: ["TensorFlow", "Deep Learning", "Data Preprocessing"]
            },
            {
                name: "NLP Chatbot Development",
                description: "Developed an NLP-based chatbot for customer service using Python and NLP libraries.",
                technologies: ["Natural Language Processing", "PyTorch", "Model Deployment"]
            },
            {
                name: "Reinforcement Learning for Game AI",
                description: "Implemented a reinforcement learning model to create adaptive AI in a simulation game.",
                technologies: ["Reinforcement Learning", "PyTorch", "Game Development"]
            }
        ]
    },
   
    {
        role: "Security Engineer",
        skills: [
            "Penetration Testing",
            "Network Security",
            "Incident Response",
            "Threat Modeling",
            "Encryption",
            "Vulnerability Management",
            "SIEM",
            "Security Audits"
        ],
        projects: [
            {
                name: "Penetration Testing for Financial Platform",
                description: "Conducted comprehensive penetration testing to identify vulnerabilities in a banking platform.",
                technologies: ["Penetration Testing", "Network Security", "Vulnerability Management"]
            },
            {
                name: "Threat Model Development",
                description: "Created threat models for critical infrastructure projects to preemptively address risks.",
                technologies: ["Threat Modeling", "Security Audits", "SIEM"]
            },
            {
                name: "Incident Response Automation",
                description: "Implemented automated incident response procedures using scripts and SIEM tools.",
                technologies: ["Incident Response", "SIEM", "Encryption"]
            }
        ]
    },
    {
        role: "SEO Specialist",
        skills: [
            "SEO Strategy",
            "Keyword Research",
            "Content Optimization",
            "Link Building",
            "Google Analytics",
            "Technical SEO",
            "SEO Audits",
            "On-page Optimization"
        ],
        projects: [
            {
                name: "SEO Strategy for E-commerce Site",
                description: "Developed and executed an SEO strategy that increased organic traffic by 40%.",
                technologies: ["SEO Strategy", "Keyword Research", "Google Analytics"]
            },
            {
                name: "Technical SEO Audit",
                description: "Performed an in-depth technical SEO audit to identify and rectify site performance issues.",
                technologies: ["Technical SEO", "SEO Audits", "Content Optimization"]
            },
            {
                name: "Link Building Campaign",
                description: "Launched a link building campaign that improved domain authority significantly.",
                technologies: ["Link Building", "On-page Optimization", "SEO Strategy"]
            }
        ]
    },
    {
        role: "Technical Support Engineer",
        skills: [
            "Customer Support",
            "Troubleshooting",
            "Networking",
            "Windows Server",
            "Active Directory",
            "Remote Support",
            "Ticketing Systems",
            "Documentation"
        ],
        projects: [
            {
                name: "Customer Support Workflow Optimization",
                description: "Streamlined support workflows to reduce ticket resolution times by 20%.",
                technologies: ["Customer Support", "Ticketing Systems", "Documentation"]
            },
            {
                name: "Network Issue Troubleshooting Guide",
                description: "Developed comprehensive troubleshooting guides for common network issues.",
                technologies: ["Networking", "Remote Support", "Windows Server"]
            },
            {
                name: "Active Directory Management",
                description: "Managed and configured Active Directory to improve user authentication and access control.",
                technologies: ["Active Directory", "Troubleshooting", "Documentation"]
            }
        ]
    },
    {
        role: "Digital Marketing Specialist",
        skills: [
            "Digital Strategy",
            "Social Media Marketing",
            "Email Campaigns",
            "SEO",
            "PPC Advertising",
            "Content Creation",
            "Analytics",
            "A/B Testing"
        ],
        projects: [
            {
                name: "Comprehensive Digital Marketing Campaign",
                description: "Led a multi-channel marketing campaign that increased engagement by 50%.",
                technologies: ["Digital Strategy", "Social Media Marketing", "PPC Advertising"]
            },
            {
                name: "Email Campaign Optimization",
                description: "Enhanced email campaign open rates through targeted content and A/B testing.",
                technologies: ["Email Campaigns", "Content Creation", "A/B Testing"]
            },
            {
                name: "SEO and Content Strategy",
                description: "Developed a content strategy that boosted site rankings for competitive keywords.",
                technologies: ["SEO", "Content Creation", "Analytics"]
            }
        ]
    },
    
    {
        role: "Operations Manager",
        skills: [
            "Process Improvement",
            "Project Management",
            "Data Analysis",
            "Supply Chain Management",
            "Budgeting",
            "Leadership",
            "Strategic Planning",
            "Vendor Management"
        ],
        projects: [
            {
                name: "Process Optimization Project",
                description: "Led process improvements that increased operational efficiency by 30%.",
                technologies: ["Process Improvement", "Data Analysis", "Strategic Planning"]
            },
            {
                name: "Supply Chain Enhancement",
                description: "Streamlined supply chain processes to cut down delivery times by 15%.",
                technologies: ["Supply Chain Management", "Vendor Management", "Budgeting"]
            },
            {
                name: "Cross-department Collaboration",
                description: "Managed cross-functional teams to successfully implement a new company-wide project management system.",
                technologies: ["Leadership", "Project Management", "Strategic Planning"]
            }
        ]
    }, {
        role: "Flutter Developer",
        skills: [
            "Dart",
            "Flutter Framework",
            "Mobile App Development",
            "RESTful APIs",
            "State Management",
            "Cross-Platform Development",
            "UI/UX Design",
            "Debugging and Testing"
        ],
        projects: [
            {
                name: "E-commerce Mobile App",
                description: "Developed a cross-platform mobile app for an e-commerce business, integrating user authentication and payment systems.",
                technologies: ["Dart", "Flutter Framework", "RESTful APIs"]
            },
            {
                name: "Real-time Chat Application",
                description: "Built a real-time chat application supporting multimedia messaging.",
                technologies: ["Flutter Framework", "State Management", "Firebase"]
            },
            {
                name: "Health Monitoring App",
                description: "Created a health monitoring app that tracks and visualizes user health data.",
                technologies: ["Dart", "UI/UX Design", "Cross-Platform Development"]
            }
        ]
    },{
        role: "Finance",
        skills: [
            "Financial Analysis",
            "Budgeting",
            "Forecasting",
            "Risk Management",
            "Investment Strategies",
            "Financial Reporting",
            "Accounting Principles",
            "Regulatory Compliance"
        ],
        projects: [
            {
                name: "Budget Optimization Initiative",
                description: "Led an initiative that streamlined the annual budgeting process, reducing costs by 15%.",
                technologies: ["Budgeting", "Financial Analysis", "Cost Control"]
            },
            {
                name: "Investment Portfolio Management",
                description: "Managed a diverse investment portfolio resulting in a 12% average annual return.",
                technologies: ["Investment Strategies", "Risk Management", "Financial Reporting"]
            },
            {
                name: "Regulatory Compliance Overhaul",
                description: "Implemented new compliance procedures to meet updated financial regulations, avoiding penalties.",
                technologies: ["Regulatory Compliance", "Accounting Principles", "Data Analysis"]
            }
        ]
    },
    {
        role:" IT Manager",
        skills: [
            "IT Strategy",
            "Team Leadership",
            "System Administration",
            "Project Management",
            "Vendor Management",
            "Network Infrastructure",
            "Budget Management",
            "Cybersecurity Awareness"
        ],
        projects: [
            {
                name: "IT Infrastructure Upgrade",
                description: "Directed a company-wide infrastructure upgrade, improving system uptime by 25% and performance.",
                technologies: ["System Administration", "Network Infrastructure", "Project Management"]
            },
            {
                name: "Cybersecurity Initiative",
                description: "Spearheaded an initiative to bolster IT security measures, reducing vulnerability incidents by 40%.",
                technologies: ["Cybersecurity Awareness", "Vendor Management", "Risk Assessment"]
            },
            {
                name: "Team Restructuring Project",
                description: "Oversaw the restructuring of the IT team to enhance productivity and workflow efficiency.",
                technologies: ["Team Leadership", "IT Strategy", "Budget Management"]
            }
        ]
    },
    {
        role: "Accountant",
        skills: [
            "Financial Reporting",
            "Tax Preparation",
            "Bookkeeping",
            "Reconciliation",
            "Financial Analysis",
            "Accounts Payable and Receivable",
            "Budgeting",
            "GAAP Compliance"
        ],
        projects: [
            {
                name: "Quarterly Financial Reports",
                description: "Prepared comprehensive quarterly financial reports, leading to better decision-making.",
                technologies: ["Financial Reporting", "GAAP Compliance", "Data Analysis"]
            },
            {
                name: "Tax Filing Project",
                description: "Managed tax preparation and filing, ensuring adherence to current tax regulations.",
                technologies: ["Tax Preparation", "Regulatory Compliance", "Financial Analysis"]
            },
            {
                name: "Accounts Reconciliation Initiative",
                description: "Streamlined the reconciliation process, reducing discrepancies by 20%.",
                technologies: ["Reconciliation", "Bookkeeping", "Budgeting"]
            }
        ]
    },
    {
        role:" Sales Manager",
        skills: [
            "Sales Strategy",
            "Team Management",
            "Customer Relationship Management (CRM)",
            "Market Analysis",
            "Lead Generation",
            "Negotiation",
            "Sales Forecasting",
            "Product Knowledge"
        ],
        projects: [
            {
                name: "Sales Growth Initiative",
                description: "Led a targeted sales campaign that boosted quarterly revenue by 25%.",
                technologies: ["Sales Strategy", "Lead Generation", "CRM"]
            },
            {
                name: "CRM Implementation",
                description: "Implemented a new CRM system that improved client management and follow-up processes.",
                technologies: ["Customer Relationship Management (CRM)", "Team Management", "Market Analysis"]
            },
            {
                name: "Market Expansion Project",
                description: "Executed a market expansion plan, resulting in a 15% increase in client base.",
                technologies: ["Market Analysis", "Negotiation", "Sales Strategy"]
            }
        ]
    },
    {
        role:" IT Security",
        skills: [
            "Cybersecurity",
            "Risk Assessment",
            "Incident Response",
            "Network Security",
            "Compliance Management",
            "Security Audits",
            "Firewall Configuration",
            "Threat Mitigation"
        ],
        projects: [
            {
                name: "Security Audit and Response",
                description: "Conducted a full security audit and implemented solutions that reduced threats by 50%.",
                technologies: ["Security Audits", "Threat Mitigation", "Compliance Management"]
            },
            {
                name: "Incident Response Framework",
                description: "Developed an incident response plan that minimized downtime during security breaches.",
                technologies: ["Incident Response", "Network Security", "Risk Assessment"]
            },
            {
                name: "Firewall Enhancement Project",
                description: "Enhanced firewall policies, boosting network security and reducing unauthorized access attempts.",
                technologies: ["Firewall Configuration", "Network Security", "Cybersecurity"]
            }
        ]
    },
    {
        role: "Network Administrator",
        skills: [
            "Network Configuration",
            "LAN/WAN Management",
            "Troubleshooting",
            "Network Security",
            "VPN Management",
            "Server Maintenance",
            "Routing and Switching",
            "Firewall Configuration"
        ],
        projects: [
            {
                name: "Network Upgrade Project",
                description: "Upgraded network infrastructure to support higher traffic, improving connectivity by 30%.",
                technologies: ["Network Configuration", "LAN/WAN Management", "Routing and Switching"]
            },
            {
                name: "VPN Deployment",
                description: "Deployed a secure VPN solution to support remote work policies for over 500 employees.",
                technologies: ["VPN Management", "Network Security", "Firewall Configuration"]
            },
            {
                name: "Server Optimization",
                description: "Conducted server maintenance and optimization to enhance performance and reduce downtime.",
                technologies: ["Server Maintenance", "Troubleshooting", "Network Configuration"]
            }
        ]
    },
    {
        role: "Technical Support Engineer",
        skills: [
            "Customer Support",
            "Troubleshooting",
            "System Analysis",
            "Technical Documentation",
            "Problem Solving",
            "Software Installation",
            "Remote Assistance",
            "Network Support"
        ],
        projects: [
            {
                name: "Customer Support Workflow Improvement",
                description: "Redesigned support workflow to reduce response time and increase customer satisfaction by 20%.",
                technologies: ["Customer Support", "System Analysis", "Technical Documentation"]
            },
            {
                name: "Remote Support Initiative",
                description: "Implemented a remote support strategy that improved service efficiency for clients worldwide.",
                technologies: ["Remote Assistance", "Troubleshooting", "Software Installation"]
            },
            {
                name: "Knowledge Base Development",
                description: "Created a comprehensive knowledge base to assist support teams in resolving issues more effectively.",
                technologies: ["Technical Documentation", "Problem Solving", "Network Support"]
            }
        ]
    },
    {
        role:"Information Security Analyst",
        skills: [
            "Threat Analysis",
            "Security Monitoring",
            "Incident Response",
            "Vulnerability Assessment",
            "Data Protection",
            "SIEM Tools",
            "Compliance Audits",
            "Risk Mitigation"
        ],
        projects: [
            {
                name: "Threat Detection System Implementation",
                description: "Deployed a threat detection system, improving real-time security monitoring capabilities.",
                technologies: ["Threat Analysis", "SIEM Tools", "Security Monitoring"]
            },
            {
                name: "Data Protection Initiative",
                description: "Led a data protection project that enhanced data encryption and safeguarded sensitive information.",
                technologies: ["Data Protection", "Compliance Audits", "Risk Mitigation"]
            },
            {
                name: "Incident Response Enhancement",
                description: "Enhanced incident response protocols, reducing the average response time by 30%.",
                technologies: ["Incident Response", "Vulnerability Assessment", "Risk Mitigation"]
            }
        ]
    }, {
        role: "Business Intelligence Analyst",
        skills: [
            "Data Analysis",
            "Business Reporting",
            "SQL",
            "Data Visualization",
            "ETL Processes",
            "Critical Thinking",
            "Dashboard Development",
            "Predictive Analytics"
        ],
        projects: [
            {
                name:"Sales Performance Dashboard",
                description: "Developed an interactive dashboard that provided insights into regional sales performance, boosting decision-making efficiency.",
                technologies: ["SQL", "Data Visualization", "Dashboard Development"]
            },
            {
                name: "Market Trend Analysis",
                description: "Conducted a comprehensive market trend analysis that forecasted key business opportunities and risks.",
                technologies: ["Data Analysis", "Predictive Analytics", "Business Reporting"]
            },
            {
                name: "ETL Pipeline Optimization",
                description: "Enhanced ETL processes to improve data quality and reduce processing time by 25%.",
                technologies: ["ETL Processes", "SQL", "Critical Thinking"]
            }
        ]
    },
        {
            role:" Graphic Designer",
            skills: [
                "Adobe Creative Suite",
                "Typography",
                "Illustration",
                "Brand Identity",
                "Layout Design",
                "Creative Thinking",
                "User-Centric Design",
                "Color Theory"
            ],
            projects: [
                {
                    name:" Brand Redesign Project",
                    description: "Led the redesign of a company's brand identity, including logo and marketing materials, to modernize its visual presence.",
                    technologies: ["Adobe Illustrator", "Brand Identity", "Typography"]
                },
                {
                    name:"Marketing Campaign Graphics",
                    description: "Designed comprehensive visual assets for a successful marketing campaign, enhancing engagement by 40%.",
                    technologies: ["Adobe Photoshop", "Layout Design", "Creative Thinking"]
                },
                {
                    name:" User-Friendly Website Mockups",
                    description: "Developed interactive mockups focusing on user-centric design, improving client satisfaction.",
                    technologies: ["Adobe XD", "User-Centric Design", "Illustration"]
                }
            ]
        },
        {
            role: "Fashion Designer",
            skills: [
                "Fashion Illustration",
                "Textile Knowledge",
                "Pattern Making",
                "Sewing Techniques",
                "Trend Analysis",
                "Collection Development",
                "Creative Direction",
                "Color Matching"
            ],
            projects: [
                {
                    name: "Summer Collection 2024",
                    description: "Designed and launched a summer clothing line that received high praise for its innovative use of sustainable materials.",
                    technologies: ["Fashion Illustration", "Collection Development", "Textile Knowledge"]
                },
                {
                    name:"Couture Dress Project",
                    description: "Created custom couture dresses for high-profile clients, showcasing detailed pattern making and sewing techniques.",
                    technologies: ["Pattern Making", "Sewing Techniques", "Creative Direction"]
                },
                {
                    name: "Fashion Trend Analysis Report",
                    description: "Conducted extensive trend analysis to forecast the upcoming season’s popular styles and colors.",
                    technologies: ["Trend Analysis", "Color Matching", "Fashion Illustration"]
                }
            ]
        }  
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
    
