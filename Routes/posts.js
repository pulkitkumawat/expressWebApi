const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//Get all Posts
router.get('/',async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message:err});
    }
});

//Submit a POST
router.post('/',async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    // post.save()
    // .then(data =>{
    //     res.json(data);
    // }).catch(err=>{
    //     res.json({message:err});
    // });

    try{const savedPost = await post.save();
        res.json(savedPost);
    }
    catch(err){
        res.json({message:err});
    }
    });

//Get Specific POST
router.get('/:postID',async (req,res)=>{
    try{
    const post = await Post.findById(req.params.postID);
    res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//Delete a post
router.delete('/:postID',async (req,res)=>{
    
    try{
    const removedPost = await Post.remove({_id:req.params.postID});
    res.send(removedPost);
    }catch(err){
        res.json({message:err});
    }
});

//Update a post
router.patch('/:postID',async (req,res)=>{
    try{
        const updatedPost=await Post.updateOne(
            {_id:req.params.postID},
            {$set:{title:req.body.title}}
            );
        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
});

router.put('/:postID',async (req,res)=>{
    try{
        const updatedPost=await Post.updateOne(
            {_id:req.params.postID},
            {$set:{title:req.body.title}}
            );
        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;