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