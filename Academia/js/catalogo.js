let producto = document.getElementById("productos");
let cantidadInventario = document.getElementById("Existencia");


const btn = document.querySelector("button");

btn.addEventListener("click", function (evt){
    evt.preventDefault();
    let inventario ={
        nombre: producto.value,
        existencia: parseInt(cantidadInventario.value),
    };

    catalogo.push(inventario); 
   
    console.log(inventario);
    console.log(catalogo);
});

let catalogo = [
    { 
      nombre: "Cofre", 
      existencia: 10,
    },
    { nombre: "Barril", 
    existencia: 5,
    },
  ];
  
  function AumentarExistencia(cantidad, nombre){
      for (let i=0; i < catalogo.length; i++){
          if (nombre == catalogo[i].nombre){
              return catalogo[i].existencia += cantidad;        
          }
      }
  }
  
  function DecrementarExistencia(cantidad, nombre){
      for (let i=0; i < catalogo.length; i++){
          if (nombre == catalogo[i].nombre){
              let temp = 0; 
              temp = catalogo[i].existencia - cantidad;
              
              if (temp < 0){
                  return"No hay sufisiente en existencia"
              }
              else{
                  catalogo[i].existencia -= cantidad;
                  return catalogo[i].existencia;    
              }
                       
          }
      }
  }
  
  function MostarExistencia(nombre){
      for (let i=0; i < catalogo.length; i++){
          if (nombre == catalogo[i].nombre){
              //console.log(nombre);
              return "En existencia: " + catalogo[i].existencia;        
          }
      }
  }
  
  function MostrarInventario(){
    for (let i=0; i < catalogo.length; i++) {
    let producto = catalogo[i];
    console.log("Nombre: " + producto.nombre);
    console.log("Existencia: " + producto.existencia);
    }
  }
  //console.log(AumentarExistencia(25, "Cofre"));
  //console.log(MostarExistencia("Barril"));
  //console.log(DecrementarExistencia(5, "Cofre"));
  //console.log(DecrementarExistencia(45, "Cofre"));
  //console.log(MostarExistencia("Cofre"));


