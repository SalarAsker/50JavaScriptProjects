// Get textboxes in JS
const pro = document.getElementById('pro');
const total = document.getElementById('total');
const result = document.getElementById('result');

pro.addEventListener('keyup', DoCalculation);
total.addEventListener('keyup', DoCalculation);

function DoCalculation(e){
    //get values from the textboxs
    let p = parseFloat(pro.value);
    let t = parseFloat(total.value);
    
    // let activeTextBOx = e.target;
    // activeTextBOx.style.backgroundColor = 'red';

    if(isNaN(p)){
        p=0;
    }
    if(isNaN(t)){
        t=0;
    }
    let percentage = t * (p/100);
    result.value =  percentage.toFixed(2);
}

pro.addEventListener('focus', () =>{
    pro.style.backgroundColor = 'rgb(184, 178, 178)';
});

total.addEventListener('focus', () =>{
    total.style.backgroundColor = 'rgb(184, 178, 178)';
});

pro.addEventListener('focusout', () =>{
    pro.style.backgroundColor = 'white';
});

total.addEventListener('focusout', () =>{
    total.style.backgroundColor = 'white';
});
