const body = document.body;
const themeIcon = document.getElementById('themeIcon');
const colorPaletteIcon = document.getElementById('colorPaletteIcon');
const colorSwitcher = document.querySelector('.color-switcher');
const color1 = document.querySelector('.div1');
const color2 = document.querySelector('.div2');
const color3 = document.querySelector('.div3');
const color4 = document.querySelector('.div4');
const header = document.querySelector('header');
const button = document.getElementById('button');
const paragraph = document.querySelector('p');
const beatifulColors = document.getElementById('colors');
const caret = document.getElementById('caret');
const menu = document.getElementById('menu');
const sideBar = document.querySelector('aside');
const main = document.querySelector('main');

function changeTheme() {

  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
    colorPaletteIcon.style.display = "none";
    colorSwitcher.style.display = "none";

  } else{
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>';
    colorPaletteIcon.style.display = "block";
  }
}

themeIcon.addEventListener('click', ()=>  changeTheme());


colorPaletteIcon.addEventListener('click', ()=> {

  if(colorSwitcher.style.display === "block") {
    colorSwitcher.style.display = "none"
    caret.style.rotate = '0deg';
    sideBar.style.display = "none";
  } else {
    colorSwitcher.style.display = "block";
    caret.style.rotate = '-180deg';
    sideBar.style.display = "none";
  }
});

color1.addEventListener('click', ()=> {
  header.style.backgroundColor = "rgb(51, 51, 255)";
  button.style.backgroundColor = "rgb(51, 51, 255)";
  sideBar.style.backgroundColor = "rgb(51, 51, 255)";
  paragraph.style.color = "rgb(51, 51, 255)";
  beatifulColors.style.color = "rgb(51, 51, 255)";
});

color1.addEventListener('mouseover', ()=>paragraph.style.color = "rgb(51, 51, 255)");

color2.addEventListener('click', ()=> {
  header.style.backgroundColor = "rgb(51, 92, 103)";
  button.style.backgroundColor = "rgb(51, 92, 103)";
  sideBar.style.backgroundColor = "rgb(51, 92, 103)";
  paragraph.style.color = "rgb(51, 92, 103)";
  beatifulColors.style.color = "rgb(51, 92, 103)";
});

color2.addEventListener('mouseover', ()=> paragraph.style.color = "rgb(51, 92, 103)")

color3.addEventListener('click', ()=> {
  header.style.backgroundColor = "rgb(224, 159, 62)";
  button.style.backgroundColor = "rgb(224, 159, 62)";
  sideBar.style.backgroundColor = "rgb(224, 159, 62)";
  paragraph.style.color ="rgb(224, 159, 62)"; 
  beatifulColors.style.color = "rgb(224, 159, 62)";
});

color3.addEventListener('mouseover', ()=> paragraph.style.color = "rgb(224, 159, 62)");

color4.addEventListener('click', ()=> {
  header.style.backgroundColor = "rgb(40, 54, 24)";
  button.style.backgroundColor = "rgb(40, 54, 24)";
  sideBar.style.backgroundColor = "rgb(40, 54, 24)";
  paragraph.style.color = "rgb(40, 54, 24)";
  beatifulColors.style.color = "rgb(40, 54, 24)";
});

color4.addEventListener('mouseover', ()=> {
  paragraph.style.color = "rgb(40, 54, 24)";
});

menu.addEventListener('click', ()=> {

  if(sideBar.style.display === "block") {
    sideBar.style.display = "none";
    colorSwitcher.style.display = "none";
  } else {
    sideBar.style.display = "block";
    colorSwitcher.style.display = "none";
  }
});

main.addEventListener('click', ()=> {
  colorSwitcher.style.display = "none";
  sideBar.style.display = "none";
})

sideBar.addEventListener('click', () => sideBar.style.display = "none");

