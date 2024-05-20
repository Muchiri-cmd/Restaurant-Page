import './styles.css';
import BgImg from './imgs/bg.jpeg';
import coverImg from './imgs/kfc.jpeg';
import ad from './imgs/ad.jpeg';

import loadAboutTab from './about.js';
import loadMenuTab from './menu.js';

const homeTabBtn = document.getElementById('Home');
const menuTabBtn = document.getElementById('Menu');
const aboutTabBtn = document.getElementById('About');

const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const aboutTab = document.getElementById('about-tab')

export const contentDiv = document.getElementById('content');

// Add event listeners to the buttons
homeTabBtn.addEventListener('click', loadHomeTab);
menuTabBtn.addEventListener('click', loadMenuTab);
aboutTabBtn.addEventListener('click', loadAboutTab);

// Clear content div
export default function clearContent() {
   contentDiv.innerHTML = '';
}
function loadHomeTab() {
    clearContent();
    const homeTab = document.createElement('div');
    homeTab.id = 'home-tab';
 
    const p1 = document.createElement('p');
    p1.textContent = `Welcome to KFC, where every meal is a celebration of taste. Dive into our world of crispy,
    juicy chicken and delightful sides. Order now and enjoy the legendary flavors delivered right to your doorstep!`;
    homeTab.appendChild(p1);
 
    const span1 = document.createElement('span');
    span1.textContent = "Delivery and Pick Up Now Available";
    homeTab.appendChild(span1);
 
    const p2 = document.createElement('p');
    p2.textContent = `Indulge in the Original Recipe
    Experience the authentic taste of KFC's Original Recipe Chicken. Hand-breaded and seasoned
    to perfection with secret ingridients and spices. Taste the tradition that has been loved for generations.`; 
    homeTab.appendChild(p2);
 
    //add menu image
    const adImg = new Image();
    adImg.src = ad;
    homeTab.appendChild(adImg)
 
    contentDiv.appendChild(homeTab);
 }

function loadStyles(){
   const body = document.querySelector('body');

   contentDiv.classList.add('content');

   return contentDiv;

}
loadHomeTab();
loadStyles();


