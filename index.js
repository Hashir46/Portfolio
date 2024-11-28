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

function borderBtn(){
  home.style.borderBottom = "transparent";
  abt.style.borderBottom = "transparent";
  pro.style.borderBottom = "transparent";
  cont.style.borderBottom = "transparent";
}
let home = document.getElementById('home1');
let abt = document.getElementById('abt1');
let pro = document.getElementById('pro1');
let cont = document.getElementById('cont1');

home.addEventListener('click', () => {
  borderBtn();
  home.style.borderBottom = '1px solid #ff6900';
});
abt.addEventListener('click', () => {
  borderBtn();
  abt.style.borderBottom = '1px solid #ff6900';
});
pro.addEventListener('click', () => {
  borderBtn();
  pro.style.borderBottom = '1px solid #ff6900';
});
cont.addEventListener('click', () => {
  borderBtn();
  cont.style.borderBottom = '1px solid #ff6900';
});

const projectData = {
  projects: [
    {
      title: "Student Management System",
      tools: ["Java, JDBC, MySQL"],
      buttons: {
        view: {
          label: "",
          icon: "",
          url: "https://glow-haven.netlify.app/"
        },
        github: {
          label: "Github",
          icon: "fa-brands fa-github",
          url: "https://github.com/Hashir46/StudentsManaementSystem.git"
        }
      },
      image: "img/student-management.webp"
    },
    {
      title: "Online Library",
      tools: ["Java"],
      buttons: {
        view: {
          label: "",
          icon: "",
          url: "https://glow-haven.netlify.app/"
        },
        github: {
          label: "Github",
          icon: "fa-brands fa-github",
          url: "https://github.com/Hashir46/Online-Library.git"
        }
      },
      image: "img/Online-library.jpg"
    },
    {
      title: "Glow-Haven",
      tools: ["Bootstrap"],
      buttons: {
        view: {
          label: "View",
          icon: "fa-solid fa-eye",
          url: "https://glow-haven.netlify.app/"
        },
        github: {
          label: "Github",
          icon: "fa-brands fa-github",
          url: "https://github.com/Hashir46/Glow-Haven.git"
        }
      },
      image: "img/Pink Illustration Beauty Product Logo.png"
    },
    {
      title: "Zenith-Fit",
      tools: ["HTML & CSS"],
      buttons: {
        view: {
          label: "View",
          icon: "fa-solid fa-eye",
          url: "https://zenithfit-gym-website.netlify.app/"
        },
        github: {
          label: "Github",
          icon: "fa-brands fa-github",
          url: "https://github.com/Hashir46/Gym-Website.git"
        }
      },
      image: "img/ZenithFit logo.png"
    },
    {
      title: "Todo-List",
      tools: ["JavaScript"],
      buttons: {
        view: {
          label: "View",
          icon: "fa-solid fa-eye",
          url: "https://hashir-todo-list.netlify.app/"
        },
        github: {
          label: "Github",
          icon: "fa-brands fa-github",
          url: "https://github.com/Hashir46/Todo-List.git"
        }
      },
      image: "img/Flat Design To-Do List Instagram Post.png"
    },
    {
      title: "Color-Picker",
      tools: ["JavaScript"],
      buttons: {
        view: {
          label: "View",
          icon: "fa-solid fa-eye",
          url: "https://hashir-color-picker.netlify.app/"
        },
        github: {
          label: "Github",
          icon: "fa-brands fa-github",
          url: "https://github.com/Hashir46/Color-Picker.git"
        }
      },
      image: "img/color_pick.webp"
    },
    {
      title: "QR-Generator",
      tools: ["JavaScript"],
      buttons: {
        view: {
          label: "View",
          icon: "fa-solid fa-eye",
          url: "https://hashir-qr-code-generator.netlify.app/"
        },
        github: {
          label: "Github",
          icon: "fa-brands fa-github",
          url: "https://github.com/Hashir46/QR-Code-Generator.git"
        }
      },
      image: "img/qr2.jpg"
    },
   
  ]
};