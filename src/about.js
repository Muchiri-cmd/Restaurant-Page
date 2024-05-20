import clearContent from ".";
import { contentDiv } from ".";

export default function loadAboutTab() {
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
 