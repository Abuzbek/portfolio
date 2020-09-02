const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/skill', function(req, res, next) {
  res.render('skill', {
      title: 'Skills',
      isSkill:true
    });
});

module.exports = router;