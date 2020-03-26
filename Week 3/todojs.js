// var todoList = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < todoList.length; i++) {
//   var span = document.createElement("SPAN");
//   var img = document.createElement("img");
//   img.src="https://img.icons8.com/color/48/000000/delete-forever.png";
//   span.className = "close";
//   span.appendChild(img);
//   todolist[i].appendChild(span);
// }

var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, undefined);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input1").value;
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);

  var span = document.createElement("SPAN");
  var img = document.createElement("img");
  img.src="https://img.icons8.com/color/48/000000/delete-forever.png";
  span.className = "close";
  span.appendChild(img);
  li.appendChild(span);

  if (inputValue === '') {
    alert("Please, write something!");
  } else {
    document.getElementById("lists").appendChild(li);
  }
  document.getElementById("input1").value = "";

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}