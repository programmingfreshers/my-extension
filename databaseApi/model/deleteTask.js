const express = require('express');
const mongoose = require('mongoose');
const taskDatabase = require('../database/database');
const router = express.Router();
const bodyparser = require('body-parser')
router.delete('/deletetask',(req,res)=>{
     var taskID = req.body['taskID'];
     console.log(taskID);
     taskDatabase.deleteOne({
          "taskID" : taskID
     })
     .then((msg) =>{
          console.log('================================');
          console.log(req.body['taskID']);
          console.log('================================');
          res.redirect('/');
     })
     .catch(err=>{
          console.log(err);
     });
});
module.exports = router;