import "./styles/home.css";
import "./styles/menu.css"
import "./styles/about.css"

import firstLoad from "./functions/firstLoad.js";
import {loadMenu, changeQuantity} from "./pages/menu.js";
import loadHeader from "./pages/header.js";
import home from "./pages/home.js";
import about from "./pages/about.js"

firstLoad();

function attachEventListeners() {
    const homeLogo = document.querySelector('#headerLogo');
    const homeButton = document.querySelector('#homeButton');
    const menuButton = document.querySelector('#menuButton');
    const aboutButton = document.querySelector('#aboutButton');

    const app = document.querySelector('#app');

    homeLogo.addEventListener('click', function(){
        app.innerHTML = '';
        loadHeader();
        home();
        attachEventListeners(); // Reattach listeners after loading new content
    });

    homeButton.addEventListener('click', function(){
        app.innerHTML = '';
        loadHeader();
        home();
        attachEventListeners(); // Reattach listeners after loading new content
    });

    menuButton.addEventListener('click', function(){
        app.innerHTML = '';
        loadHeader();
        loadMenu();
        attachEventListeners(); // Reattach listeners after loading new content
    });

    aboutButton.addEventListener('click', function(){
        app.innerHTML = '';
        loadHeader();
        about();
        attachEventListeners(); // Reattach listeners after loading new content
    });

    changeQuantity();
}

attachEventListeners();
