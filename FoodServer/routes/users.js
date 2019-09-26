var express = require('express');
var router = express.Router();
var user = require('../models').user;

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.findAll()
  .then((users)=>{
    res.json(users);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  })
});


router.post('/', (req,res,next)=>{
  user.create({
    name:req.body.name,
    age:req.body.age,
    married:req.body.married,
  })
  .then((result)=>{
    console.log(result);
    res.status(200).json(result);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  })
  
})


module.exports = router;
