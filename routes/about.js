const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
      title: 'About me',
      isAbout:true
    });
});

module.exports = router;
