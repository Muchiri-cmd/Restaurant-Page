import './styles.css';
import BgImg from './bg.jpeg';
import coverImg from './kfc.jpeg';
import burgerImg from './burger.jpg';
import friesImg from './fries.jpeg';
import bucketImg from './bucket.jpeg';
import comboImg from './combo.jpeg';
import friesChickenImg from './frieschicken.jpeg';
import sodaChickenImg from './sodachicken.jpeg';
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
   p1.textContent = "How would you like your order today ?";
   homeTab.appendChild(p1);

   const span1 = document.createElement('span');
   span1.textContent = "Delivery and Pick Up Now Available";
   homeTab.appendChild(span1);

   const p2 = document.createElement('p');
   p2.textContent = "Explore Our Menu ➙";
   homeTab.appendChild(p2);

   const span2 = document.createElement('span');
   span2.className = 'motto';
   span2.textContent = "Fingerlickin' good...";
   homeTab.appendChild(span2);

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
        description: 'Perfect combo of burger, fries and drink.',
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
   
   menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        const title = document.createElement('span');
        title.classList.add('item-name');
        title.textContent = item.title + ' |' + `$${item.price}`;

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

   const p1 = document.createElement('p');
   p1.textContent = 'About Us';
   aboutTab.appendChild(p1);

   const p2 = document.createElement('p');
   p2.textContent = 'Welcome to KFC!';
   aboutTab.appendChild(p2);

   const p3 = document.createElement('p');
   p3.innerHTML = `We are KFC, home of the world-famous fried chicken. With over 30,000 locations in 150 countries, we're the second-largest fast food chain on the planet (watch out, McDonald's).
                   Our story began in the 1930s with Colonel Harland Sanders, who started frying chicken in Corbin, Kentucky. His secret recipe with "11 herbs and spices" was so good, it took over the world. The Colonel's face is still smiling down on us from every bucket.
                   We were the first to take American fried chicken global, opening our first international locations in the 1960s. We even cracked China in 1987 and now it's our biggest market.
                   Our menu has grown to include sandwiches, wraps and all your favorite sides, but our original fried chicken remains the star. Our slogans say it all: "It's Finger Lickin' Good!" and "Nobody does chicken like KFC".
                   Come for the chicken, stay for the smiles. And remember, it's always finger-lickin' good!`;
   aboutTab.appendChild(p3);

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

