const hamburger = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menus");   

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menus__item").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

let cart = document.querySelector('.cart'),
    cartBtn = document.querySelector('.cart__logo'),
    cartEmpty = document.querySelector('.cart__empty'),
    addProductBtn = document.querySelector('.prostaBtn'),
    produtNumDisp = document.querySelector('#display');

addProductBtn.addEventListener('click', () => {
    cartEmpty.innerHTML = `                                        
            <div class="product">
            <div class="pic">
                <img src="./images/pic1.jpg" alt="">
            </div>
            <div class="info">
                <div class="texts">
                    <h3>Fall Limited Edition Sneakers</h3>
                    <p>$125.00 x ${produtNumDisp.innerText} <span>$${125 * produtNumDisp.innerText}.00</span></p>
                </div>
                <svg class="remove__bnt" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="#C3CAD9"/>
                </svg>
            </div>
        </div>
        <button>Checkout</button>`;
        produtNumDisp.innerText = 0;
});



function openCart() {
    cart.classList.toggle('showBasket');
}

function closeCart() {
    cart.classList.remove('showBasket');
}

cartBtn.addEventListener('click', openCart);


let display1 = document.querySelectorAll('.display'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal-close');

function openModal() {
    document.body.style.overflow = 'hidden';
    modal.classList.add('modal__active');
}

function closeModal() {
    document.body.style.overflow = '';
    modal.classList.remove('modal__active');
}

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal();
    }
});

display1.forEach(function(item, i){
    item.addEventListener('click', function(){
        document.body.style.overflow = 'hidden';
        modal.classList.add('modal__active');
    });
});

modalClose.addEventListener('click', closeModal);
window.addEventListener('keydown', function(e){
    if(e.code === "Escape"){
        closeModal();
    }
});


let minus = document.getElementById('minus'),
    plus = document.getElementById('plus'),
    display = document.getElementById('display'),
    num = 0;


plus.addEventListener('click', function(){
    display.innerText = ++num;
    displayBug();
});

minus.addEventListener('click', function(){
    displayBug();
    display.innerHTML = --num;
});

function displayBug() {
    if (display.innerText <= 0) {
        display.setAttribute('disabled');
    } else {
        display.removeAttribute('disabled');
    }
}

// Tab
let tabs = document.querySelectorAll('.tab__item'),
    tabLinks = document.querySelectorAll('.tab__link');

function hideTabContents() {
    tabs.forEach(function(tab) {
        tab.classList.remove('tab__item__active');
    });
    tabLinks.forEach(function(item){
    item.classList.remove('tab__link__active');
    });
}

function showTabContent(i = 0){
    tabs[i].classList.add('tab__item__active');
    tabLinks[i].classList.add('tab__link__active');
}

tabLinks.forEach(function(item, i){
    item.addEventListener('click', function(){
        hideTabContents();
        showTabContent(i);
    });
});

hideTabContents();
showTabContent();


// Tab 2
let tabs1 = document.querySelectorAll('.tab-item'),
    tabLinks1 = document.querySelectorAll('.tab-link');

function hideTabContent() {
    tabs1.forEach(function(tab) {
        tab.classList.remove('tab-item-active');
    });
    tabLinks1.forEach(function(item){
        item.classList.remove('tab-link-active');
    });
}

function showTabContents(i = 0){
    tabs1[i].classList.add('tab-item-active');
    tabLinks1[i].classList.add('tab-link-active');
}

tabLinks1.forEach(function(item, i){
    item.addEventListener('click', function(){
        hideTabContent();
        showTabContents(i);
    });
});

hideTabContent();
showTabContents();