"use strict";

var eltQuoteList = document.getElementsByClassName("quote");
var currentQuoteIndex = 0;
var maxQuoteIndex = eltQuoteList.length;
console.log("eltQuoteList : " + eltQuoteList);
console.log("maxQuoteIndex : " + maxQuoteIndex);
var eltImgList = document.getElementsByClassName("image_testimonial");
var currentImgIndex = 0;
var maxImgIndex = eltImgList.length;
console.log("eltImgList : " + eltImgList);
console.log("maxImgIndex : " + maxImgIndex);

function prev() {
  eltQuoteList[currentQuoteIndex].classList.remove("fadein");
  eltQuoteList[currentQuoteIndex].classList.add("fadeout");

  if (currentQuoteIndex == 0) {
    currentQuoteIndex = maxQuoteIndex - 1;
  } else {
    currentQuoteIndex -= 1;
  }

  eltQuoteList[currentQuoteIndex].classList.add("fadein");
  eltImgList[currentImgIndex].classList.remove("fadein");
  eltImgList[currentImgIndex].classList.add("fadeout");

  if (currentImgIndex == 0) {
    currentImgIndex = maxImgIndex - 1;
  } else {
    currentImgIndex -= 1;
  }

  eltImgList[currentImgIndex].classList.add("fadein");
}

function next() {
  eltQuoteList[currentQuoteIndex].classList.remove("fadein");
  eltQuoteList[currentQuoteIndex].classList.add("fadeout");

  if (currentQuoteIndex == 1) {
    currentQuoteIndex = 0;
  } else {
    currentQuoteIndex += 1;
  }

  eltQuoteList[currentQuoteIndex].classList.add("fadein");
  eltImgList[currentImgIndex].classList.remove("fadein");
  eltImgList[currentImgIndex].classList.add("fadeout");

  if (currentImgIndex == 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex += 1;
  }

  eltImgList[currentImgIndex].classList.add("fadein");
}