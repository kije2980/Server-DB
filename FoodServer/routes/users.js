var express = require('express');
var router = express.Router();
var user = require('../models').user;

router.get('/', async(req, res, next) => {
  try{
    const users = await user.findAll();
    res.json(users);
  }
  catch(err){
    console.error(err);
    next(err);
  }
});


router.post('/', async(req,res,next)=>{
  try{
    const result = await user.create({
      name:req.body.name,
      age:req.body.age,
      married:req.body.married,
    })
    console.log(result);
    res.status(200).json(result);
  }
  catch(err){
    console.error(err);
    next(err);
  }  
})


module.exports = router;
