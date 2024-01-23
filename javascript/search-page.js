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
})

const newArrMv = top20Movie.data.items
const newArr = top20TvShow.data.items
let finding

const find = search.addEventListener("input",function(e){
     finding = e.target.value
})

  
submit.addEventListener("click",function(){
    let result = newArr.filter(function(word) {
        return word.title.includes(finding);
      });

      console.log(result)
      let final = true

      
      const renderTv = (value) => {
        if(result){
        const resultCard = document.querySelector('.resultCard')
        resultCard.insertAdjacentHTML("beforeend",
        `<div class="card">
            <div class="cardBox">
                <img src="${value.imageUrl}" alt="" style="width:120px; height:170px; border-radius: 7px; display:grid;   grid-template-columns: repeat(3,1fr);">
            </div>
        </div>`)
        } else {
            const newdiv = resultCard.appendChild('.div')
            newdiv.innerHTML =  (`<div>${find}에 대한 검색 결과가 없습니다.</div>`)
        }
    }
    const newtv = result.forEach((value) => renderTv(value))

    let resultMv = newArrMv.filter(function(word) {
        return word.title.includes(finding);
      });

      console.log(resultMv)
      let finalMv = true

      
      const renderMv = (value) => {
        if(resultMv){
        const resultCard = document.querySelector('.resultCard')
        resultCard.insertAdjacentHTML("beforeend",
        `<div class="card">
            <div class="cardBox">
                <img src="${value.imageUrl}" alt="" style="width:120px; height:170px; border-radius: 7px; display:grid;   grid-template-columns: repeat(3,1fr);">
            </div>
        </div>`)
        } else {
            const newdiv = resultCard.appendChild('.div')
            newdiv.innerHTML =  (`<div>${find}에 대한 검색 결과가 없습니다.</div>`)
        }
    }
    const newmv = resultMv.forEach((value) => renderMv(value))
    // clearInput(cardInput)
})


// function clearInput(cardInput){
//     card.value = 'none'
// }