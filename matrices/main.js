let butacasCine=[['ocupado', 'libre', 'libre', 'libre'],
['libre', 'libre', 'libre', 'libre'],
['ocupado', 'libre', 'ocupado', 'libre'],
['ocupado', 'ocupado', 'ocupado', 'ocupado'],
['libre', 'libre', 'libre', 'libre']];


//recorrido por filas
let libres = false;

for (let i=0;i<butacasCine[1].length;i++){
    if(butacasCine[2][i]=='libre'){
        libres = true;
        console.log(libres);
    }else{
        libres = false;
        console.log(libres);
    }
    
}

//recorrido por columnas
let ocupadas = true;
for (let i=0;i<butacasCine.length;i++){
    if(butacasCine[i][1]=='libre'){
        ocupadas = false;
        console.log(ocupadas);
    }else{
        ocupadas = true;
        console.log(ocupadas);
    }
    
}

//recorrido con dos for filas

libres = false;
let asientos = 0;
for(let fila=0; fila<butacasCine.length;fila++){
    //libres= false;
    for(let col=0;col<butacasCine[fila].length; col++){
        if(butacasCine[fila][col]=='libre'){
            asientos += 1;
        }

    }
        console.log("En la fila " +fila+" : "+ asientos+ " Hay butacas libres");
        asientos = 0;
}

//recorrido con dos for columnas

asientos = 0;
for( col=0; col<butacasCine[0].length;col++){  //Leemos el largo de la columna
    for( fila=0;fila<butacasCine.length; fila++){
        //console.log(butacasCine[fila][col]);
        if(butacasCine[fila][col]=='libre'){
            //console.log(butacasCine[fila][col]);
            asientos += 1;
            //console.log(asientos);
        }

    }
        console.log("En la columna " +col+" : "+ asientos+ " Hay butacas libres");
        asientos = 0;
}