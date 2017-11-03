var form = document.querySelector('.new-task');
var input = document.getElementById('input');
var list = document.querySelector('ul');
var checkbox = document.querySelectorAll('.toggle-checked');
var content = document.querySelectorAll('.text');
var deletebtn = document.querySelectorAll('.delete');

var val = '';
var str = '';

function checking(event){
  console.log(event.target);
  console.log(event.target.nextSibling.nextSibling);
  if(event.target.checked ==true){
    console.log('선택');
    event.target.nextSibling.nextSibling.className = 'checked';
  }
  else{
    console.log('선택해제','text');
    event.target.nextSibling.nextSibling.className = 'text';
  }
}

function deleting(event){
  console.log(event);
  console.log(event.target.parentNode);

  list.removeChild(event.target.parentNode);
}


form.addEventListener('submit',function(){

  console.log('제출');

  input.addEventListener('keyup',function(){
    console.log('keyup');
  })

  val = input.value;

  str = '<li>'+'<button class="delete">x</button>'+'<input type="checkbox" class="toggle-checked">'+'\n'+'<span class="text">'+val+'</span>'+'</li>';//중간에 개행문자를 넣어야 형제 선택자로 선택이 가능해 ~
  input.value ='';

  list.innerHTML += str;

  event.stopPropagation();

  checkbox = document.querySelectorAll('.toggle-checked');

  for(var i=0; i<checkbox.length; i++){
    checkbox[i].addEventListener('click',checking);
  }

  deletebtn = document.querySelectorAll('.delete');
  for(var i=0; i<deletebtn.length; i++){
    deletebtn[i].addEventListener('click',deleting);
  }

});








// content = document.querySelector('.text');


// for(var i=0; i<checkbox.length; i++){
//   checkbox[i].addEventListener('click',function(){
//     if(checkbox[i].checked==true){
//       console.log('선택');
//       content[i].setAttribute('class','checked');
//     }
//     else {
//       console.log('선택해제','text');
//       content[i].setAttribute('class','text');
//     }
//   });

// }
