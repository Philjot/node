const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created and data written to welcome.txt');
});


fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});