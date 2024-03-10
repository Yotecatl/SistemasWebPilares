//creamos el objeto
alumno = {
    nombre: "",
    folio: 0,
    calificaciones: [],  //definir una lista
    // metodos
    introCal: function(cal){
        this.calificaciones.push(cal);
        //console.log(this.calificaciones)
    },

    promCal: function(calEva){
        let promedio = 0;
        for(let i=0; i<alumno.calificaciones.length; i++){
             promedio = promedio + this.calificaciones[i];
             //console.log(promedio);
        }
        promedio = promedio/alumno.calificaciones.length;
        if(promedio>=calEva){
            return this.nombre + " esta aprobado tiene un promedio: " +promedio;
        }
        else{
            return this.nombre + " esta reprobado tiene un promedio: " +promedio;
        }
    }

}
alumno.nombre = "Pedro"
alumno.folio = 23456

console.log("Nombre: " +alumno.nombre);
console.log("Folio: " +alumno.folio);
alumno.introCal(2)
alumno.introCal(3)
alumno.introCal(5)
//console.log(alumno.calificaciones);
console.log("Calificaciones: " +alumno.calificaciones);
console.log(alumno.promCal(6));