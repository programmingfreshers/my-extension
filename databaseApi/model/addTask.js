const express = require('express');
const mongoose = require('mongoose');
const taskDatabase = require('../database/database');
const router = express.Router();
const bodyparser = require('body-parser')
router.post('/addtask',(req,res)=>{
     var task_item = req.body['task'];
     var taskID = req.body['taskID'];
     const newTask = new taskDatabase({
          taskID : taskID,
          task:task_item,
     });
     newTask.save()
     .then((res)=>{
          console.log('');
     })
     .catch((err)=>{
          console.log(err);
     })
     res.redirect('/');
});
module.exports = router;