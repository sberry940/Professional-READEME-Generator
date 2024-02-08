// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(liscense) {
  if (license !== 'None') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}
//function that returns license link
function renderLicenseLink(license) {
  if(license !== 'none') {
    return `\n* [license](#license)\n`;
  }
  return '';
}

//function that returns license section
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `## License
    Licensed under the ${license} license.`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
