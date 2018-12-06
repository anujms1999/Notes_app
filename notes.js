var addNote = (title , body) => {
  console.log(title,body);
};

var getAll = () => {
  console.log("Getting all notes");
}

var getNote = (title) => {
  console.log(title);
}

var removeNote = (title) => {
  console.log('Removing note');
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
