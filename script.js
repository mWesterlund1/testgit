/*test*/

var navMenu = document.getElementById("navbar")
var firstHeading= document.getElementsByClassName("hello")[0];
var myText= "Hello World";

/* Dropshadow på navbar vid scroll*/
window.addEventListener('scroll',(e)=>{
    if(window.pageYOffset>200){
      navMenu.classList.add("add-shadow","nav-colored");
    }else{
      navMenu.classList.remove("add-shadow","nav-colored");
    }
  });

/* function som ändrar texten i header */
  function changeTheText() {
    if (firstHeading.innerHTML=="Header content") {
      firstHeading.innerHTML = myText;
    } else {
      firstHeading.innerHTML="Detta bör vara en klatchig välkomsfras";
    }
  }

  changeTheText();

  /* array på min lista av ord */
   var list =["Random text","Random text", "Random text", "Random text"];
   var arrayLength = list.length;
   var myList ="<ul>";
   var i = 0;

   /*for loop*/
    for (var i=0;i<arrayLength;i++) {
      myList +="<li>" + list[i] + "</li>"
    }

   myList += "</ul>";
   document.getElementById("minArrayDiv").innerHTML=myList;

   /* funktion som gör att hamburgarmenyn kan öppna och stängas */
  var hamburger = document.querySelector(".hamburger");
  var myNavMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
      hamburger.classList.toggle("active");
      myNavMenu.classList.toggle("active");
  }
