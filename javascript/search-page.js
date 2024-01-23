import { top20Movie } from "../data/top20MovieData.js"
import { top20TvShow } from "../data/top20TvShowData.js"

const searchPage = document.querySelector('.search-page')
const searchBox = document.querySelector('.search-box')
const search = document.querySelector('.search')
const submit = document.querySelector('.submit')
const resultBox = document.querySelector('.result-box')
const resultCard = document.querySelector('.resultCard')
const magnifier = document.querySelector('.magnifier')
const mainPage = document.querySelector('.mainPage')
const close = document.querySelector('.close')



magnifier.addEventListener(("click"),function(){
    searchPage.style.display = 'block'
    magnifier.style.display = 'none'
    close.style.display = 'block'
})

mainPage.addEventListener("click",function(){
    searchPage.style.display = 'none';
    close.style.display = 'none';
    magnifier.style.display = 'block';
})

close.addEventListener("click",function(){
    searchPage.style.display = 'none';
    magnifier.style.display = 'block';
    close.style.display = 'none';
    resultCard.innerHTML = '';
})

const newArrMv = top20Movie.data.items
const newArr = top20TvShow.data.items
const allData = [...newArrMv,...newArr]
let finding

const find = search.addEventListener("input",function(e){
     finding = e.target.value
})

const renderTv = (value) => {
    const resultCard = document.querySelector('.resultCard')
    resultCard.insertAdjacentHTML("beforeend",
    `<div class="card">
        <div class="cardBox">
            <img src="${value.imageUrl}" alt="" style="width:120px; height:170px; border-radius: 7px; ">
        </div>
    </div>`)
}

const renderNoResult = (find) =>{
    const resultCard = document.querySelector('.resultCard')
    resultCard.insertAdjacentHTML("beforeend",
    `<div class="wrong">'${finding}'에 대한 검색 결과가 없습니다.</div>`
    )
}

submit.addEventListener("click",function(){
    resultCard.innerHTML = '';
    const result = allData.filter((word) => word.title.includes(finding));
    const found = result.length !== 0
    found ? result.forEach((value) => renderTv(value)) : renderNoResult(find)
    search.value = ''
})

    // let resultMv = newArrMv.filter(function(word) {
    //     return word.title.includes(finding);
    //   });

    //   console.log(resultMv)
    //   let finalMv = true

      
    //   const renderMv = (value) => {
    //     if(resultMv){
    //     const resultCard = document.querySelector('.resultCard')
    //     resultCard.insertAdjacentHTML("beforeend",
    //     `<div class="card">
    //         <div class="cardBox">
    //             <img src="${value.imageUrl}" alt="" style="width:120px; height:170px; border-radius: 7px; display:grid;   grid-template-columns: repeat(3,1fr);">
    //         </div>
    //     </div>`)
    //     } else {
    //         const newdiv = resultCard.appendChild('.div')
    //         newdiv.innerHTML =  (`<div>${find}에 대한 검색 결과가 없습니다.</div>`)
    //     }
    // }
    // const newmv = resultMv.forEach((value) => renderMv(value))
    // clearInput(cardInput)



// function clearInput(cardInput){
//     card.value = 'none'
// }

// const renderTv = (value) => {
//     if(found){
//     const resultCard = document.querySelector('.resultCard')
//     resultCard.insertAdjacentHTML("beforeend",
//     `<div class="card">
//         <div class="cardBox">
//             <img src="${value.imageUrl}" alt="" style="width:120px; height:170px; border-radius: 7px; display:grid;   grid-template-columns: repeat(3,1fr);">
//         </div>
//     </div>`)
//     } else {
//         const newDiv = document.createElement('div')
//         newDiv.innerHTML = 
//         resultCard.appendChild(newDiv)
//     }
// }