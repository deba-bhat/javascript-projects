const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){

    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;

}

function showSuccess(input){

    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function isValidEmail(email){

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value.trim())){
        showSuccess(email);
    }
    else{
        showError(email,'email is not  valid');
    }
}

function checkRequired(array){

    array.forEach((item) => {

        if(item.value.trim() === ''){
            showError(item,`${item.id} is required`);
        }
        else{
            showSuccess(item);
        }
    });


}

function checkLength(input, min, max){
    if(input.value.length < min){

        showError(input, `${input.id} must be atleast ${min} characters`);
    }
    else if(input.value.length > max){

        showError(input, `${input.id} must be less than ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}

function checkPasswordsMatch(in1,in2){
    if(in1.value !== in2.value){

        showError(in2, `passwords do not match`);
    }
}



//Event Listner
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    isValidEmail(email);
    checkPasswordsMatch(password,password2);
    
    
});