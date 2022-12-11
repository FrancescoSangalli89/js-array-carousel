const imagesList = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

const images = document.querySelector('.images');


for (let i = 0; i < imagesList.length; i++) {
    
    images.innerHTML += `<div class="image">
                            <img src="${imagesList[i]}" alt="photo 1">
                        </div>`;
}

let activeImage = 0;

const imgList = document.getElementsByClassName('image');

imgList[activeImage].classList.add('show');

const down = document.querySelector('.down');

down.addEventListener('click',
    function() {
        
        imgList[activeImage].classList.remove('show');
        if(activeImage == imagesList.length -1) {
            activeImage = 0;
        } else {
            activeImage++;
        }
        imgList[activeImage].classList.add('show');
        console.log(activeImage);

        
    }
)
const up = document.querySelector('.up');

up.addEventListener('click',
    function() {
        imgList[activeImage].classList.remove('show');
        if(activeImage == 0) {
            activeImage = imagesList.length - 1;
        } else {
            activeImage--;
        }
        imgList[activeImage].classList.add('show');
    }
)
