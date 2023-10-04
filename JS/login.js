document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email == 'razu@gmail.com' && password == 'razu'){
        window.location.href = 'bank.html';
    }
    else{
       alert('Your Email or Password is not currect')
    }
});