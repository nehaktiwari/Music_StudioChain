const form = document.getElementById('frm');
const name = document.getElementById('name');
const username = document.getElementById('Username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('conf_password');

form.addEventListener('submit', e => {
    validateInputs();
    e.load_Trail();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue=name.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    
    if(nameValue === '') {
        setError(name, window.log( 'Name is required'));
    } else {
        setSuccess(name);
    }

    if(usernameValue === '') {
        setError(username,  window.log('Username is required'));
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, window.log('Email is required'));
    } else if (!isValidEmail(emailValue)) {
        setError(email, window.alert('Provide a valid email address'));
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, window.alert('Password is required'));
    } else if (passwordValue.length < 4) {
        setError(password, window.alert('Password must be at least 4 character.'));
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, window.alert("Password is required"));
    } else if (password2Value !== passwordValue) {
        setError(password2, window.alert("Password not matching"));
    } else {
        setSuccess(password2);
    }

};


function load_Trail(){
    window.location.href="Trail.html";
}