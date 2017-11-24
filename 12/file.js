var fs = require('fs');

// fs.writeFile('message.txt', 'Hello Node', function (err) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });

fs.writeFileSync('message.txt', 'Hello Node');
console.log('It\'s saved!');  //call back hell에서 빠져나가자 !


// var file = fs.writeFile('message.txt', 'Hello Node');
