Notes-App
-
A simple project for taking notes.

Usage:
-
node app.js [command] --title="ABCD" --body="ABCD"

node app.js add --title="My note" --body="Important Text"

node app.js add --title="Hello" --body="Hello world!"

node app.js list

node app.js read --title="My note"

node app.js remove --title="Hello"

Commands:
-
  node app.js add     Add a new note. Needs a title and a body.
  
  node app.js remove  Removes a note. Needs a title.
  
  node app.js list    Lists all notes.
  
  node app.js read    Reads a note. Needs a title.
  
Options:
-
  --help     Show help
  
  --version  Show version number
  
  npm modules used:
  -
  Chalk
  
  Yargs
