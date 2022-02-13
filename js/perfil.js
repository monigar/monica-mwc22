/*----------- recuperar datos template_header ----------*/
async function fetchTemplatesFromFileHeader(){
    const response = await fetch('../templates/template_header.html');
    //console.log(response);
    if(response.ok){
      const templates = document.createElement('template'); //<template></template>
      templates.innerHTML = await response.text();  //<template> ..... </template>
      const headerTemplates = templates.content.querySelector('#header_template').content;
      //console.log(headerTemplates);
      const clone = headerTemplates.cloneNode(true);
      document.querySelector('#header').appendChild(clone);
    }
}
/*-------------- recuperar datos template_footer -------------*/
async function fetchTemplatesFromFileFooter(){
    const response = await fetch('../templates/template_footer.html');
    console.log(response);
    if(response.ok)
{
    const templates = document.createElement('template');
    templates.innerHTML = await response.text();
    const footerTemplates = templates.content.querySelector('#footer_template').content;
    console.log(footerTemplates);
    document.querySelector('#footer').appendChild(footerTemplates);

}}

/*----------- recuperar datos de localStorage ---------*/
nom = localStorage.getItem('nom');
email = localStorage.getItem('email');
country = localStorage.getItem('country');
city = localStorage.getItem('city');
descripcion = localStorage.getItem('descripcion');
if(nom && email && country && city && descripcion){
    addDatos(nom, email, country, city, descripcion);      
}

years = localStorage.getItem('year');
sector = localStorage.getItem('sector');
skills = localStorage.getItem('skill');
if(years && sector){
    addProfesional(years, sector);
}

/*------- añadir datos al perfil -----------*/
function addDatos(){
    document.querySelector('.personal h2').textContent = nom;
    document.querySelector('.personal p').textContent = descripcion;
    document.querySelector('.personal span.city').textContent = city;
    document.querySelector('.personal span.country').textContent = country;
}

function addProfesional(){
    document.querySelector('.profesional span.years').textContent = years;
    document.querySelector('.profesional p.sector').textContent = sector;  
}

/*--------- generar avatar-color aleatorio ------------*/

function generarColor(){
    const colores = "0123456789ABCDEF";
    const actualColor = [];
   for(let i = 0; i < 6; i++){
       let color = colores[Math.floor(Math.random() * 16)];
       actualColor.push(color);
   } 
    let avatar = '#' + actualColor.join('') ;
    //console.log(avatar);
    document.querySelector('.avatar').style.backgroundColor = avatar;
   
}
/*DOMContentLoaded ------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    generarColor();
    fetchTemplatesFromFileHeader();
    fetchTemplatesFromFileFooter();
  });



