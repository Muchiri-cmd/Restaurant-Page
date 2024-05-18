import './styles.css';
import BgImg from './imgs/bg.jpeg';
import coverImg from './imgs/kfc.jpeg';
import burgerImg from './imgs/burger.jpg';
import friesImg from './imgs/fries.jpeg';
import bucketImg from './imgs/bucket.jpeg';
import comboImg from './imgs/combo.jpeg';
import friesChickenImg from './imgs/frieschicken.jpeg';
import sodaChickenImg from './imgs/sodachicken.jpeg';
import ad from './imgs/ad.jpeg';

import _ from 'lodash'

const homeTabBtn = document.getElementById('Home');
const menuTabBtn = document.getElementById('Menu');
const aboutTabBtn = document.getElementById('About');

const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const aboutTab = document.getElementById('about-tab')

const contentDiv = document.getElementById('content');

// Add event listeners to the buttons
homeTabBtn.addEventListener('click', loadHomeTab);
menuTabBtn.addEventListener('click', loadMenuTab);
aboutTabBtn.addEventListener('click', loadAboutTab);

// Clear content div
function clearContent() {
   contentDiv.innerHTML = '';
}
//Create and populate the Home tab
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
// Define menu data
const menuItems = [
    {
        title: 'Burger',
        price: 50,
        description: 'Delicious burger with fresh ingredients.',
        image: burgerImg
    },
    {
        title: 'Fries',
        price: 70,
        description: 'Crispy fries served with your choice of dipping sauce.',
        image: friesImg
    },
    {
        title: 'Bucket',
        price: 250,
        description: 'Bucket filled with crispy fries & chicken pieces.',
        image: bucketImg
    },
    {
        title: 'Combo Meal',
        price: 350,
        description: 'Perfect combo of chicken, fries and drink.',
        image: comboImg
    },
    {
        title: 'Fries Chicken',
        price: 150,
        description: 'Tender chicken strips served with fries.',
        image: friesChickenImg
    },
    {
        title: 'Soda Chicken',
        price: 120,
        description: 'Crispy chicken and fries served with a refreshing soda.',
        image: sodaChickenImg
    },
];

//Create and populate the Menu tab
function loadMenuTab() {
   clearContent();

   const menuTab = document.createElement('div');
   menuTab.id = 'menu-tab';
   
   menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.style.setProperty('--animation-order', index);

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        const title = document.createElement('span');
        title.classList.add('item-name');
        title.textContent = `${item.title} | $${item.price}`;

        const description = document.createElement('div');
        description.classList.add('desc');
        description.textContent = `${item.description}`;

        menuItem.appendChild(img);
        menuItem.appendChild(title);
        menuItem.appendChild(description);

        menuTab.appendChild(menuItem);
    });

    contentDiv.appendChild(menuTab)
}
function loadAboutTab() {
   clearContent();

   const aboutTab = document.createElement('div');
   aboutTab.id = 'about-tab';

   const p1 = document.createElement('h2');
   p1.textContent = 'About Us';
   aboutTab.appendChild(p1);

   const p2 = document.createElement('p');
   p2.innerHTML = `We are KFC, home of the world-famous fried chicken. With over 30,000 locations in 150 countries, we're the second-largest fast food chain on the planet.
                   Our story began in the 1930s with Colonel Harland Sanders. His secret recipe was so good, it took over the world. The Colonel's face is still smiling down on us from every bucket.
                   Our slogans say it all: "It's Finger Lickin' Good!" and "Nobody does chicken like KFC".
                   Come for the chicken, stay for the smiles. And remember, it's always finger-lickin' good!`;
   aboutTab.appendChild(p2);

   const p3= document.createElement('h2');
   p3.textContent = 'Our Mission';
   aboutTab.appendChild(p3)

   const p4 = document.createElement('p');
   p4.innerHTML = `To deliver joy one serving at a time, with mouth-watering meals that make every moment special.`
   aboutTab.appendChild(p4);


   const p5= document.createElement('h2');
   p5.textContent = 'Join the KFC Family';
   aboutTab.appendChild(p5)

   const p6 = document.createElement('p');
   p6.innerHTML = `Dive into our world of finger-lickin' goodness. Whether you're dining in, taking out, or ordering online, we’re here to make your day delicious.`;
   aboutTab.appendChild(p6);

   const iconsDiv = document.createElement('div');
   iconsDiv.classList.add('icons-div');

    // Define the social media icons 
    const socialMedia = [
        { class: 'fab fa-twitter', url: 'https://twitter.com/KFCinKenya' },
        { class: 'fab fa-instagram', url: 'https://www.instagram.com/kfckenya/' },
        { class: 'fab fa-youtube', url: 'https://www.youtube.com/channel/UCeIvrX5BUZ9d1B5rmxz5w_Q' },
        { class: 'fab fa-facebook',  url: 'https://www.facebook.com/kfckenya'}
    ];
    socialMedia.forEach(media =>{
        const anchor = document.createElement('a');
        anchor.href = media.url;
        anchor.target = '_blank';

        const icon = document.createElement('i');
        icon.className = media.class;

        anchor.appendChild(icon);
        iconsDiv.appendChild(anchor);
    })
   aboutTab.appendChild(iconsDiv);

   contentDiv.appendChild(aboutTab);
}

function loadStyles(){
   const body = document.querySelector('body');

   contentDiv.classList.add('content');

   return contentDiv;

}
loadHomeTab();
loadStyles();
console.log("Working perfectly fine.")

