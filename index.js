let eduBtn = document.getElementById('education');
let expBtn = document.getElementById('experience');
let skillBtn = document.getElementById('skill');
let edu = document.getElementById('edu');
let exp = document.getElementById('exp');
let skill = document.getElementById('skills');

skillBtn.addEventListener('click', () => {
skill.style.display = 'block';
exp.style.display = 'none';
edu.style.display = 'none';
});
expBtn.addEventListener('click', () => {
  skill.style.display = 'none';
  exp.style.display = 'block';
  edu.style.display = 'none';
});
eduBtn.addEventListener('click', () => {
  skill.style.display = 'none';
  exp.style.display = 'none';
  edu.style.display = 'block';
});
// hamburger
function toggleMenu() {
  const navItems = document.querySelector('.nav');
  navItems.classList.toggle('active');
}

// Projects-1
document.querySelector('.view1').addEventListener('click', () => {
  window.location.href = 'https://hash-restaurant.netlify.app/';
});
document.querySelector('.git1').addEventListener('click', () => {
  window.location.href = 'https://github.com/Hashir46/Hash-Restaurant.git';
});
// Projects-2
document.querySelector('.view2').addEventListener('click', () => {
  window.location.href = 'https://glow-haven.netlify.app/';
});
document.querySelector('.git2').addEventListener('click', () => {
  window.location.href = 'https://github.com/Hashir46/Glow-Haven.git';
});
// Projects-3
document.querySelector('.view3').addEventListener('click', () => {
  window.location.href = 'https://zenithfit-gym-website.netlify.app/';
});
document.querySelector('.git3').addEventListener('click', () => {
  window.location.href = 'https://github.com/Hashir46/Gym-Website.git';
});
// Projects-4
document.querySelector('.view4').addEventListener('click', () => {
  window.location.href = 'https://hashir-todo-list.netlify.app/';
});
document.querySelector('.git4').addEventListener('click', () => {
  window.location.href = 'https://github.com/Hashir46/Todo-List.git';
});
// Projects-5
document.querySelector('.view5').addEventListener('click', () => {
  window.location.href = 'https://hashir-color-picker.netlify.app/';
});
document.querySelector('.git5').addEventListener('click', () => {
  window.location.href = 'https://github.com/Hashir46/Color-Picker.git';
});
// Projects-2
document.querySelector('.view6').addEventListener('click', () => {
  window.location.href = 'https://hashir-qr-code-generator.netlify.app/';
});
document.querySelector('.git6').addEventListener('click', () => {
  window.location.href = 'https://github.com/Hashir46/QR-Code-Generator.git';
});

// onscroll
window.onscroll = function () {
  changeBackgroundColor();
};

function changeBackgroundColor() {
  let navbar = document.getElementById('navbar');
  let nav = document.querySelector('.nav');
  let navlink = document.querySelectorAll('.navl')
  let scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
      navbar.style.backgroundColor = '#010F36';
      nav.style.backgroundColor = '#010F36';
      
      let name = document.getElementById('name').style.color ="#ff6900"
  } else {
      let name = document.getElementById('name').style.color ="#ff6900"
      navbar.style.backgroundColor = 'transparent';
      nav.style.backgroundColor = 'transparent';
     
  }
}

document.getElementById('submit').addEventListener('click',() => {
  if(name_text && mail_text && phn_num && msg_text){
    alert("Thank You for your message");
  }
})