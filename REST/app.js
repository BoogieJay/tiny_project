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

app.get("/index", function(req, res){
    Blog.find({}, function(err, blogs){
        if (err){
            console.log("errs in index page");
        } else {
            res.render("index", {blogs : blogs});
        }
    })
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running");
})