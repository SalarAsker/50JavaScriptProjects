const btn = document.querySelector('.btn-throw');
btn.disabled = true;
btn.addEventListener('click', () =>{

       let rnd = Math.ceil(Math.random() *6);
       console.log(rnd);
    //    document.querySelector('.image').src = 'img/dice'+rnd+'.png';
    document.querySelector('.dice-image').classList.add('show-animation');
    btn.disabled = true;
   

    setTimeout(() => {
        document.querySelector('.dice-image').src = `img/dice${rnd}.png`;

        if(rnd%2 == 0 && userInput == 'even'){
            document.querySelector('.result').innerHTML = `You Win! You select even`;
           }else if(rnd%2 == 0 && userInput == 'odd'){
            document.querySelector('.result').innerHTML = `You Lost! You select odd`;
           
        }else if(rnd%2 != 0 && userInput == 'even'){
            document.querySelector('.result').innerHTML = `You Lost! You select even`;
        }else if(rnd%2 != 0 && userInput== 'odd'){
            document.querySelector('.result').innerHTML = `You Win! You select odd`;
    }

    document.querySelector('.btn-odd').classList.remove('btn-even-odd-select');
    document.querySelector('.btn-even').classList.remove('btn-even-odd-select');
    btn.innerHTML = `Throw`;
    }, 4000);

   
   
    
})     

let userInput = '';
document.querySelector('.btn-even').addEventListener('click', () =>{

    userInput ='even';
    btn.disabled = false;
    btn.innerHTML = `Throw (You select Even)`;
    document.querySelector('.btn-even').classList.add('btn-even-odd-select');
    document.querySelector('.btn-odd').classList.remove('btn-even-odd-select');
    document.querySelector('.dice-image').classList.remove('show-animation');
    document.querySelector('.dice-image').src = `img/dice-question.png`;
})
document.querySelector('.btn-odd').addEventListener('click', () =>{

    userInput ='odd';
    btn.disabled = false;
    btn.innerHTML = `Throw (You select Odd)`;
    document.querySelector('.btn-odd').classList.add('btn-even-odd-select');
    document.querySelector('.btn-even').classList.remove('btn-even-odd-select');
    document.querySelector('.dice-image').classList.remove('show-animation');
    document.querySelector('.dice-image').src = `img/dice-question.png`;

})




