const toglebar = document.getElementById('togleBar')
const togle = document.getElementById('togle')
// const togle = document.getElementById('togle')
let flag = false

let nav = document.getElementById('navbar')
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if(window.scrollY > 300){
        nav.style.backgroundColor = `var(--background-color)`
        togle.style.marginTop = `${window.scrollY}px`
        nav.style.position = `fixed`
    }else{
        nav.style.backgroundColor = ``
        nav.style.position = `static`
        
    }
    
})
toglebar.addEventListener('click', () => {
    if (flag) {
        togle.style.display = 'block'
        flag = false
    } else {
        togle.style.display = 'none'
        flag = true
    }
})


const scroll = new LocomotiveScroll({
    el: document.querySelector('#body'),
    smooth: true
});