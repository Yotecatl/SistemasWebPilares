
//cambiar parrafo
document.getElementById("parrafo1").innerHTML = "Soy el nuevo parrafo"

//cambiar titulo
const cambioTitulo = document.getElementById("titulo");
cambioTitulo.innerHTML="Siguiendo con el DOM";

//Cambiar imagen
document.getElementById("miImagen").src ="./imgs/espacio.jpg"

//Agregaar elementos
const para = document.createElement("p");
const node = document.createTextNode("Nuevo parrafo");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para, child);

//Remover un elemento
const elemt = document.getElementById("p3");
elemt.remove();

const parent = document.getElementById("div2");
const child2 = document.getElementById("p5");
parent.removeChild(child2);

//Remplazar contenido
const para2 = document.createElement("p");
const node2 = document.createTextNode("nuevo parrafo 7");
para2.appendChild(node2);

const parent2 = document.getElementById("div3");
const child3 = document.getElementById("p7");
parent2.replaceChild(para2, child3);
