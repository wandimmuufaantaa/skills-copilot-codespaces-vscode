// Create a web server
// http://localhost:3000
const express = require('express');
const app = express();

const comments = require('./comments.json');

app.get('/', (req, res) => {
    res.send('Welcome to our API');
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found');
    }
    res.json(comment);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));