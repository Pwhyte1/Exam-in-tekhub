const hambuger = document.querySelector('.hambuger');
const navbar = document.querySelector('.navbar')

hambuger.addEventListener('click', ()=>{
    hambuger.classList.toggle('active')
    navbar.classList.toggle('open')
})