// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if(license === "None"){
    return "";
  }
  console.log(license)

  switch(license){
      case "Apache 2.0 License":
        badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
        break;
      case "Boost Software License 1.0":
        badge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
        break;
      case "GNU GPL v3":
        badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
        break;
      case "GNU GPL v2":
        badge = "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
        break;
      case "GNU LGPL v3":
        badge = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
        break;
      case "GNU AGPL v3":
        badge = "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
        break;
      case "GNU FDL v1.3":
        badge = "![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)";
        break;
      case "ISC License (ISC)":
        badge = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
        break;
      case "The MIT License":
        badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
        break;
      case "Mozilla Public License 2.0":
        badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
        break;
      case "The Unlicense":
        badge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
        break;
  }

  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ''
  if(license === "None"){
    return "";
  }

  console.log(license);
  switch(license){
      case "Apache 2.0 License":
        link = "https://opensource.org/licenses/Apache-2.0"
        break;
      case "Boost Software License 1.0":
        link = "https://www.boost.org/LICENSE_1_0.txt";
        break;
      case "GNU GPL v3":
        link = "https://www.gnu.org/licenses/gpl-3.0";
        break;
      case "GNU GPL v2":
        link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
        break;
      case "GNU LGPL v3":
        link = "https://www.gnu.org/licenses/lgpl-3.0";
        break;
      case "GNU AGPL v3":
        link = "https://www.gnu.org/licenses/agpl-3.0";
        break;
      case "GNU FDL v1.3":
        link = "https://www.gnu.org/licenses/fdl-1.3";
        break;
      case "ISC License (ISC)":
        link = "https://opensource.org/licenses/ISC";
        break;
      case "The MIT License":
        link = "https://opensource.org/licenses/MIT";
        break;
      case "Mozilla Public License 2.0":
        link = "https://opensource.org/licenses/MPL-2.0";
        break;
      case "The Unlicense":
        link = "http://unlicense.org/";
        break;
  }

  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None"){
    return ""
  }
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  return`
  ## License

  ${licenseBadge}

  Please access the link detailing the license here: ${licenseLink}
  `

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.specificLicense)
  let specificBadge = renderLicenseBadge(data.specificLicense);
  let licenseRender = renderLicenseSection(data.specificLicense)

  return `
  # ${data.title}
  ${specificBadge}
  ## Description

  ${data.projectMotivation}

  ${data.buildIncentive}

  ${data.problemSolved}

  ${data.lessonLearnt}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${licenseRender}

  ## Contribute

  ${data.contribute}

  ## Tests

  ${data.tests}
    
  ## Questions
  If you have any additional questions about this project please contact me at my email ${data.email}.

  You can also check out my Github here:
  https://github.com/${data.githubUsername}
  `;
}

module.exports = generateMarkdown;



