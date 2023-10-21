// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/license/${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `(https://opensource.org/license/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return 'This project is not covered by any license.';
  }
  return `This project is licensed under [${license} license](https://opensource.org/license/${license}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseNotice = renderLicenseSection(data.license);

  return `
  # ${data.title}

  ${licenseBadge}
  

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${licenseNotice}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please feel free to reach out to me on [GitHub](https://github.com/${data.github}) or by email at ${data.email}.
  `;
  }

module.exports = generateMarkdown;
