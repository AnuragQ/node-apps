var addNote=(title,body)=>{
    console.log('adding note',title,body)
};

var getAll=()=>{
    console.log("getting all notes")
};

var read=(title)=>{
    console.log(`reading note: ${title}`)
};

var remove=(title)=>{
    console.log(`removing note: ${title}`)
};

module.exports={
    addNote,
    getAll,
    read,
    remove
};

