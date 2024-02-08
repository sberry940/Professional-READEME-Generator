// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(liscense) {
  if (license !== 'None') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
