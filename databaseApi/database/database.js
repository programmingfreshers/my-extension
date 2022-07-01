const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
     task : {
          type : String,
          required : true
     },
     taskID :{
          type : String,
          required : true
     }
});

module.exports = mongoose.model('tasks',taskSchema);
