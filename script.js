

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}

function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Ver más";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Ver menos";
      moreText.style.display = "inline";
    }
  } 
function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Ver más";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Ver menos";
        moreText2.style.display = "inline";
      }
  }
  function myFunction3() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");
    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Ver más";
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Ver menos";
        moreText3.style.display = "inline";
      }
  }
  function myFunction4() {
    var dots4 = document.getElementById("dots4");
    var moreText4 = document.getElementById("more4");
    var btnText4 = document.getElementById("myBtn4");
    if (dots4.style.display === "none") {
      dots4.style.display = "inline";
      btnText4.innerHTML = "Ver más";
      moreText4.style.display = "none";
    } else {
      dots4.style.display = "none";
      btnText4.innerHTML = "Ver menos";
      moreText4.style.display = "inline";
    }
  } 
function myFunction5() {
    var dots5 = document.getElementById("dots5");
    var moreText5 = document.getElementById("more5");
    var btnText5 = document.getElementById("myBtn5");
    if (dots5.style.display === "none") {
        dots5.style.display = "inline";
        btnText5.innerHTML = "Ver más";
        moreText5.style.display = "none";
    } else {
        dots5.style.display = "none";
        btnText5.innerHTML = "Ver menos";
        moreText5.style.display = "inline";
      }
  }
  function myFunction6() {
    var dots6 = document.getElementById("dots6");
    var moreText6 = document.getElementById("more6");
    var btnText6 = document.getElementById("myBtn6");
    if (dots6.style.display === "none") {
        dots6.style.display = "inline";
        btnText6.innerHTML = "Ver más";
        moreText6.style.display = "none";
    } else {
        dots6.style.display = "none";
        btnText6.innerHTML = "Ver menos";
        moreText6.style.display = "inline";
      }
  }
  function myFunction7() {
    var dots7 = document.getElementById("dots7");
    var moreText7 = document.getElementById("more7");
    var btnText7 = document.getElementById("myBtn7");
    if (dots7.style.display === "none") {
      dots7.style.display = "inline";
      btnText7.innerHTML = "Ver más";
      moreText7.style.display = "none";
    } else {
      dots7.style.display = "none";
      btnText7.innerHTML = "Ver menos";
      moreText7.style.display = "inline";
    }
  } 
function myFunction8() {
    var dots8 = document.getElementById("dots8");
    var moreText8 = document.getElementById("more8");
    var btnText8 = document.getElementById("myBtn8");
    if (dots8.style.display === "none") {
        dots8.style.display = "inline";
        btnText8.innerHTML = "Ver más";
        moreText8.style.display = "none";
    } else {
        dots8.style.display = "none";
        btnText8.innerHTML = "Ver menos";
        moreText8.style.display = "inline";
      }
  }
  function myFunction9() {
    var dots9 = document.getElementById("dots9");
    var moreText9 = document.getElementById("more9");
    var btnText9 = document.getElementById("myBtn9");
    if (dots9.style.display === "none") {
        dots9.style.display = "inline";
        btnText9.innerHTML = "Ver más";
        moreText9.style.display = "none";
    } else {
        dots9.style.display = "none";
        btnText9.innerHTML = "Ver menos";
        moreText9.style.display = "inline";
      }
  }