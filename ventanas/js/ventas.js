/*

function abrir_ventana(){
    window.open("http://www.cnice.mec.es");
}

function parar_abrir(){
    clearTimeout(pop);
}

pop = setInterval("abrir_ventana()", 3000);

*/

let abrir_ventana = () => window.open("http://www.cnice.mec.es");

let parar_abrir = () => clearTimeout(pop);

pop = setInterval("abrir_ventana()", 3000);