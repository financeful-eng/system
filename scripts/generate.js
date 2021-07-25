require('colors');
const fs = require('fs');
const path = require('path');
const templates = require('./templates');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Looks like you forgot a component name'.red);
  console.log('Example: yarn generate SomeComponent'.yellow);
  process.exit(1);
}

console.log('Creating Component Templates with name: '.blue + componentName);

const componentDirectory = `./src/${componentName}`;
console.log(componentDirectory.yellow);

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content,
  );
});

console.log('Success!'.green);
console.log('Created component in ${componentDirectory}'.blue);
