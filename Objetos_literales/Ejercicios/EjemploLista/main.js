let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]

function propiedadUnica(array, string){
    if(string == "nombre"){
        let nombres = [];
        let nombreojb = {};
        for (let i = 0; i < array.length; i++) {
            nombreojb.nombre = array[i].nombre;
            //console.log(nombreojb);
            nombres.push(nombreojb);
            //console.log(nombres);
            nombreojb = {};
            
          }
        return nombres; 

    }
    if(string == "edad"){
        let edades = [];
        let edadesobj = {};
        for (let i = 0; i < array.length; i++) {
            edadesobj.edad = array[i].edad;
            edades.push(edadesobj);
            edadesobj = {};
          } 
        return edades;
    }

};

let noms = propiedadUnica(array, "nombre");
console.log(noms)
let edds = propiedadUnica(array, "edad");
console.log(edds)
