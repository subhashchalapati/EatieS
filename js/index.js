/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//This on and off is for overlay card
function on() {
    console.log("on");
  document.getElementById("Homeoverlay").style.display = "block";
}
function off() {
    console.log("off");
  document.getElementById("Homeoverlay").style.display = "none";
}






function OfferSlideImages(){
//this is for loding slideimages
    // var src = documtnt.getpropertyByClassName("mySlides").
var src = document.getElementsByClassName("mySlides");
//console.log(src[0].getAttribute("src"));
console.log(src.length);


for (var ittr = 0; ittr < src.length; ittr++) {

    var x = ittr+1 ;
    var i = "img/img"+x+".jpeg";
    var ass = src[ittr].setAttribute("src", i); 
    console.log(src[ittr].getAttribute("src"));
//console.log(i); //    console.log(ittr+1); //    console.log(i);
}

var js = $.getJSON("/index.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});
var myObj = JSON.parse(js);
document.getElementById("demo").innerHTML = myObj.name;




}




//function SlideImage() {
var slideIndex = 1;
showDivs(slideIndex);3


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


//
////var one = MainHed.innerHTML;
//
//
//var MainHed = document.getElementById('head');
//var AboutHed = document.getElementById('Aboutehead');





function copy(){
    console.log("hello About");
                                    //var MainHed = document.getElementById("head");
                                    //var AboutHed = document.getElementById("Aboutehead");
                                    //AboutHed.innerHTML = MainHed.innerHTML;
 var itm = document.getElementById("AboutHed").lastChild;
  var cln = itm.cloneNode(true);
  document.getElementById("MainHed").appendChild(cln);
//    console.log(MainHed.innerHTML);
    console.log("hello about 2");

}


