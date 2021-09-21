const name = document.getElementById('name').value;
// const state = document.getElementById('profession');
// const Age = document.getElementById('age');
const Bio = document.getElementById('bio').value;
// const H= document.getElementByTagName('h3');

const button = document.getElementById('w-change-btn').addEventListener('click', change);
function change()
{
var A=document.getElementById('a');
A.id= name;
A.setAttribute("id", "name");
// document.getElementById('b').innerHTML= Bio;

window.parent.location.reload(false);
window.parent.SqueezeBox.close();
};