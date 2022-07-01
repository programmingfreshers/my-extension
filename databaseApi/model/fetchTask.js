const express = require('express');
const mongoose = require('mongoose');
const taskDatabase = require('../database/database');
const router = express.Router();
router.get('/fetchtask',(req,res)=>{
     res.setHeader('Content-Type','application/json');

     var ls = [] ;
     taskDatabase.find()
     .then((tasks)=>{
          tasks.forEach((elem)=>{
               console.log(elem);
               ls.push({
                    'task': elem['task'],
                    'taskID' : elem['taskID'],
               })
          })
          res.json(ls)
     })
     .catch((err)=>{
          console.log(err);
     })
});
module.exports = router;