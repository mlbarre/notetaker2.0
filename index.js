const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const apiRoutes = require('./routes/apiRoutes/notesRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes/index.js');

const fs = ('fs');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});