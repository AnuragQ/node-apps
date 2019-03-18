const  fs = require('fs');
const yargs =require('yargs')

const notes= require('./notes')

const argv =yargs.argv;
console.log('process:',process.argv);
console.log('yargs:',argv)

var command =argv._[0];
console.log('Command: ',command);




if (command==='add'){
    notes.addNote(argv.title,argv.body);    

} else 
if (command==='list'){
    notes.getAll();
    
}else 
if (command==='read'){
    notes.read(argv.title);    
}else 
if (command==='remove'){
    notes.remove(argv.title);
}
else{
    console.log('command not identified');
}