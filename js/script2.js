// setInterval(() => {
//     const clock = document.querySelector('.display');
  
//     let time = new Date();
//     let sec = time.getSeconds();
//     let min = time.getMinutes();
//     let hr = time.getHours();
  
//     let day = 'AM';
//     if (hr > 12) {
//       day = 'PM';
//       hr = hr - 12;
//     }
//     if (hr == 0) {
//       hr = 12;
//     }
//     if (sec < 10) {
//       sec = '0' + sec;
//     }
//     if (min < 10) {
//       min = '0' + min;
//     }
//     if (hr < 10) {
//       hr = '0' + hr;
//     }
//     clock.innerHTML = `<p>${hr}</p>:<p>${min}</p>:<p>${sec}</p> <p>${day}</p>`;
//   }, 1000);













// section threee
// const searchBtn = document.querySelector(".icon"),
//   searchBox = document.querySelector(".search-box");

// searchBtn.addEventListener("click", () => {
//   searchBox.classList.toggle("active");
// });





// section three
// productScroll();

// function productScroll() {
//   let slider = document.getElementById("slider");
//   let next = document.getElementsByClassName("pro-next");
//   let prev = document.getElementsByClassName("pro-prev");
//   let slide = document.getElementById("slide");
//   let item = document.getElementById("slide");

//   for (let i = 0; i < next.length; i++) {

//     let position = 0;

//     prev[i].addEventListener("click", function() {
//       if (position > 0) {
//         position -= 1;
//         translateX(position);
//       }
//     });

//     next[i].addEventListener("click", function() {
//       if (position >= 0 && position < hiddenItems()) {
//         position += 1;
//         translateX(position);
//       }
//     });
//   }

//   function hiddenItems() {

//     let items = getCount(item, false);
//     let visibleItems = slider.offsetWidth / 146;
//     return items - Math.ceil(visibleItems);
//   }
// }

// function translateX(position) {

//   slide.style.left = position * -210 + "px";
// }

// function getCount(parent, getChildrensChildren) {
//   let relevantChildren = 0;
//   let children = parent.childNodes.length;
//   for (let i = 0; i < children; i++) {
//     if (parent.childNodes[i].nodeType != 3) {
//       if (getChildrensChildren)
//         relevantChildren += getCount(parent.childNodes[i], true);
//       relevantChildren++;
//     }
//   }
//   return relevantChildren;
// }



// 
// var currentIndex = 1;

// function displaySlide(n) {
//   currentIndex = n;
//   var slides = document.getElementsByClassName("slide");
//   var dots = document.getElementsByClassName("dot");
//   var slno = document.getElementById("slide-no");

//   if (currentIndex > slides.length) {
//     currentIndex = 1;
//   }
//   if (currentIndex < 1) {
//     currentIndex = slides.length;
//   }
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[currentIndex - 1].style.display = "block";
//   dots[currentIndex - 1].className = "dot active";
//   slno.innerHTML = currentIndex + "/" + slides.length;
// }

// displaySlide(currentIndex);

// function changeSlide(n) {
//   currentIndex += n;
//   displaySlide(currentIndex);
// }

// function currentSlide(n) {
//   displaySlide(n);
// }


