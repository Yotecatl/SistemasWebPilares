const parrafo1 = document.getElementById("parra1");
console.log(parrafo1);

console.log(parrafo1.textContent);

const h2element = document.querySelector(".series");
console.log(h2element)

const lis = document.querySelector(".lista");
console.log(lis)

const listElement = document.querySelectorAll("ul>li");
console.log(listElement)

const listSeries = document.querySelectorAll("ul>li");
listSeries.forEach((i) => {
    console.log(i);    
});

let agregarH2 = document.createElement("h2"); //crear un H2
agregarH2.textContent ="10 razones por las que me gusta programar";
document.body.appendChild(agregarH2);

let listaRazones = document.createElement("ul");
document.body.appendChild(listaRazones);

let primeraRazon = document.createElement("li");
primeraRazon.textContent = "Me divierte";
document.body.appendChild(primeraRazon)

let segundaRazon = document.createElement("li");
segundaRazon.textContent = "La logica es interesante";
document.body.appendChild(segundaRazon)

let terceraRazon = document.createElement("li");
terceraRazon.textContent = "Me gusta escribir algoritmos";
document.body.appendChild(terceraRazon)

let cuartaRazon = document.createElement("li");
cuartaRazon.textContent = "escibir codigo es divertido";
document.body.appendChild(cuartaRazon)

let quintaRazon = document.createElement("li");
quintaRazon.textContent = "La logica es interesante";
document.body.appendChild(quintaRazon)

let sextaRazon = document.createElement("li");
sextaRazon.textContent = "Hay muchos lenguajes por aprender";
document.body.appendChild(sextaRazon)

let septimaRazon = document.createElement("li");
septimaRazon.textContent = "Sirve para tareas repetitivas";
document.body.appendChild(septimaRazon)

let octavaRazon = document.createElement("li");
octavaRazon.textContent = "Es reutilizable";
document.body.appendChild(octavaRazon)

let novenaRazon = document.createElement("li");
novenaRazon.textContent = "Puedo hacer mis propias app";
document.body.appendChild(novenaRazon)

let decimaRazon = document.createElement("li");
decimaRazon.textContent = "Hace videojuegos";
document.body.appendChild(decimaRazon)

function elementoLi(string){
    let elementLi = document.createElement("li");
    elementLi.textContent = string;
    document.body.appendChild(elementLi);
}


elementoLi("Elemento desde la funcion");

const etiquetaH1 = document.querySelector("h1");
etiquetaH1.style.color = "blue";

const etiquetaH2 = document.querySelector("h2");
etiquetaH2.style.color = "grey";

const etiquetaH22 = document.querySelector(".series");
etiquetaH22.style.color = "grey";

const etiquetali = document.querySelector(".lista");
etiquetali.style.color = "green";
