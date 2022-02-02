const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes/notesRoutes.js');
// const htmlRoutes = require('./routes/htmlRoutes/index.js');

const fs = ('fs');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../notetaker2.0/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notetaker2.0/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../notetaker2.0/public/index.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notetaker2.0/db/db.json'));
});

app.post('/api/notes', (req, res) => {
    var addingNewNote = () => {
    const body = body;
    const emptyNote = [];

    body.id = emptyNote[0];
    emptyNote[0]++;

    emptyNote.push(body);
}
    const note = addingNewNote(req.body, newNoteData);
    res.json(note);
});


// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});