const  fs = require('fs');
const yargs =require('yargs')

const notes= require('./notes')

const titleOptions={
    describe:"title of note",
    demand:true,
    alias:'t'
}
const bodyOptions={
    describe:"body of note",
    demand:true,
    alias:'b'
}

const argv =yargs
.command('add','add a note',{
    title : titleOptions,
    body: bodyOptions
})
.command('list','list all notes')
.command('read','read a note',{
    title : titleOptions


})
.command('remove','remove a note',{
    title : titleOptions
})
.help()
.argv;
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