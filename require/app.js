
console.log('starting app.js');

const fs = require('fs');

const user = require('user-info');
console.log(user());
fs.appendFile('greetings.txt',`hello ${user().username}!`,function(err){
    if(err){
        console.log('unable to open file');
    }
});