function loadHeader() {
    const app = document.querySelector('#app');
    
    const header = document.createElement('header');
    
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
  
    header.appendChild(navbar);
  
    const navdiv = document.createElement('div');
    navdiv.classList.add('navdiv');
  
    navbar.appendChild(navdiv);
  
    const navbarLogo = document.createElement('a');
    navbarLogo.classList.add('navbar-logo');
    navbarLogo.textContent = "Papa's Pizzeria";
    navbarLogo.id = "headerLogo";
  
    const buttonList = document.createElement('ul');
    buttonList.classList.add('navbar-list');
  
    navdiv.appendChild(navbarLogo);
    navdiv.appendChild(buttonList);
  
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const aboutButton = document.createElement('button');
  
    homeButton.classList.add('navbar-button');
    menuButton.classList.add('navbar-button');
    aboutButton.classList.add('navbar-button');
  
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    aboutButton.textContent = "About";
    
    homeButton.id = "homeButton";
    menuButton.id = "menuButton";
    aboutButton.id = "aboutButton";
  
    buttonList.appendChild(homeButton);
    buttonList.appendChild(menuButton);
    buttonList.appendChild(aboutButton);
  
    app.appendChild(header);
}

export default loadHeader;
