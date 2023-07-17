// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that will display a list of comments
app.get('/comments', (request, response) => {
    response.send('List of comments');
});

// Create a route that will display a single comment
app.get('/comments/:id', (request, response) => {
    const id = request.params.id;
    response.send(`Comment ${id}`);
});

// Create a route that will display a list of comments for a post
app.get('/posts/:postId/comments', (request, response) => {
    const postId = request.params.postId;
    response.send(`Comments for post ${postId}`);
});

// Create a route that will display a form for creating a comment
app.get('/comments/new', (request, response) => {
    response.send('Form for creating a comment');
});

// Create a route that will display a form for editing a comment
app.get('/comments/:id/edit', (request, response) => {
    const id = request.params.id;
    response.send(`Form for editing comment ${id}`);
});

// Create a route that will delete a comment
app.delete('/comments/:id', (request, response) => {
    const id = request.params.id;
    response.send(`Delete comment ${id}`);
});

// Create a route that will create a comment
app.post('/comments', (request, response) => {
    response.send('Create comment');
});

// Create a route that will update a comment
app.put('/comments/:id', (request, response) => {
    const id = request.params.id;
    response.send(`Update comment ${id}`);
});

// Start the web server
app.listen(port, () => {
    console.log(`Web server running at http://localhost:${port}`);
});