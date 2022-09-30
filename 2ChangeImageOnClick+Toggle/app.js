// store images in an array
const bulbImages = [
    'img/lightbulb-off.png', // index 0 bulbImages[0]
    'img/lightbulb-on.png'  // index 1 bulbImages[1]
];
// get image element
const img = document.getElementById('images');
// get paragraph element
const para = document.getElementById('description');
// toggle 
let toggle = false;
img.addEventListener('click', () =>{
        toggle = !toggle;
    // true  ---> on
    // false ---> off
    if(toggle){
        img.src = bulbImages[1];
        para.innerHTML = 'ON';
    }else{
        img.src = bulbImages[0];
        para.innerHTML = 'OFF';
    }
   
})