/* ------- guardar y recuperar datos en localStorage ----------*/
const nom = document.querySelector('#nombre');
const email = document.querySelector('#email');
const country = document.querySelector('#pais');
const city = document.querySelector('#poblacion');
const descripcion = document.querySelector('#descripcion');

function guardarDatosPers(){
    nom.addEventListener("focusout", function() {
    localStorage.setItem("nom", nom.value);
    });
    email.addEventListener("focusout", function() {
        localStorage.setItem("email", email.value);
    });
    country.addEventListener("focusout", function() {
        localStorage.setItem("country", country.value);
    });
    city.addEventListener("focusout", function() {
        localStorage.setItem("city", city.value);
    });
    descripcion.addEventListener("focusout", function() {
        localStorage.setItem("descripcion", descripcion.value);
    });
}

let years = document.querySelector('#years');
const sector = document.querySelector('#sector');
let skills = document.querySelector('#skills');

function guardarDatosProf(){
    years.addEventListener("focusout", function() {
        localStorage.setItem("year", years.value);
    });
    sector.addEventListener("focusout", function(){
        localStorage.setItem("sector", sector.value);
    });
    skills.addEventListener("focusout", function(){
        localStorage.setItem("skill", skills.value);
    });
}

function recuperarDatosPers(){
    nom.value = localStorage.getItem('nom');
    //console.log(nom.value);
    email.value = localStorage.getItem('email');
    //console.log(email.value);
    country.value = localStorage.getItem('country');
    //console.log(country.value);
    city.value = localStorage.getItem('city');
    //console.log(city.value);
    descripcion.value = localStorage.getItem('descripcion');
    //console.log(descripcion.value);
}

function recuperarDatosProf(){
    years.value = localStorage.getItem('year');
    //console.log(years.value);
    sector.value = localStorage.getItem('sector');
    //console.log(sector.value);
    skills.value = localStorage.getItem('skill');
    //console.log(skills.value);
}
guardarDatosPers();
guardarDatosProf();
recuperarDatosPers();
recuperarDatosProf(); 





   

