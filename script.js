const  wrapper = document.querySelector('.wrapper');
const  loginLink = document.querySelector('.login-link');
const  CadastroLink = document.querySelector('.register-link');

CadastroLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
})
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
})