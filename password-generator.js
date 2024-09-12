const generator = require('generate-password');

const password = generator.generate({
  length: 8,
  numbers: true
});

console.log('Generated Password:', password);