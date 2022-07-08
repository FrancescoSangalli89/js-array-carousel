const imagesList = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

let activeImage = 0;

const images = document.querySelector('.images');


for (let i = 0; i < imagesList.length; i++) {
    
    images.innerHTML += `<div class="image">
                            <img src="${imagesList[i]}" alt="photo 1">
                        </div>`;
}

const imgList = document.getElementsByClassName('image');

imgList[activeImage].classList.add('show');

const down = document.querySelector('.down');

down.addEventListener('click',
    function() {
        imgList[activeImage].classList.remove('show');
        activeImage++;
        imgList[activeImage].classList.add('show');
        up.classList.remove('hidden');

        if(activeImage == imgList.length - 1) {
            down.classList.add('hidden');
        }
    }
)
const up = document.querySelector('.up');

up.addEventListener('click',
    function() {
        imgList[activeImage].classList.remove('show');
        activeImage--;
        imgList[activeImage].classList.add('show');
        down.classList.remove('hidden');

        if(activeImage == 0) {
            up.classList.add('hidden');
        }
    }
)
