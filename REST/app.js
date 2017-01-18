var bodyParse = require("body-parser"),
mongoose = require("mongoose"),
express = require("express");

var app = express();

// app config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParse.urlencoded({extended: true}));


// mongodb config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now()
    }
});

var Blog = mongoose.model("Blog", blogSchema);

// routes
app.get("/", function(req, res){
    res.redirect("/index");
})

// index 
app.get("/index", function(req, res){
    Blog.find({}, function(err, blogs){
        if (err){
            console.log("errs in index page");
        } else {
            res.render("index", {blogs : blogs});
        }
    })
})

// new
app.get("/blogs/new", function(req,res){
    res.render("new");
})

// create
app.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if (err){
            res.render("new");
        } else {
            res.redirect("/");
        }
    })
})

// show 
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err){
            res.redirect("/");
        } else {
            res.render("show", {blog : foundBlog});
        }
    })
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running");
})