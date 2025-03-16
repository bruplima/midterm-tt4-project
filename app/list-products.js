import './index.scss';

// images
import enginakyurt from "./assets/images/pexels-enginakyurt-4458519.jpg";
import quangVietNguyen from "./assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";
import product1 from "./assets/images/product1.jpg";
import product2 from "./assets/images/product2.jpg";
import product3 from "./assets/images/product3.jpg";
import product4 from "./assets/images/product4.jpg";
import product5 from "./assets/images/product5.jpg";
import product6 from "./assets/images/product6.jpg";
import product7 from "./assets/images/product7.jpg";
import product8 from "./assets/images/product8.jpg";
import product9 from "./assets/images/product9.jpg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Fujfilm Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: enginakyurt
        },
        {
            name: 'Canon Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: quangVietNguyen
        },
        {
            name: 'Nikon Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: yaazhini
        },
        {
            name: 'Perfume',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product1
        },
        {
            name: 'Make Up',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product2
        },
        {
            name: 'Lipstick and blush',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product3
        },
        {
            name: 'Lip Gloss',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product4
        },
        {
            name: 'Camera Lens',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product5
        },
        {
            name: 'Milk',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product6
        },
        {
            name: 'Computer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product7
        },
        {
            name: 'Coca',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product8
        },
        {
            name: 'Camera Lens',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product9
        }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.classList.add('col-3');
        
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn');
        addToCart.classList.add('btn-success');
        addToCart.classList.add('float-end');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });
});