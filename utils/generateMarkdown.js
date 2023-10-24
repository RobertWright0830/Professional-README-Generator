//Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `(https://opensource.org/license/${license})`;
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return 'This project is not covered by any license.';
  }
  return `This project is licensed under [${license} license](https://opensource.org/license/${license}).`;
}

// Function to generate markdown for README and reassign license names for badges
function generateMarkdown(data) {
  let licenseBadge;
  switch (data.license) {
    case 'Apache-2.0':
      licenseBadge = renderLicenseBadge('Apache_2.0');
      break;
    case 'GPL-3.0':
      licenseBadge = renderLicenseBadge('GPL_3.0');
      break;
    case 'BSD-2-Clause':
      licenseBadge = renderLicenseBadge('BSD_2_Clause');
      break;
    case 'BSD-3-Clause':
      licenseBadge = renderLicenseBadge('BSD_3_Clause');
      break;
    case 'BSL-1.0':
      licenseBadge = renderLicenseBadge('BSL_1.0');
      break;
    case 'EPL-2.0':
      licenseBadge = renderLicenseBadge('EPL_2.0');
      break;
    case 'AGPL-v3':
      licenseBadge = renderLicenseBadge('AGPL_v3');
      break;
    case 'GPL-2.0':
      licenseBadge = renderLicenseBadge('GPL_2.0');
      break;
    case 'LGPL-2.1':
      licenseBadge = renderLicenseBadge('LGPL_2.1');
      break;
    case 'MPL-2.0':
      licenseBadge = renderLicenseBadge('MPL_2.0');
      break;
    default:
      licenseBadge = renderLicenseBadge(data.license);
  }
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
  ${data.credits}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please feel free to reach out to me on [GitHub](https://github.com/${data.githubUsername}) or by email at ${data.email}.
  `;
  }

module.exports = generateMarkdown;
