const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note === undefined){
      console.log("Title already exists");
    }
    else{
      console.log(`Note created ${note.title} ${note.body}`);
    }
}
else if(command === 'list'){
  notes.getAll();
}
else if(command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log(note.body);
  }
  else{
    console.log("Note not found");
  }
}
else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  if(noteRemoved){
    console.log(`Note with ${argv.title} removed`);
  }
  else{
    console.log("Note not found");
  }
}
else{
  console.log('Command not found');
}
