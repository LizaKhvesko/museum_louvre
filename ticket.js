const buy = document.querySelector('.buy');
const cartOverlay = document.querySelector('.cart-overlay');
const close = document.querySelector('.close');

let basicPermanentPrice = 20;
let basicTemporaryPrice = 25;
let basicCombinedPrice = 40;
let seniorPermanentPrice = basicPermanentPrice / 2;
let seniorTemporaryPrice = basicTemporaryPrice / 2;
let seniorCombinedPrice = basicCombinedPrice / 2;

const inputs = document.querySelectorAll('input')
const basicCount = document.querySelector('.basic-count');
const seniorCount = document.querySelector('.senior-count');

const radios = document.querySelectorAll('input[name="radio"]');
const permanentRadio = document.querySelector('.permanent-radio');
const temporaryRadio = document.querySelector('.temporary-radio')
const combinedRadio = document.querySelector('.combined-radio')

let total = document.querySelector('.total');
const ticketsButtons = document.querySelectorAll('.tickets-button');

//Modal

const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
};

const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
    
};

buy.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', event => {
    const target = event.target;

    if (target.matches('.close') || target.matches('.cart-overlay'))  {
        cartModalClose();
    }
});

// Total Price

function calculateTotalCost() {
    let final = 0;
    localStorage.setItem('type', radios.value);
  
    if (permanentRadio.checked) {
        final = basicPermanentPrice * parseInt(basicCount.value) + seniorPermanentPrice * (parseInt(seniorCount.value));
    } else if (temporaryRadio.checked) {
        final = basicTemporaryPrice * parseInt(basicCount.value) + seniorTemporaryPrice * (parseInt(seniorCount.value));
    } else if (combinedRadio.checked) {
         final = basicCombinedPrice * parseInt(basicCount.value) + seniorCombinedPrice * (parseInt(seniorCount.value));
    }
    total.textContent = `Total €${final}`;
 
    //сохраняем выбранные данные
    localStorage.setItem('basic', basicCount.value);
    localStorage.setItem('senior', seniorCount.value);
}
for (const input of inputs) {
    input.addEventListener('input', function(e) {
        radios.value = e.target.value;
         calculateTotalCost();
    })
}
for (const ticketButton of ticketsButtons) {
    ticketButton.addEventListener('click', function(){
        calculateTotalCost();
    })
}

//обновляем страницу
const updatePage = () => {
    const basic = localStorage.getItem('basic');
    const senior = localStorage.getItem('senior');
    radios.value = localStorage.getItem('type');

    radios.forEach(function(radioInput) {
            if (radioInput.value === radios.value) {
                radioInput.checked = true;
            }})
    basicCount.value = basic || 1;
    seniorCount.value = senior || 1;
    calculateTotalCost()
}
updatePage();