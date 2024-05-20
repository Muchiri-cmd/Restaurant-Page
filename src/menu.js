import clearContent from '.';
import { contentDiv } from '.';

import burgerImg from './imgs/burger.jpg';
import friesImg from './imgs/fries.jpeg';
import bucketImg from './imgs/bucket.jpeg';
import comboImg from './imgs/combo.jpeg';
import friesChickenImg from './imgs/frieschicken.jpeg';
import sodaChickenImg from './imgs/sodachicken.jpeg';

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
export default function loadMenuTab() {
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
