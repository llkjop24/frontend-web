// // //동적이라는 건 한번 로딩이 이루어진 다음에도 바뀔 수 있다는 것.
// //
var log = document.getElementById('log');

// debugger

console.log(log);
//
// log.innerHTML = "안녕";
// var a = document.querySelectorAll('log');
//
// console.log(log);
//
// // var a = document.querySelectorAll('#log a');
// //
// // console.log(a[0],a[1]);
//
// // var all = $$('ul'); 모든 ul 태그 를 가지고 와서
//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// // document.body.appendChild(div); 이건 추가해서 집어넣어 append니까
//
//
// log.innerHTML = '<div style = "color:red">hello</div>'; //이건 그냥 갔다가 다 지우고 이것만 출력되.
// window.onload=function(){
//     alert("load");
// };
// window.addEventListener('load', function(){
//     console.log('load1');
// }); //요즘에 이렇게 사용하고 이렇게만 쓸
//
// window.addEventListener('load', function(){
//   console.log('load2');
// });

// var log = document.getElementById('log');
// function printLog(event){
//   console.log('log!!!');
//   debugger;
// }
// log.addEventListener('click', printLog)
// log.addEventListener('click', function(){
//   console.log('log click!!!!');
//
// })
document.addEventListener("DOMContentLoaded", function(event) {
  var divs = document.querySelectorAll('#wrap div');

  function changeBg(event){
    console.log('changeBg');
    // console.log(event.currentTarget);

    if(event.currentTarget.style.backgroundColor == 'red'){
      event.currentTarget.style.backgroundColor = 'blue'
    }
    else {
      event.currentTarget.style.backgroundColor = 'red'
    }


    // divs[0].style.backgroundColor = 'blue';

  }

  for(var i=0; i<divs.length; i++){
    divs[i].addEventListener('click', changeBg);
  }
  console.log("Dom요소가 모두 로딩이 되었습니다");
});
















































//크로스 브라우징 : 웹 표준 기술을 채용하여 다른 기종/플랫폼에 따라 달리 구현되는 기술을 비슷하게 만듬과 동시에 어느 한쪽에 최적화되어 치우치지 않도록 공통요소를 사용하여 웹 페이지를 제작하는 기법을 말합니다.
