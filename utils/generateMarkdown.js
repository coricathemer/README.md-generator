// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none') {
    let licenseString
    if(license == 'MIT'){
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-${license})]'
    }
    if(license == 'Mozilla'){
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-${license})]'
    }
    // return `[![License: MIT](https://img.shields.io/badge/License-MIT-${license})]`;
  } 
  return '';
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // (https://opensource.org/licenses/MIT)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title 
${data.title}

## Description
${data.description}

`;
}

module.exports = generateMarkdown;
