class producto{
    constructor(nombre, existencia){
        this.nombre = nombre;
        this.existencia= existencia;
    }
    AumetarExistencia(cantidad){
        return this.existencia += cantidad;
    }
    Mostrar(){
        return this.existencia;
    }
}

let producto1 = new producto("Cofre", 10);

console.log(producto1)
producto1.AumetarExistencia(20);
console.log(producto1.Mostrar());
