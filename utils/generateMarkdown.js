// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none') {
  
    if(license == 'MIT'){
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if(license == 'Mozilla'){
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    // return `[![License: MIT](https://img.shields.io/badge/License-MIT-${license})]`;
    } 
  return '';
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none'){
      if(license == 'MIT'){
        return 'https://opensource.org/licenses/MIT'
      }
      if(license == 'Mozilla'){
        return 'https://opensource.org/licenses/MPL-2.0'
      }
    }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No license') {
    return '';
  }
  return `
  ## License 
  ${renderLicenseBadge(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title 
${data.title} ${renderLicenseSection(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* ${renderLicenseLink(data.license)}
* [Contributing](#contributing)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have questions about my project I can be reached at: ${data.email}
To see more repos visit: [Github](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
