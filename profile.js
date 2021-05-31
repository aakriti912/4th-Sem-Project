const Row = document.querySelector('.row');
// const heart = document.getElementByClassName('a');
 const smly= document.querySelector('.smiley');

loadEventListener();
function loadEventListener(){
  Row.addEventListener('click', like);
  Row.addEventListener('dblclick', dislike);
}

function like(e){
if (e.target.classList.contains('a')){
   e.target.style.color= "red";

smly.innerHTML="&#xf118";
smly.style.color="green";
 setTimeout(function(){
    document.querySelector('.smiley').remove();
  }, 3000);
}
}

function dislike(e){
if (e.target.classList.contains('a')){
   e.target.style.color= "black";

smly.innerHTML="&#xf11a";
smly.style.color="red";
 setTimeout(function(){
    document.querySelector('.smiley').remove();
  }, 3000);
}
}