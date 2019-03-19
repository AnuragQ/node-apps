const fs =require('fs');

var fetchNotes = ()=>{
    try{
        var notesString =fs.readFileSync('notes-data.json');
        notes=JSON.parse(notesString);
        return notes;
    } catch(e){
        return [];
    }
};
var saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote=(title,body)=>{
    var notes=[];
    var note={
        title,
        body
    };

    notes=fetchNotes();

    var duplicateNotes =notes.filter((note)=> note.title===title);


    if(duplicateNotes.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

var getAll=()=>{
    console.log("getting all notes")
};

var read=(title)=>{
    console.log(`reading note: ${title}`)
};

var remove=(title)=>{
    
    notes=fetchNotes();
    var filteredNotes=notes.filter((note)=>note.title!==title)
    saveNotes(filteredNotes);
        
    return notes.length !== filteredNotes.length;
    
};

module.exports={
    addNote,
    getAll,
    read,
    remove
};

