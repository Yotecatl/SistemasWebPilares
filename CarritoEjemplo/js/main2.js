
//Metodo tofixed() da formato y redondea
function financial(x){
    return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
console.log(financial(0.004));
console.log(financial("1.23e+5"));

let numObj = 12345.6789;

console.log(numObj.toFixed());
console.log(numObj.toFixed(1));
console.log(numObj.toFixed(6));
console.log(1.23e20.toFixed(2));
console.log(1.23e-10.toFixed(2));
console.log(2.34.toFixed(1));
console.log(2.35.toFixed(1));
console.log(-(2.34).toFixed(1));
console.log(-(2.35).toFixed(1));

/*
let fruits = ["apple", "bAnana", "grapes", "mango", "orange"];

//Filtra la matriz en funcion de un criterio de busqueda(query)
function filterItems(query){    
    return fruits.filter(function(el){
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
}

console.log(filterItems("ap"));
console.log(filterItems("an"));
*/


/*
//Metodo reduce
const array1 = [1,2,3,4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
);

console.log(sumWithInitial);
*/


/*
let arr =[
    {id:15},
    {id:-1},
    {id:0},
    {id:3},
    {id:12.2},
    {},
    {id: null},
    {id:NaN},
    {id:"underfined"},
];

let entradasInvalidas=0;
//Si el elemento tiene un atributo id, y su valor correspondiente es un numero
//Y no es el valor NaN, entonces es una válida

function filtrarPorID(obj){
    if("id" in obj && typeof obj.id ==="number" && !isNaN(obj.id)){
        return true;
    }else{
        entradasInvalidas++;
    }
}

let arrPorID = arr.filter(filtrarPorID);

console.log("Array Filtrado\n", arrPorID);
console.log("Número de Entradas Invalidas = ", entradasInvalidas);
*/


/*
function esSuficientementeGrande(elemento){
    return elemento >=10;
}

let filtrados=[12,5,8,130,44]
filtrados.filter(esSuficientementeGrande);
console.log(filtrados);
*/

/*
const words =["spray", "elite", "exuberant", "destruccion", "present"];

const result = words.filter((word)=>word.length>6);

console.log(result);
*/