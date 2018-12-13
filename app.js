const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
 .command('add', 'Add a new note', {
   title: {
     describe: 'Title of note',
     demand: true,
     alias: 't'
   },
   body: {
     describe: 'body of the note',
     demand: true,
     alias: 'b'
   }
 })
 .command('list', 'List all notes')
 .command('read', 'Fetch a note' ,{
   title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
   }
 })
 .command('remove', 'Delete a note',{
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
   }
 })
 .help()
 .argv;
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
  var allNotes = notes.getAll();
  console.log(`Printing ${ allNotes.length} notes`);
  allNotes.forEach(note => {
    console.log(`Title: ${note.title} \nBody: ${ note.body} \n`);
  });
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
