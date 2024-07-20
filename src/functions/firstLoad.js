import loadHeader from '../pages/header.js';
import home from '../pages/home.js';
import about from '../pages/about.js'
import {loadMenu, changeQuantity} from '../pages/menu.js';

const firstLoad = function(){
    loadHeader();
    home();
}

export default firstLoad;