const container = document.querySelector('.container');
const header = document.getElementById('header');
const aLightMode_menu = document.querySelectorAll('.aLightMode_menu');
const lightButton = document.getElementById('lightButton');
const lightSwitch = document.getElementById('lightSwitch');

const lightControl = document.querySelector('.lightcontrol');
lightButton.addEventListener('click', ()=> {
        container.classList.toggle('lightMode')
        header.classList.toggle('lightMode');
        aLightMode_menu[0].classList.toggle('lightMode')
        aLightMode_menu[1].classList.toggle('lightMode')
        aLightMode_menu[2].classList.toggle('lightMode')
        aLightMode_menu[3].classList.toggle('lightMode')
})



const clickSkill = document.querySelector('.clickSkill');

clickSkill.addEventListener('click', ()=> {
    this.style.backgroundColor = "#191970"
    document.body.style.backgroundColor = "#000"
})
const hiddenStar1 = document.querySelector('.hiddenStar');
const hiddenStar2 = document.querySelector('.hiddenStar-2');
const hiddenStar3 = document.querySelector('.hiddenStar-3');
const hiddenStar4 = document.querySelector('.hiddenStar-4');
const hiddenStar5 = document.querySelector('.hiddenStar-5');
const hiddenStar6 = document.querySelector('.hiddenStar-6');
const hiddenStar7 = document.querySelector('.hiddenStar-7');
const hiddenStar8 = document.querySelector('.hiddenStar-8');
const showAll = document.querySelector('.showAllClick');

document.querySelectorAll('.clickSkill')[0].addEventListener('click', ()=> {
        hiddenStar1.classList.toggle('showHiddenStar');
})
document.querySelectorAll('.clickSkill')[1].addEventListener('click', ()=> {
        hiddenStar2.classList.toggle('showHiddenStar');
})
document.querySelectorAll('.clickSkill')[2].addEventListener('click', ()=> {
        hiddenStar3.classList.toggle('showHiddenStar');
})
document.querySelectorAll('.clickSkill')[3].addEventListener('click', ()=> {
        hiddenStar4.classList.toggle('showHiddenStar');
})
document.querySelectorAll('.clickSkill')[4].addEventListener('click', ()=> {
        hiddenStar5.classList.toggle('showHiddenStar');
})
document.querySelectorAll('.clickSkill')[5].addEventListener('click', ()=> {
        hiddenStar6.classList.toggle('showHiddenStar');
})
document.querySelectorAll('.clickSkill')[6].addEventListener('click', ()=> {
        hiddenStar7.classList.toggle('showHiddenStar');
})
document.querySelectorAll('.clickSkill')[7].addEventListener('click', ()=> {
        hiddenStar8.classList.toggle('showHiddenStar');
})


document.querySelector('.showAllClick').addEventListener('click', ()=> {
    hiddenStar1.classList.toggle('showHiddenStar');
    hiddenStar2.classList.toggle('showHiddenStar');
    hiddenStar3.classList.toggle('showHiddenStar');
    hiddenStar4.classList.toggle('showHiddenStar');
    hiddenStar5.classList.toggle('showHiddenStar');
    hiddenStar6.classList.toggle('showHiddenStar');
    hiddenStar7.classList.toggle('showHiddenStar');
    hiddenStar8.classList.toggle('showHiddenStar');
})

