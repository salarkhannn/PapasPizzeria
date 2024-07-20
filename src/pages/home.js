import royImageSrc from '../imgs/Roy.png';
import papaImageSrc from '../imgs/papa.png'

function home(){
    const app = document.querySelector('#app');


    const content = document.createElement('div');
    content.id = "content";

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    content.appendChild(titleContainer);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Papa's Pizzeria";
    titleContainer.appendChild(title);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    content.appendChild(imgContainer);

    const royImage = document.createElement('img');
    royImage.src = royImageSrc;
    royImage.alt = "Roy";
    royImage.classList.add('roy-image');

    imgContainer.appendChild(royImage);

    const papaImage = document.createElement('img');
    papaImage.src = papaImageSrc;
    papaImage.alt = "Papa Louie";
    papaImage.classList.add('papa-image');

    imgContainer.appendChild(papaImage);

    app.appendChild(content);
}

export default home;
