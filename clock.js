const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("#Ko");
  clockTitle1 = clockContainer.querySelector("#China");
  clockTitle2 = clockContainer.querySelector("#America_NewYork");
  clockTitle3 = clockContainer.querySelector("#Germany_Berlin");

var clock = {
  standardDate : null,
  init : function(){
    var timezoneOffset = new Date().getTimezoneOffset()/60;  
    var currentDate = new Date();
    this.standardDate = new Date( currentDate.setHours(currentDate.getHours() + timezoneOffset) );
  },
  generateTime : function(offset){    
    return new Date( this.standardDate.setHours(this.standardDate.getHours() + offset) );
  },
  getTimeFormat : function(nation, offset){
    var date = this.generateTime(offset),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();  
    return nation + " : "+ `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
}

window.onload  = function() {
  clock.init();
  console.log(clock.getTimeFormat("한국, 서울", 9));
  console.log(clock.getTimeFormat("독일, 베를린", 2));
  console.log(clock.getTimeFormat("중국, 베이징", 8));
}
자냐
/*function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  var offset = new Date().getTimezoneOffset()/60;


  clockTitle.innerText ="한국, 서울 : "+ `${hours < 10 ? `0${hours}` : hours}:${
  minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
*/



// function getTime() {
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();

//   var offset = new Date().getTimezoneOffset()/60;


//   clockTitle.innerText ="한국, 서울 : "+ `${hours < 10 ? `0${hours}` : hours}:${
//   minutes < 10 ? `0${minutes}` : minutes
//   }:${seconds < 10 ? `0${seconds}` : seconds}`;

// }


// //China Time
// function getTime1() {
//   const date = new Date();
//   const hours = date.getHours()-1;
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();

// clockTitle1.innerText ="중국, 상하이 : "+ `${hours < 10 ? `0${hours}` : hours}:${
//     minutes < 10 ? `0${minutes}` : minutes
//   }:${seconds < 10 ? `0${seconds}` : seconds}`;
// }


// //America_NewYork Time
// function getTime2() {
//   const date = new Date();
//   const hours = date.getHours()-13;
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();

// clockTitle2.innerText ="미국, 뉴옥 : " +  `${hours < 10 ? `0${hours}` : hours}:${
//     minutes < 10 ? `0${minutes}` : minutes
//   }:${seconds < 10 ? `0${seconds}` : seconds}`;
// }


// //Germany_Berlin Time
// function getTime3() {
//   const date = new Date();
//   const hours = date.getHours()-7;
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();

// clockTitle3.innerText ="독일, 베를린 : "+ `${hours < 10 ? `0${hours}` : hours}:${
//     minutes < 10 ? `0${minutes}` : minutes
//   }:${seconds < 10 ? `0${seconds}` : seconds}`;
// }

/**/
// function init() {
//   getTime();
//   setInterval(getTime, 1000);
//   getTime1();
//   setInterval(getTime1, 1000);
//   getTime2();
//   setInterval(getTime2, 1000);
//   getTime3();
//   setInterval(getTime3, 1000);

// }

// init();