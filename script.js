let container=document.querySelector('.MainCon');
let button = document.querySelector('a');
let hex = document.querySelector('p');

function getNexthex(){
    let color='#';
    color+=Math.random().toString(16).slice(2,8);
    hex.innerHTML = "HEX-CODE : "+color;
    container.style.backgroundColor = color;    
} 

button.addEventListener('click',function(){getNexthex();},false);