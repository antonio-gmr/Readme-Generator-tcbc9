

// function to show the data set on the inputs 

function markDown (data) {
    return `
# ${data.projectTitle}

## description 

${data.description}




## Table of Contents

* [Installation](#installation)
* [Contributors](#projectContributors)
* [Restrictions](#projectRestrictions)
* [Tests](#test)
* [Contact](#contact)


## Installation

${data.installation}


## Contributors

${data.projectContributors}

## Restrictions 

${data.projectRestrictions}

## test

${data.test}

## License 

${data.license}

## author

${data.author}

## contact information

(https://github.com/${data.github})
${data.email}`
}

console.log(markDown);

// export the function 

module.exports = markDown;
