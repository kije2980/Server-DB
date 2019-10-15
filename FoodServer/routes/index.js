var express = require('express');
var router = express.Router();
var user = require('../models').user;
var comment = require('../models').comment;

/* GET home page. */
router.get('/', async(req, res, next)=> {
  try{
    const users = await user.findAll();
    res.render('sequelize', {users});
  }
  catch(error){
    console.error(err);
    next(err);
  }
});

module.exports = router;
