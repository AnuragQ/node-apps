
console.log('starting app.js');

const fs = require('fs');

const notes=require('./notes');
const _=require('lodash');

// const user = require('user-info');
// console.log(user());
// fs.appendFile('greetings.txt',`hello ${user().username}!`,function(err){
//     if(err){
//         console.log('unable to open file');
//     }
// });
// console.log(notes.add(8,-3));

var filArrary=_.uniq(['anurag','anurag',2,3,4,2,5,6]);
console.log(filArrary);