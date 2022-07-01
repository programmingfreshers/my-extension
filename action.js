// document.getElementById('input').value = copy();

function addZero(i) {
     if (i < 10) {i = "0" + i}
     return i;
   }
   
function getTodayDate(){   
   const d = new Date();
   let h = addZero(d.getHours());
   if(h> 12){
     h = h -12;
   }
   let m = addZero(d.getMinutes());
   let s = addZero(d.getSeconds());
   let time = h + ":" + m + ":" + s;
   return time;
}
function getDate(){
     var today = new Date();
     var date = today.getDate() +'-'+(today.getMonth()+1)+'-'+today.getFullYear() + ' | ' + getTodayDate();
     return date.toString();

}
function deleteTaskInDatabase(taskID) {
      let user = {
          "taskID" : taskID,
      }    
      let options = {
          method: 'DELETE',
          body : JSON.stringify(user),
          headers: {
              'Content-Type':
                  'application/json'
          },
          
      }
      let fetchRes = fetch('http://localhost:3000/deletetask',options);
      fetchRes.then(res =>
          res.json()).then(d => {
               console.log('');
          })
}

function addTask(txt) {
     const node = document.createElement("button");
               node.className = 'option';
               node.id = 'option' 
               var modified_text = getDate().toUpperCase()  + ' : '+txt;    
               const textnode = document.createTextNode(modified_text);
               node.appendChild(textnode); 
               node.setAttribute("value",getDate());
               document.getElementById("root").appendChild(node);
               document.getElementById('input').value = '';
               node.addEventListener('click',()=>{
                    var link = node.value;
                    console.log(link);
                    open_link(link);
                    deleteTaskInDatabase(link);
                    node.remove();
               });
          
}

function addTaskInDatabase(txt) {
     var getdate = getDate();
     user = {
          "taskID": getdate,
          "task": txt
      }
      // Options to be given as parameter
      // in fetch for making requests
      // other then GET
      let options = {
          method: 'POST',
          body : JSON.stringify(user),
          headers: {
              'Content-Type':
                  'application/json'
          },
          
      }
      // Fake api for making post requests
      let fetchRes = fetch('http://localhost:3000/addtask',options);
      fetchRes.then(res =>
          res.json()).then(d => {
               console.log('');
          })
}



function fetchTasks() {
     var task_array = [];
     let fetchRes = fetch(
          "http://localhost:3000/fetchtask");
                  // fetchRes is the promise to resolve
                  // it by using.then() method
     fetchRes
     .then(res =>res.json())
     .then(d => {
          d.forEach(element => {
               var txt = element['task'];
               addTask(txt);
          });
     });
     
     
}

function open_link(link){
     navigator.clipboard.writeText(link);
     
}


function inputFocus(){
     const input = document.getElementById('input');
     input.setSelectionRange(0, 0);
     input.focus();
}
inputFocus();
fetchTasks();


document.getElementById('btn').addEventListener('click',()=>{

     var txt = document.getElementById('input').value;
     addTask(txt);
     addTaskInDatabase(txt);
     inputFocus();
});
