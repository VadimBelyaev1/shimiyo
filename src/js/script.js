
let btn = document.querySelector(".nav-toggle");
let header = document.querySelector(".header_top");
   if (btn.addEventListener('click')) { 
        this.innerHTML = '<img src="./src/img/outline-x.svg" alt="menu">';
        header.style.backgroundColor = "white";
   }
   else (btn.addEventListener('click')) { 
    this.innerHTML = '<img src="./src/img/menu-outline.svg" alt="menu">';
    header.style.backgroundColor = "#274646";
}



    btn.addEventListener('click', () => {
        let nav = document.querySelector('.nav')
        if(nav) {
            nav.classList.toggle('nav__active');
        }
    })