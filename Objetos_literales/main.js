let tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    saludar: function(){
        return '!Hola¡ Me llamo ' + this.nombre;
    }
};

console.log(tenista.saludar());