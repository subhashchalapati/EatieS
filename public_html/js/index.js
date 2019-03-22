/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function on() {
    console.log("on")
  document.getElementById("Homeoverlay").style.display = "block";
}
function off() {
  document.getElementById("Homeoverlay").style.display = "none";
}



//function SlideImage() {
var slideIndex = 1;
showDivs(slideIndex);


//function AutoAddSlide() {
// plusDivs(1);
//
//}

function plusDivs(n) {
  showDivs(slideIndex += n);
 }
function currentDiv(n) {
 showDivs(slideIndex = n);

//         document.getElementsByClassName("OnPhotoButPoints").style.backgroundColor="transparent";
}
function showDivs(n) {

  var i;
  var x = document.getElementsByClassName("mySlides");
//  x.style.animation
  var dots = document.getElementsByClassName("OnPhotoButPoints");
  if (n > x.length){
      slideIndex = 1;
      }
  if (n < 1){
      slideIndex = x.length;
    }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
  x[slideIndex-1].style.display = "block";  
//    console.log(n);
    for(var j=0; j < dots.length; j++){
        dots[j].style.backgroundColor="transparent";
        }
    dots[slideIndex-1].style.backgroundColor="white";
        
}
//setTimeout(AutoAddSlide, 4000);
//}




