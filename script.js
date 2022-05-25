import basket from '../basket.js';
import products from '../products.js';


let basketAddButton = document.querySelectorAll('.new-sum').forEach(item => {
    item.addEventListener('click', function (e) {
        basket.add(e.target.getAttribute('product_id'));
    })
});

let basketDeleteButton = document.querySelectorAll('.old-sum').forEach(item => {
    item.addEventListener('click', function (e) {
        basket.delete(e.target.parentElement.querySelector('.new-sum').getAttribute('product_id'));
    })
});

// We enable .scrollline-text when full load page
export const categoryAnimate = () => {
    window.addEventListener('load', (event) => {
        var elements = document.querySelectorAll('.animation-text');
        for (var i = 0; i < elements.length; i++)
            elements[i].style.display = 'block';
    });
}

let btn = document.querySelector(".nav-toggle");
        let header = document.querySelector(".header-line");
        

        btn.addEventListener('click', function(e) {
            this.innerHTML = '<img src="./img/outline-x.svg" alt="menu">';
            header.style.backgroundColor = "white";
        })