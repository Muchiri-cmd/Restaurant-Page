import './styles.css';
import coverImg from './kfc.jpeg';
import _ from 'lodash';

function component(){
    const contentDiv = document.getElementById('content')
    contentDiv.innerHTML = _.join(['Finger','lickin','good'],' ');
    contentDiv.classList.add('content');
    
    //add background image
    const bgImage = new Image();
    bgImage.src = coverImg;
    contentDiv.appendChild(bgImage);
    return contentDiv;
}
component();
console.log("Working perfectly fine.")
