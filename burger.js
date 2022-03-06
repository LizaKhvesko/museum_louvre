let adaptive = document.querySelector('.adaptive-nav');
let welcomeTitle = document.querySelector('.welcome-title');
let welcomeAdd = document.querySelector('.welcome-add');
let discovery = document.querySelector('.discovery');
let main= document.querySelector('.main')
let burger = document.querySelector('.burger')
let links = document.querySelectorAll('.nav-item')

function myFunction(x) {
  x.classList.toggle("change");
  adaptive.classList.toggle("change");
  welcomeTitle.classList.toggle("hide");
  welcomeAdd.classList.toggle("hide");
  discovery.classList.toggle("hide");
}

main.addEventListener('click', event => {
    const target = event.target;

    if (!target.matches('.adaptive-nav'))  {
        adaptive.classList.remove("change");
        welcomeTitle.classList.remove("hide");
        welcomeAdd.classList.remove("hide");
        discovery.classList.remove("hide");
        burger.classList.remove("change");

    }
});

for (let link of links) {
    link.addEventListener('click', () => {
        adaptive.classList.remove("change");
        welcomeTitle.classList.remove("hide");
        welcomeAdd.classList.remove("hide");
        discovery.classList.remove("hide");
        burger.classList.remove("change");
    }
);
}




