// U+1F621

let currentTitle = document.title;

// blur
window.addEventListener('blur', () =>{

    document.title = String.fromCodePoint(0x1F621) + '  Come Back!'

})

// focus

window.addEventListener('focus', () =>{

    document.title = currentTitle;
})