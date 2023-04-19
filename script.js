//**See More & See  Less**//
function readML() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See less";
    moreText.style.display = "inline";
  }
}

function readSML() {
  var dots = document.getElementById("dots-2");
  var moreText = document.getElementById("more-2");
  var btnText = document.getElementById("myBtn-2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See less";
    moreText.style.display = "inline";
  }
}


//**Slide show on home page
var slide = true;
function slideShow(){
  var x = document.getElementById("NewM").src;
  document.getElementById("NewM").src = document.getElementById("Concert").src;
  document.getElementById("Concert").src = document.getElementById("Ngame").src;
  document.getElementById("Ngame").src = document.getElementById("Bgame").src;
  document.getElementById("Bgame").src =x;
  
}
  
function runShow(){if(slide){slideShow();}
}
 setInterval(runShow, 1000); 


//**Quiz Score Generator

function oneScore(){
var oneSelect= document.getElementById("1-select").value;
var resultP = document.getElementById("result");
    
    if(oneSelect == "answer-3"){
        resultP.innerHTML = "<p>" + "<b>Question #1: Congrats, you are correct.</b>" + "</p>";
    }else{resultP.innerHTML = "<p>" + "<b>Question #1: Try again, you are incorrect.</b>" + "</p>";
    }
}

function twoScore(){
var twoSelect= document.getElementById("2-select").value;
var resultS = document.getElementById("result-2");
    
    if(twoSelect == "answer-8"){
        resultS.innerHTML = "<p>" + "<b>Question #2: Congrats, you are correct.</b>" + "</p>";
    }else{resultS.innerHTML = "<p>" + "<b>Question #2: Try again, you are incorrect.</b>" + "</p>";
    }
}

function threeScore(){
var threeSelect= document.getElementById("3-select").value;
var resultT = document.getElementById("result-3");
    
    if(threeSelect == "answer-10"){
        resultT.innerHTML = "<p>" + "<b>Question #3: Congrats, you are correct.</b>" + "</p>";
    }else{resultT.innerHTML = "<p>" + "<b>Question #3: Try again, you are incorrect.</b>" + "</p>";
    }
}

function fourScore(){
var fourSelect= document.getElementById("4-select").value;
var resultF = document.getElementById("result-4");
    
    if(fourSelect == "answer-14"){
        resultF.innerHTML = "<p>" + "<b>Question #4: Congrats, you are correct.</b>" + "</p>";
    }else{resultF.innerHTML = "<p>" + "<b>Question #4: Try again, you are incorrect.</b>" + "</p>";
    }
}
