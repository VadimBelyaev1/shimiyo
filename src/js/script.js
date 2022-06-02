
    let btn = document.querySelector(".nav-toggle");
    let header = document.querySelector(".header_top");
    let logo = document.querySelector(".header-logo");
    let loc = document.querySelector(".location-test");
    let add = document.getElementById("address-text");
    let is_menu_closed = true; 
        btn.addEventListener('click', function(e) {
            if (is_menu_closed) {
            this.innerHTML = '<img src="./src/img/outline-x.svg" alt="menu">';
            logo.innerHTML = '<img src="./src/img/logo-green.svg" alt="logo">';
            loc.innerHTML = '<img src="./src/img/location-add-green.svg" alt="location-img">';
            add.style.color = '#274646';
            // console.log(add.style.color);
            header.style.backgroundColor = "white";
        } else {
                this.innerHTML = '<img src="./src/img/menu-outline.svg" alt="menu">';
                logo.innerHTML = '<img src="./src/img/logo.svg" alt="logo">';
                loc.innerHTML = '<img src="./src/img/location-add-yellow.svg" alt="location-img">';
                add.style.color = '#FFE091';
                header.style.backgroundColor = "#274646";
            }
            is_menu_closed = !is_menu_closed;
        })

    btn.addEventListener('click', () => {
        let nav = document.querySelector('.nav')
        if(nav) {
            nav.classList.toggle('nav__active');
        }
    })