


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


const framePhoto = document.querySelectorAll('.framePhoto');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const container_photo = document.querySelector('.container_photo');

let count = 0;
var prevcount = 0;
let flagCheck_PhotoFrame = false;
let flagCheck_Prev_Next = false;
let flagCheck_First_5 = false;
let lock_next = false;
let lock_prev = false;
const framePhotoSelected = document.querySelector('.child1');
next.addEventListener('click', () => {
        if (lock_next == false) {
                if (flagCheck_Prev_Next == true) {
                        if (prevcount == 0) {
                                count = 0
                                flagCheck_Prev_Next = false;
                        } else {
                                count = prevcount
                                flagCheck_Prev_Next = false;
        
                        }
                }
                
                switch (count) {
                        case 0:
                                {
                                        framePhotoSelected.style.opacity = "0.5"
                                        framePhoto[count+1].classList.toggle('opacity');
                                        container_photo.style.backgroundImage = "url('Images/Pic2.jpg')";
                                        count ++;
                                }
        
                        break;
                        case 1:
                                {
                                        framePhoto[count+1].classList.toggle('opacity');
                                        framePhoto[count].classList.toggle('opacity');
                                        container_photo.style.backgroundImage = "url('Images/Pic3.png')";
                                        count ++;
                                }
                        break;
                        case 2:
                                {
                                        framePhoto[count+1].classList.toggle('opacity');
                                        framePhoto[count].classList.toggle('opacity');
                                        container_photo.style.backgroundImage = "url('Images/Pic4.png')";
                                        count ++;
                                }
                        break;
                        case 3:
                                {
                                        framePhoto[count+1].classList.toggle('opacity');
                                        framePhoto[count].classList.toggle('opacity');
                                        container_photo.style.backgroundImage = "url('Images/Pic5.png')";
                                        count ++;
                                }
                        break;
                        case 4:
                                {
                                        framePhoto[count+1].classList.toggle('opacity');
                                        framePhoto[count].classList.toggle('opacity');
                                        container_photo.style.backgroundImage = "url('Images/Pic6.png')";
                                        flagCheck_First_5 = true;
                                        count ++;
                                }
                        break;
                        default:
                        break;
                }
                flagCheck_Prev_Next = false;
                lock_prev = false;
                if (count == 5 ) {
                        lock_next = true
                        lock_prev = false;
                }
        }

})
prev.addEventListener('click', () => {
        if (lock_prev == false ){
                if (flagCheck_Prev_Next == false) {
                        if(flagCheck_First_5 == true) {
                                prevcount = 5;
                                flagCheck_First_5 = false;
                                flagCheck_Prev_Next = true;
                                flagCheck_PhotoFrame = false;
                        } else {
                                prevcount = count;
                                flagCheck_Prev_Next = true;
                        }
                }
                switch (prevcount) {
                        case 0:
                                {
                                        framePhotoSelected.style.opacity = "0.5"
                                        framePhoto[5-prevcount].classList.toggle('opacity');
                                        count ++;
                                }
        
                        break;
                        case 1:
                               {
                                        framePhoto[prevcount].classList.toggle('opacity');
                                        if(prevcount-1 >=0 ) {
                                                framePhoto[prevcount-1].classList.toggle('opacity');
                                                framePhotoSelected.style.opacity = "";
                                        }
                                        container_photo.style.backgroundImage = "url('Images/Pic1.jpg')";
                                        count++;
                                        prevcount--;
                                }
                        break;
                        case 2:
                                {
                                        framePhoto[prevcount].classList.toggle('opacity');
                                        if(prevcount-1 >=0 ) {
                                                framePhoto[prevcount-1].classList.toggle('opacity');
                                        }
                                        container_photo.style.backgroundImage = "url('Images/Pic2.jpg')";
                                        count++;
                                        prevcount--;
                                }
                        break;
                        case 3:
                                {
                                        framePhoto[prevcount].classList.toggle('opacity');
                                        if(prevcount-1 >=0 ) {
                                                framePhoto[prevcount-1].classList.toggle('opacity');
                                        }
                                        container_photo.style.backgroundImage = "url('Images/Pic3.png')";
                                        count++;
                                        prevcount--;
                                }
                        break;
                        case 4:
                                {
                                        framePhoto[prevcount].classList.toggle('opacity');
                                        if(prevcount-1 >=0 ) {
                                                framePhoto[prevcount-1].classList.toggle('opacity');
                                        }
                                        container_photo.style.backgroundImage = "url('Images/Pic4.png')";
                                        count++;
                                        prevcount--;
                                }
                        break;
                        case 5:
                                framePhoto[prevcount].classList.toggle('opacity');
                                framePhoto[prevcount-1].classList.toggle('opacity');
                                flagCheck_First_5 = false;
                                prevcount--;
                                count++;
                                container_photo.style.backgroundImage = "url('Images/Pic5.png')";
                        break;
                        default:
                        break;
                }
                flagCheck_Prev_Next = true;
                lock_next =false;
        }
        if (prevcount == 0 ) {
                lock_prev = true;
                lock_next = false;
        }
})
