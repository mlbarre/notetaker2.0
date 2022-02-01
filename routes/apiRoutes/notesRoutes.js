const router = require('express').Router();
const express = require('express');
// const newNoteData = require('./db/db.json');
const app = express();



router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});

router.post('/api/notes', (req, res) => {
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


module.exports = router;