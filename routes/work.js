const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/work', function(req, res, next) {
  res.render('work', {
      title: 'My Works',
      isWork:true
    });
});

module.exports = router;