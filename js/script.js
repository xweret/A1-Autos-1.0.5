//funcion que agrega la clase active
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// // mostrar y ocultar el form con el boton del nav
// document.querySelector('#login-btn').onclick = () =>{
//     document.querySelector('.login-form-container').classList.toggle('active');
//   }

//   document.querySelector('#close-login-form').onclick = () =>{
//     document.querySelector('.login-form-container').classList.remove('active');
//   }

// funcion para mostrar, en deskstop, una sombra cuando el usuario escrolea
window.onscroll = () => {

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

document.querySelector('.home').onmousemove = (e) =>{

    document.querySelectorAll('.home-parallax').forEach(elm =>{

        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });

};

document.querySelector('.home').onmouseleave = () =>{

    document.querySelectorAll('.home-parallax').forEach(elm =>{

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });

};

// js del swiper 1 

  var swiper = new Swiper(".vehiculos-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grapCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 5800,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


  // js del swiper destacados (son 2 swipers)

  var swiper = new Swiper(".destacados-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grapCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 5800,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

//js del swiper de reviews 

  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grapCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 3800,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


//--------------------------------------------------------------------------
// js para el trabajo practico 2 

// variables 

let user = '';

let visits = 0;

if (localStorage.getItem('user') != null){
  let userName = localStorage.getItem('user');
  document.querySelector('#btnlg').innerHTML = `Bienvenido ${userName}`;


}

document.querySelector('#login-btn').onclick = () =>{
    user = prompt('Por favor ingrese su nombre');
    localStorage.setItem('user', user);
    let userName = localStorage.getItem('user');
    document.querySelector('#btnlg').innerHTML = `Bienvenido ${userName}`;
}

//contador de visitas 

let cantidadVisitas = localStorage.getItem('visitas') || 0;

function incrementarContador(){
  cantidadVisitas = JSON.parse(cantidadVisitas) + 1;
  localStorage.setItem('visitas', cantidadVisitas);
  console.log(cantidadVisitas);
}
incrementarContador();

function mostrarVisitas(){
  if (localStorage.getItem('user') == null){
    document.querySelector('.tooltiptext').innerHTML = 'ingrese para contar las visitas';
  }else{
    document.querySelector('.tooltiptext').innerHTML = `Visitas: ${localStorage.getItem('visitas')}`;
  }

}
mostrarVisitas();