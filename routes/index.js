const express = require('express');
const router = express.Router();
const db = require('../models');

router.use(express.urlencoded({extended:false}));
router.use(express.json());



//page routes

router.get('/index', (req, res) => {
    
    res.render('index')
})


router.get('/authors', async (req, res) => {
    
    res.render('authors')
})


router.get('/articles', (req, res) => {
    
    res.render('articles')
})


//api

router.get('/api/:content', async (req, res) => {
    
    try{
        if(req.params.content === 'authors'){
            let authors = await db.authors.findAll();
            res.json(authors)
        }
        else if(req.params.content === 'articles'){
            let articles = await db.articles.findAll();
            res.json(articles)
        }
        
    }
    catch(error){
        res.send(error)
    }
    
})




router.post('/api/:content', async (req, res) => {
    
    try{
        if(req.params.content === articles){
            let insert = await db.articles.create({
            title: req.body.title,
            body: req.body.body,
            isPublished: req.body.isPublished,
            authorID: req.body.authorID
        })
        }
        else if(req.params.content === authors){
            let insert = await db.authors.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                imgURL: req.body.imgURL,
                bio: req.body.bio,
                twitter: req.body.firstName

            })
        }
        
    }
    catch(error){
        res.send(error)
    }
})






module.exports = router;