"use strict";

let imgEl = document.querySelector("#imgAGif");
const contentSec = document.querySelector("#contentSection");
let btns = document.querySelectorAll(".BTN");
let GenBtn = document.querySelector("#generator");
const loader = document.querySelector('#loaderBox');

const gettingData = async function () {
  const data = await fetch(
    `https://cataas.com//api/cats?tags=cute,lazy,hunger,sleeping,Dark,unhappy&skip=0&limit=200`
  )
    .then((res) => res.json())
    .then((data) => data);

  return data;
};

const addToHtml = async function (i) {
  const data = await gettingData();
  contentSec.classList.remove("hidden");
  imgEl.src = `https://cataas.com/cat/${data[i].id}`;
};

GenBtn.addEventListener("click", async () => {
  const data = await gettingData();
  const num = Math.trunc(Math.random() * data.length);
  addToHtml(num);
  loader.classList.add('loader')
});

imgEl.addEventListener('load',() => {
  loader.classList.remove('loader')
})

