import {icons} from "../../assets/data/icons.js";

const iconContaier = document.createElement('div');
iconContaier.classList.add('social-links');
let device;
icons.forEach(icon=>{
    if(window.innerWidth <= 1000)
        device="mobile";
    else if(window.innerWidth <=1500)
        device = "tablet"
    else device = "desktop"

    const link = document.createElement('a');
    link.href= icon.link;
    const iconImg = document.createElement('img');
    iconImg.src = icon[device];
    iconImg.alt = icon.alt;
    link.appendChild(iconImg);
    iconContaier.appendChild(link);
});

const footer = document.getElementById('footer');
footer.appendChild(iconContaier);
console.log(iconContaier.innerHTML);

