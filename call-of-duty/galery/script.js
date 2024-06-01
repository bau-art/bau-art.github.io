let imgArr = document.querySelectorAll('img');
let divFullScreen = document.querySelector('.full-foto');

divFullScreen.addEventListener('click', () => {
    divFullScreen.style.display = 'none';
})

for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].addEventListener('dblclick', () => {
        divFullScreen.style.display = 'block';
        divFullScreen.style.backgroundImage = `url('${imgArr[i].src}')`;
    })
}
let num = document.querySelector('.number');
let n = 0;
let tt = 1000;
let timer = setInterval(()=>{ 
    num.innerHTML = n;
    n++;
    
    if (n == 20){
        clearInterval(timer)
    }
    console.log(tt);
}, 1000)




// Ctrl+ J