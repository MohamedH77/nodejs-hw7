//date and time
function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  return `${month} ${day}, ${year}`;
}



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GPL 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "BSD 3") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return `${license}`;
  }
}

function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return `* [License](#license)\n`;
  }
}

function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `## License

This project is licensed under the ${license} license. Click [here](https://choosealicense.com/licenses/${license.toLowerCase().replace(" ", "-")}/) for more information.`;
  }
}
function generateMarkdown(data) {
  console.log("generateMarkdown", data)

  return `# ${data.project}
## Table of Contents
  -----------------
  - [Description](#description)
  - [Installation](#installation)
  - [Tests](#tests)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Credits](#credits)

## Description  
  ${data.description}

## Installation
  ${data.installation}

## Tests 
  ${data.tests}

## Usage 
  ${data.usage}

## License 
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

## Contributing  
  ${data.contributing}

  ## Credits  
  ${data.email}

  ## GitHub  
  ${data.github}

  ---
  Last updated: ${getCurrentDate()}
  `;
} 
module.exports = generateMarkdown;