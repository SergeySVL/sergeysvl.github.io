
"use strict";

let imageCount = imgFiles.length;
let counter = 1;
let fav_image;

window.addEventListener("load", createLightbox);

function createLightbox() {
   let lightBox = document.getElementById("lightbox");
   let lbTitle = document.createElement("h1");
   let lbCounter = document.createElement("div");
   let lbPrev = document.createElement("div");
   let lbNext = document.createElement("div");
   let lbPlay = document.createElement("div");
   let lbImages = document.createElement("div");      

   lightBox.appendChild(lbTitle);
   lbTitle.id = "lbTitle";
   lbTitle.textContent = lightboxTitle;

   lightBox.appendChild(lbCounter);
   lbCounter.id = "lbCounter";
   let currentImg = 1;
   lbCounter.textContent = currentImg + "/" + imgCount;

   lightBox.appendChild(lbPrev);
   lbPrev.id = "lbPrev";
   lbPrev.innerHTML = "&#9664;";
   lbPrev.onclick = showPrev;

   lightBox.appendChild(lbNext);
   lbNext.id = "lbNext";
   lbNext.innerHTML = "&#9654;";
   lbNext.onclick = showNext;

   lightBox.appendChild(lbPlay);
   lbPlay.id = "lbPlay";
   lbPlay.innerHTML = "&#9199;";
   let timeID;
   lbPlay.onclick = function() {
      if (timeID) {
         window.clearInterval(timeID);
         timeID = undefined;
      } else {
         showNext();
         timeID = window.setInterval(showNext, 1500);
   }}
   
   lightBox.appendChild(lbImages);
   lbImages.id = "lbImages";

   for (let i = 0; i < imageCount; i++) {
      let image = document.createElement("img");
      image.src = "./images/" + imgFiles[i];
      image.onclick = createOverlay;
      lbImages.appendChild(image);
   }

   function showNext() {
      lbImages.appendChild(lbImages.firstElementChild);
      (currentImg < imgCount) ? currentImg++ : currentImg = 1;
      lbCounter.textContent = currentImg + "/" + imgCount;
   }

   function showPrev() {
      lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
      (currentImg > 1) ? currentImg-- : currentImg = imgCount;
      lbCounter.textContent = currentImg + "." + imgCount;
   }
}

function createOverlay() {
   let overlay = document.createElement("div");
   overlay.id = "lbOverlay";
   let figureBox = document.createElement("figure");
   overlay.appendChild(figureBox);
   document.body.appendChild(overlay);

   let overlayImage = this.cloneNode("true");
   figureBox.appendChild(overlayImage);

   let overlayText = document.createElement("div");
   overlayText.classList.add("overlayText");
   let overlayButton = document.createElement('button');
   overlayButton.textContent = "Add Photo to Favorites";
   overlayText.appendChild(overlayButton);
   figureBox.appendChild(overlayText);

   let closeBox = document.createElement("div");
   closeBox.id = "lbOverlayClose";
   closeBox.innerHTML = "&times;";
   closeBox.onclick = function() {
   document.body.removeChild(overlay);
   }
   overlay.appendChild(closeBox);

   if (counter > 5) {
      overlayText.textContent = "Five images added to Favorites. Please remove some to add new images.";
      return
   } else {
      overlayButton.addEventListener('click', () => {
      overlayText.textContent = "Added to Favorites";
      drawFavorites(counter, overlayImage);
      counter += 1;
      console.log(counter);
   })}
}

function drawFavorites(counter, image) {
   console.log(counter);
   let favorite = document.getElementById('favorite' + counter);
   let im = document.createElement("img");
   im.src = image.src;
   favorite.appendChild(im);
   im.onclick = createOver;
}

function createOver() {
   let overlay = document.createElement("div");
   overlay.id = "lbOverlay";
   let figureBox = document.createElement("figure");
   overlay.appendChild(figureBox);
   document.body.appendChild(overlay);

   let overlayImage = this.cloneNode("true");
   figureBox.appendChild(overlayImage);

   let overlayText = document.createElement("div");
   overlayText.classList.add("overlayText");
   let overlayButton = document.createElement('button');
   overlayButton.textContent = "Remove Last Photo from Favorites";
   overlayText.appendChild(overlayButton);
   figureBox.appendChild(overlayText);

   let closeBox = document.createElement("div");
   closeBox.id = "lbOverlayClose";
   closeBox.innerHTML = "&times;";
   closeBox.onclick = function() {
   document.body.removeChild(overlay);
   }
   overlay.appendChild(closeBox);

   overlayButton.addEventListener('click', () => {
      overlayText.textContent = "Removed Last Photo from Favorites";
      counter -= 1;
      removeFavorite(counter);
      console.log(counter);
   })
}

function removeFavorite(counter) {
   let favorite = document.getElementById('favorite' + counter);
   console.log(counter);
   favorite.replaceChildren();
}

