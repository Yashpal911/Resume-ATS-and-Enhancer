const headings = ["Skills", "Experience","qualification","education","academics","academics profile","Abilities","Technical Skills","profile","summary","overview"]; // Add any additional headings to this array

const education = ["qualification","education","academics","academics profile"]
const  skills = ["skills", "Abilities","Technical Skills",""]
const summary = ["profile","summary","overview"]

const headingPattern = headings.join("|"); // Join the array items with "|"
const educationPattern = education.join("|");
const skillsPattern = skills.join("|");
const summaryPattern = summary.join("|");

export { headingPattern, educationPattern , skillsPattern, summaryPattern }; // Export the patterns as a module


