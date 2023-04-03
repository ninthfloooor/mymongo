const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    published_date: { type: Date, default: Date.now  }
});

const Blog = mongoose.model('blog', blogSchema);
 /* 
let blog = new Blog({
    title: "Tutorial",
    author: "jjeong",
    body: "wow this is my new body"
});

blog.save((err,blog) => {
    if(err) return console.log(err);
    console.dir(blog);
});
 */
module.exports = mongoose.model('blog', blogSchema);