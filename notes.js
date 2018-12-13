const fs = require('fs');

var fetchNotes = () => {
  try{// for first note
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
    } catch(e){
      return [];
    }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title , body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => { // to avoid notes with same title
    return note.title === title;
  });
  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  return fetchNotes();

}

var getNote = (title) => {
  var notes = fetchNotes();
  var requiredNote = notes.filter((note) => {
    return note.title === title;
  });
  return requiredNote[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();

  var newNotes = notes.filter( (note) => {
    return note.title !== title ;
  }
  );
  saveNotes(newNotes);
  return notes.length !== newNotes.length;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
