const logrexBox= document.querySelector('.logreg-box');
const loginLink= document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');


registerLink.addEventListener('click',()=>{
logrexBox.classList.add('active')
});


loginLink.addEventListener('click',()=>{
    logrexBox.classList.remove('active')
    });