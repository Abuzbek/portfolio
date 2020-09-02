const express = require('express');
const router = express.Router();
const User = require('../model/User')

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
      title: 'contact us',
      isContact:true
    });
});
router.post('/contact', function(req, res, next) {
  console.log(req.body);
  const user = new User(req.body)
  const promis = user.save((err,user)=>{
    if(err)
      console.log(err);
    else{
      res.redirect('/contact')
    }  
  })
});

module.exports = router;