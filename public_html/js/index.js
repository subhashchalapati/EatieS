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



function SlideImage() {
        var slideIndex = 1;
        showDivs(slideIndex);
        function plusDivs(n) {
          showDivs(slideIndex += n);
          alert("m+1");
            }
        function currentDiv(n) {
          showDivs(slideIndex = n);
            }
        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("demo");
          if (n > x.length){
              slideIndex = 1;
          }
          if (n < 1){
              slideIndex = x.length;
          }
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-white", "");
          }
          x[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " w3-white";
                  console.log("x" + slideIndex);
        }

}