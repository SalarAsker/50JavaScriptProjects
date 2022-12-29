// get pictures and store them in the arrays

let pictures = [];
const nrOfImages = 10;
for(let i = 0; i<nrOfImages; i++){

    pictures.push(`image/picture${i}.jpg`);

}
const firstImageIndex = 0;
const lastImageIndex = pictures.length -1; // 9

let currentImageIndex = 0;

let imageElement = document.querySelector('.img');
let currentImage = document.querySelector('.current');

let next = document.querySelector('.next');
next.addEventListener('click', function(){
   currentImageIndex++;
   if(currentImageIndex >= 10){
    currentImageIndex = 0;
   }
   imageElement.src = pictures[currentImageIndex];
   currentImage.innerHTML = (currentImageIndex + 1) +'/10';
})

let prev = document.querySelector('.prev');
prev.addEventListener('click', function(){
    currentImageIndex--;
    if(currentImageIndex < 0){
     currentImageIndex = 9;
    }
    imageElement.src = pictures[currentImageIndex];
    currentImage.innerHTML = (currentImageIndex + 1) +'/10';
})

