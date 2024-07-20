const _aboutText = `
    This is my submission for The Odin Project Restaurant page assignment. 
    This website is inspired by the Flipline game called Papa's Pizzeria.
    I wish I was about to put more functiontionality into the website but I didn't want to take too long on just this one project.

`;

function about(){
    const app = document.querySelector('#app');

    const aboutTitleContainer = document.createElement('div');
    aboutTitleContainer.classList.add('about-title-container');
    
    const aboutTitle = document.createElement('h1');
    aboutTitle.classList.add('about-title');
    aboutTitle.textContent = "About";

    aboutTitleContainer.appendChild(aboutTitle);
    app.appendChild(aboutTitleContainer);

    const aboutTextContainer = document.createElement('div');
    aboutTextContainer.classList.add('about-text-container');

    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.textContent = _aboutText;

    aboutTextContainer.appendChild(aboutText);

    app.appendChild(aboutTextContainer);
}

export default about;