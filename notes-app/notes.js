const fs = require("fs");
const chalk = require("chalk")
const fileName = 'notes.json';

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(n => n.title == title)

    if (note) {
        console.log(chalk.bold(note.title));
        console.log(note.body);
    } else
        console.log(chalk.bgRed("Note not found!"));
}

const addNote = (title, body) => {
    const notes = loadNotes();

    if (!notes.find(n => n.title == title)) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.bgGreen("New note added."));
    } else {
        console.log(chalk.bgRed("Note title already exists."))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter(n => n.title !== title);

    if (notesToKeep.length < notes.length) {
        console.log(chalk.bgGreen("Note Removed!"));
        saveNotes(notesToKeep);
    } else
        console.log(chalk.bgRed("Note not found!"));
}

const listNotes = () => {
    console.log(chalk.bold("Your Notes:"));
    loadNotes().forEach(n => console.log(n.title));
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync(fileName).toString());
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => fs.writeFileSync(fileName, JSON.stringify(notes));

module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}