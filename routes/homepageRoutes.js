const express = require('express');
const router = express()
const wrapAsync = require('../utils/wrapAsync');
const mongoose = require('mongoose');
const Insta = mongoose.model('Insta');
const Youtube = mongoose.model('Youtube');
const Blog = mongoose.model('Blog');



// Homepage Routes
router.get('/sir', wrapAsync(async (req, res) => {
    const instaPosts = await Insta.find({});
    const youtubePosts = await Youtube.find({});
    const blogs = await Blog.find({});
    res.render('./homepages/home', { instaPosts, youtubePosts, blogs });
}));
// Homepage blogdetail
router.get('/latestpodcast', wrapAsync(async (req, res) => {
    res.render('./homepages/latestPodcast');
}));
router.get('/blogdetail', wrapAsync(async (req, res) => {
    res.render('./homepages/blogdetail');
}));

// Homepage index
router.get('/', wrapAsync(async (req, res) => {
    res.render('./homepages/index');
}));



// Exporting the router
module.exports = router;