const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'

};

originalNoteString=JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');

note=JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);