const express = require('express');
const router = express.Router();

var User = require('../models/users');

/* GET api listing. */
router.get('/setup', (req, res) => {
   var adminUser = new User();
   adminUser.local.username = 'admin';
   adminUser.local.password = nick.generateHash('admin');
   adminUser.local.admin = true;

   adminUser.save(function(err) {
    if (err) throw err;
    res.send({ success: true });
  });
});

module.exports = router;