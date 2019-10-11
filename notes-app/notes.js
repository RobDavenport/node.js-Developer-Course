const fs = require("fs");
const chalk = require("chalk")
const fileName = 'notes.json';

const getNotes = function () {
    return "My Notes...";
}

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicates = notes.filter(function (n) { return n.title === title; });

    if (duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.bgGreen("New note added."))
    } else {
        console.log(chalk.bgRed("Note title already exists."))
    }
}

const removeNote = function (title) {
    const notes = loadNotes();

    const notesToKeep = notes.filter(function(n) { return n.title !== title; });

    if (notesToKeep.length < notes.length) {
        console.log(chalk.bgGreen("Note Removed!"))
        saveNotes(notesToKeep);
    } else
        console.log(chalk.bgRed("Note not found!"))
}

const listNotes = function() {

}

const loadNotes = function () {
    try {
        return JSON.parse(fs.readFileSync(fileName).toString());
    } catch (e) {
        return []
    }
}

const saveNotes = function (notes) {
    fs.writeFileSync(fileName, JSON.stringify(notes));
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}