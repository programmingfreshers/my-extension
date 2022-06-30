var counter = 0;
document.getElementById('btn').addEventListener('click',()=>{
     document.getElementById('root').innerText = ++counter;
})