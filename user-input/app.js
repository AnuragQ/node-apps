const  fs = require('fs');
const yargs =require('yargs')

const notes= require('./notes')

const argv =yargs.argv;
console.log('process:',process.argv);
console.log('yargs:',argv)

var command =argv._[0];
console.log('Command: ',command);

var logNote=(note)=>{
    debugger;
    if(note!=undefined){
        console.log(`the saved note is: Title: ${note.title} Body: ${note.body}`)
    } else{
        console.log('the note is invalid or duplicate');
    }
}


if (command==='add'){
    var note=notes.addNote(argv.title,argv.body);    
    if(note!=undefined){
        console.log(`the saved note is: Title: ${note.title} Body: ${note.body}`)
    } else{
        console.log('the note is invalid or duplicate');
    }
} else 
if (command==='list'){
    var allNotes=notes.getAll();
    allNotes.forEach((element) =>logNote(element));
    
}else 
if (command==='read'){
    note=notes.read(argv.title);  
    logNote(note);
}else 
if (command==='remove'){
    var note=notes.remove(argv.title);
    logNote(note);

}
else{
    console.log('command not identified');
}