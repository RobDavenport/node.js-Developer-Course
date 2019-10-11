const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note.',
    builder: {
        title: {
            describe: "Note title to remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
});

yargs.command({
    command: 'list',
    describe: 'Lists all notes.',
    handler: function() {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Reads a note.',
    handler: function() {
        console.log("reading notes...");
    }
});

yargs.parse();