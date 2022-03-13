// menu toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggleNavigation();

toggle.onclick = function(){ toggleNavigation(); }

function toggleNavigation(){
  navigation.classList.toggle('active');
  main.classList.toggle('active');
}


// add hovered class in selected list item
let list = document.querySelectorAll('.navigation li');

function activeLink() {
  list.forEach((item) => item.classList.remove('hovered'));
  this.classList.add('hovered');
}

list.forEach((item) => item.addEventListener('mouseover', activeLink));
