import { top20Movie } from "../data/top20MovieData.js"
import { top20TvShow } from "../data/top20TvShowData.js"
import { recommendation } from "../data/recommendationData.js"


const tvshow = document.querySelector('.tvshow')
const card = document.querySelector('.card')
const tvRank = document.querySelector('.tvRank')
const cardBox = document.querySelector('.cardBox')
const isNewEpisode = document.querySelector('.new')


const tvData = top20TvShow.data.items
const mvData = top20Movie.data.items

const renderTv = (value,index) => {
    const topTvShow = document.querySelector('.topTvShow')
    topTvShow.insertAdjacentHTML("beforeend",
    `<div class="card">
        <div class="cardBox">
            <div class="info">${value.title}</div>
            <span class="new">${value.label.isNewEpisode ? 'NEW' : ""}</span>
            <img src="${value.imageUrl}" alt="">
            <span class="original"> 
            ${value.label.isOnly ? '<img class="originallogoImg" src="photo/tving-logo_brandlogos.net_i81am.png" alt="">ORIGINAL' : ""}</span>
        </div>
    </div>`)
}

const renderMv = (value,index) => {
    const topMvShow = document.querySelector('.topMvShow')
    topMvShow.insertAdjacentHTML("beforeend",
    `<div class="card">
        <div class="cardBox">
            <div class="info">${value.title}</div>
            <span class="new">${value.label.isNewEpisode ? 'NEW' : ""}</span>
            <img src="${value.imageUrl}" alt="">
            <span class="sub"> 
            ${value.label.isSubtitle ? '자막' : ""}</span>
        </div>
    </div>`)
}


const newtv = tvData.forEach((value) => renderTv(value))
const newmv = mvData.forEach((value) => renderMv(value))

