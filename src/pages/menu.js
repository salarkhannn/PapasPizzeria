import MargImage from '../pizzas/MargPizza.png';
import PepImage from '../pizzas/PepPizza.png';
import HawImage from '../pizzas/HawPizza.png';
import MeatImage from '../pizzas/MeatPizza.png';
import VegImage from '../pizzas/VegPizza.png';

const menuItems = ["Margherita Pizza", "Pepperoni Pizza", "Hawaiian Pizza", "Meat Pizza", "Veggie Pizza"];
const menuImages = [MargImage, PepImage, HawImage, MeatImage, VegImage];

function loadMenu() {
    const app = document.querySelector('#app');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('menu-title-container');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Menu';

    titleContainer.appendChild(menuTitle);
    app.appendChild(titleContainer);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const container = document.createElement('section');
    container.classList.add('menu-container');

    for (let i = 0; i < menuItems.length; i++) {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        const cardImage = document.createElement('div');
        cardImage.classList.add('menu-card-image');

        const img = document.createElement('img');
        img.src = menuImages[i];
        cardImage.appendChild(img);
        card.appendChild(cardImage);
        
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = menuItems[i];
        card.appendChild(cardTitle);

        const cardDesc = document.createElement('p');
        cardDesc.textContent = "Delicious and tasty!";
        card.appendChild(cardDesc);

        const quantiyContainer = document.createElement('div');
        quantiyContainer.classList.add('quantity-container');

        const minusButton = document.createElement('button');
        minusButton.classList.add('quantity-button');
        minusButton.textContent = "-";
        minusButton.id = `minusButton${i}`;
        
        const quantityInput = document.createElement('input');
        quantityInput.classList.add('quantity-input');
        quantityInput.placeholder = "0";
        quantityInput.value = 0;
        quantityInput.id = `quantityInput${i}`;
        
        const addButton = document.createElement('button');
        addButton.classList.add('quantity-button');
        addButton.textContent = "+";
        addButton.id = `addButton${i}`;

        quantiyContainer.appendChild(minusButton);
        quantiyContainer.appendChild(quantityInput);
        quantiyContainer.appendChild(addButton);

        card.appendChild(quantiyContainer);

        const addToCartDiv = document.createElement('div');
        addToCartDiv.classList.add('add-to-cart-container');

        
        const addToCart = document.createElement('button');
        addToCart.classList.add('add-to-cart');
        addToCart.textContent = "Add";
        
        addToCartDiv.appendChild(addToCart);

        card.appendChild(addToCartDiv);

        container.appendChild(card);

    }

    cardContainer.appendChild(container);

    app.appendChild(cardContainer);
}

function changeQuantity() {
    // Select all add and minus buttons and quantity inputs
    const addButtons = document.querySelectorAll('.quantity-button');
    const minusButtons = Array.from(addButtons).filter(button => button.textContent === '-');
    const plusButtons = Array.from(addButtons).filter(button => button.textContent === '+');
    const quantityInputs = document.querySelectorAll('.quantity-input');

    // Iterate over all plus buttons
    plusButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = quantityInputs[index];
            input.value = parseInt(input.value) + 1;
        });
    });

    // Iterate over all minus buttons
    minusButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = quantityInputs[index];
            const currentValue = parseInt(input.value);
            if (currentValue > 0) {
                input.value = currentValue - 1;
            }
        });
    });
}


export { loadMenu, changeQuantity };
