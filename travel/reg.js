
const Uname = document.querySelector('.uname');
const Email = document.querySelector('.email');
const first=document.getElementById("pass1");
const second=document.getElementById("pass2");
// const passcheck = document.querySelector('#pass');
    const re =/^([a-zA-Z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-Z]{})$/;

document.querySelector('#btn').addEventListener('click', function(){
    if(Uname.value === '' || Email.value === '' || first.value === '' || second.value ===''){
        document.getElementById('output').innerHTML= '**please fill the form';
    }
    if (first.value !== second.value) {
    	first.style.borderColor='red';
    	second.style.borderColor="red";
    }


    if (!re.test(Email.value)) {
    	Email.style.borderColor='red';
    }
    else
    {
    	Email.style.borderColor='green'
    }

    else{
        
        document.getElementById('output').innerHTML= ''; 
    }
    
});

