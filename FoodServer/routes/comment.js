var express = require('express');
var {user, Comment} = require('../models');

var router = express.Router();
router.get('/:id', (req, res, next)=>{
    Comment.findAll({
        include:{
            model:user,
            where:{id:req.params.id},
        },
    })
    .then((comment)=>{
        console.log(comment);
        res.json(comment);
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    })
})

router.post('/', (req,res,next)=>{
    Comment.create({
        commenter:req.body.id,
        comment:req.body.comment,
    })
    .then((result)=>{
        console.log(result);
        res.status(201).json(result);
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    })
})

router.patch('/:id', (req, res, next)=>{
    Comment.update({comment:req.body.comment}, {where:{id:req.params.id}})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    })
})

router.delete('/:id', (req, res, next)=>{
    Comment.destroy({where:{id:req.params.id}})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    })
})


module.exports = router;
