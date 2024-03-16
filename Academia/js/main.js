let productos = [];

let precios = [];

let datProductos = document.getElementsByTagName("input");
console.log(datProductos);

let datPrecios = document.getElementsByClassName("precios")
console.log(datPrecios);



//let prueba = limpiezaDatos();
//console.log(prueba);

const btn = document.querySelector("button");

btn.addEventListener("click", function (evt){
    evt.preventDefault();
    let temp = [];
    let vartemp;
    for (let i=0; i<datProductos.length; i++){
        vartemp = datProductos[i].value;
        //console.log(vartemp); mostraba el valor
        temp.push(vartemp);

    }
    console.log(`Estos son mis productos ${temp}`);
    let sumaprecios = 0;
    let varPrecios;
    for(let j=0; j<datPrecios.length; j++){
        varPrecios = parseInt(datPrecios[j].value);
        //console.log(varPrecios);
        sumaprecios = sumaprecios + varPrecios;
        //console.log(sumaprecios); 
    }
    document.getElementById("total").innerHTML = "Total: " + sumaprecios;
    console.log(sumaprecios);
    return temp;
});