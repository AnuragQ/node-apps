const  fs = require('fs');
const yargs =require('yargs')

const notes= require('./notes')

const argv =yargs.argv;
console.log('process:',process.argv);
console.log('yargs:',argv)

var command =process.argv[2];
console.log('Command: ',command);




if (command==='add'){
    notes.addNote(argv.title,argv.body);    

} else 
if (command==='list'){
    console.log('listing');
    
}else 
if (command==='read'){
    console.log('reading');
    
}else 
if (command==='remove'){
    console.log('removing');
    
}
else{
    console.log('command not identified');
}