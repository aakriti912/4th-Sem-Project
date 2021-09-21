

const name = document.getElementById('name');
const Bio = document.getElementById('bio');
const button = document.getElementById('w-change-btn').addEventListener('click', change);

function change(){
 
 document.querySelector('#col2').innerHTML +=`<h3>${name.value}</h3>
<p>${Bio.value}</p>
 `;

}
