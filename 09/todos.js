console.log('연결');

var formDom = document.querySelector('.new-task');
var input = document.getElementById('input');

formDom.addEventListener('submit', function(){
  console.log('제출');

  var newTodo = input.value;

  input.value = '';

  console.log(newTodo);
})
