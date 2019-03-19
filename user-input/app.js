const  fs = require('fs');
const yargs =require('yargs')

const notes= require('./notes')

const argv =yargs.argv;
console.log('process:',process.argv);
console.log('yargs:',argv)

var command =argv._[0];
console.log('Command: ',command);




if (command==='add'){
    var note=notes.addNote(argv.title,argv.body);    
    if(note!=undefined){
        console.log(`the saved note is: Title: ${note.title} Body: ${note.body}`)
    } else{
        console.log('the note is invalid or duplicate');
    }
} else 
if (command==='list'){
    notes.getAll();
    
}else 
if (command==='read'){
    notes.read(argv.title);    
}else 
if (command==='remove'){
    var note=notes.remove(argv.title);
    if(note){
        console.log(`the removed note is: Title: ${argv.title} `)
    } else{
        console.log('the note is invalid or or does not exist');
    }
}
else{
    console.log('command not identified');
}