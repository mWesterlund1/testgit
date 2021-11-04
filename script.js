// var firstHeading= document.getElementsByClassName("hello")[0];
// var myButton=document.getElementById("button")
// var myText= "Hello World x";
// var myNumber= 2;
//
//
// function changeTheText() {
//   if (firstHeading.innerHTML=="Hello World!") {
//     firstHeading.innerHTML = myText+myNumber;
//   } else {
//     firstHeading.innerHTML="Texten stämde inte överens med Hello World! så jag ändrade den till detta istället";
//   }
// }
//
// changeTheText();

// var ux =["User research","Information architecture", "Interaction design", "Interface design"];
// var arrayLength = ux.length;
// var myList ="<ul>";
// var i = 0;

 /*for loop*/
//  for (var i=0;i<arrayLength;i++) {
//    myList +="<li>" + ux[i] + "</li>"
//  }
//
// myList += "</ul>";
// document.getElementById("minArrayDiv").innerHTML=myList;

/*While-loop*/
// var text="";
// var i=0;
// while (i < 10) {
//   text += "<br>Siffran är" +i;
//   i++;
// }
// document.getElementById("minArrayDiv").innerHTML=text;

/*While-loop alt2 (på samma sätt som for-loop)*/
// while (i < arrayLength) {
//   myList += "<li>" +ux[i]+ "</li>";
//   i++;
// }
// myList +="</ul>";
// document.getElementById("minArrayDiv").innerHTML=myList;

/*Ändra styling vid event*/
// var myButton = document.getElementById("button");
//
// myButton.addEventListener("click",function(){
//   this.classList.toggle("blue-background");
// });

/* Loop image test*/
 // var images =["https://tinemettejespersen.files.wordpress.com/2012/03/ffftextthisisanimage.gif","https://tinemettejespersen.files.wordpress.com/2012/03/ffftextthisisanimage.gif","https://tinemettejespersen.files.wordpress.com/2012/03/ffftextthisisanimage.gif","https://tinemettejespersen.files.wordpress.com/2012/03/ffftextthisisanimage.gif"];
 // var totalPics = images.length;
 // var myPics = " ";
 // var imagesContainer = document.getElementById("image-container");
 //
 // for (var i = 0;i < totalPics; i++) {
 //   myPics += "<img src='" + images[i] + "'class='images'>";
 // }
 //
 // var myButton = document.getElementById("button");
 // var imageOne = document.getElementsByTagName("img")[0];
 // var imageThree = document.getElementsByTagName("img")[2];
 //
 // myButton.addEventListener("click",function(){
 //   imageOne.classList.toggle("big-image");
 //   imageThree.classList.toggle("big-image");
 // });

// console.log(ux[0]);
// console.log(ux[1]);
// console.log(ux[2]);
// console.log(ux[3]);
// console.log(ux.length);

var navMenu = document.getElementById("navbar")
var firstHeading= document.getElementsByClassName("hello")[0];
var myButton=document.getElementById("button")
var myText= "Hello World";

window.addEventListener('scroll',(e)=>{
    if(window.pageYOffset>200){
      navMenu.classList.add("add-shadow","nav-colored");
    }else{
      navMenu.classList.remove("add-shadow","nav-colored");
    }
  });

  function changeTheText() {
    if (firstHeading.innerHTML=="Header content") {
      firstHeading.innerHTML = myText;
    } else {
      firstHeading.innerHTML="Detta bör vara en klatchig välkomsfras";
    }
  }

  changeTheText();

  var hamburger = document.querySelector(".hamburger");
  var myNavMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
      hamburger.classList.toggle("active");
      myNavMenu.classList.toggle("active");
  }
