const imSolo = document.querySelector('.imSolo')
const uquiz = document.querySelector('.uquiz')
const flower = document.querySelector('.flower')
const topgun = document.querySelector('.topgun')
const mainPage = document.querySelector('.mainPage')
const ads = document.querySelector('.ads')
const mainImg = document.querySelector('.mainImg')
const slideImg = document.querySelector('.slideImg')
const slideletter = document.querySelector('.slideletter')
const dots = document.querySelector('.dots')
const fullDot = document.querySelector('.fullDot')
const firDot = document.querySelector('.firstDot')
const secDot = document.querySelector('.secondDot')
const thrDot = document.querySelector('.thirdDot')
const fourDot = document.querySelector('.fourthDot')
const emptyDot = document.querySelector('.emptyDot')
const arrow = document.querySelector('.arrow')
const leftArrow = document.querySelector('.leftArrow')
const slide01 = document.querySelector('.slide01')
const slide02 = document.querySelector('.slide02')
const slide03 = document.querySelector('.slide03')
const slide04 = document.querySelector('.slide04')


// rightArrow.addEventListener('click', function(){
//     imSolo.style.display = 'none'
//     uquiz.style.display = 'flex'
//     firDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
//     secDot.innerHTML = '<i class="fa-solid fa-circle"></i>'
// })

//     rightArrow.addEventListener('click',function(){
//         imSolo.style.display = 'none'
//         uquiz.style.display = 'flex'
//         firDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
//         secDot.innerHTML = '<i class="fa-solid fa-circle"></i>'
//     })



// for(let i = 0; 0 < 4; i++){
    
// }




firDot.addEventListener('click',function(){
    ads.style.transform = 'translate(0)';
    firDot.innerHTML = '<i class="fa-solid fa-circle"></i>'
    secDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
    thrDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
    fourDot.innerHTML = '<i class="fa-regular fa-circle"></i>'

})

secDot.addEventListener('click',function(){
    ads.style.transform = 'translate(-100vw)';
    firDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
    secDot.innerHTML = '<i class="fa-solid fa-circle"></i>'
    thrDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
    fourDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
})

thrDot.addEventListener('click',function(){
    ads.style.transform = 'translate(-200vw)';
    firDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
    secDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
    thrDot.innerHTML = '<i class="fa-solid fa-circle"></i>'
    fourDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
})

fourDot.addEventListener('click',function(){
    ads.style.transform = 'translate(-300vw)';
    firDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
    secDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
    thrDot.innerHTML = '<i class="fa-regular fa-circle"></i>'
    fourDot.innerHTML = '<i class="fa-solid fa-circle"></i>'
})

    

// leftArrow.addEventListener("click", function(){
//     if(secDot.innerHTML = '<i class="fa-regular fa-circle"></i>'){
//         ads.style.transform = 'translate(0)';
//     }else if(thrDot.innerHTML = '<i class="fa-regular fa-circle"></i>'){
//         ads.style.transform = 'translate(-100vw)';
//     }else if(fourDotDot.innerHTML = '<i class="fa-regular fa-circle"></i>'){
//         ads.style.transform = 'translate(-200vw)';
//     } 
// })






