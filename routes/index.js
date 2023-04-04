const blogs = require("../models/blogs");

module.exports = (app) => {
     // GET ALL blogs
     app.get('/api/blogs', function(req,res){
        blogs.find((err, blogs) => {
            if(err) return res.status(500).send({error : "database failure"});
            res.json(blogs)
        })
    });
    // GET SINGLE blog
    app.get('/api/blogs/:blog_id', function(req, res){
        res.end();
    });
    // GET blog BY AUTHOR
    app.get('/api/blogs/author/:author', function(req, res){
        res.end();
    });
    // CREATE BOOK
    app.post('/api/blogs', function(req, res){
        res.end();

    });
    // UPDATE THE BOOK
    app.put('/api/blogs/:blog_id', function(req, res){
        res.end();
    });
    // DELETE BOOK
    app.delete('/api/books/:blog_id', function(req, res){
        res.end();
    });

}