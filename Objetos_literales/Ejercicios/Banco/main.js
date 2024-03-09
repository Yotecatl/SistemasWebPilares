//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!

  let banco = {
    clientes: arrayCuentas,
    consultarCliente : function(nombre){
        for (let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i].titularCuenta == nombre){
                /*return this.clientes[i].titularCuenta;   solo regresa el nombre*/
                return this.clientes[i];           /*Regresa el objet*/     
            }
          } 
          return "Usuario " +nombre+ " No encontrado";
    },
    deposito: function(nombre, dep){
        let usuario = this.consultarCliente("Ansel Ardley");
        console.log(usuario) /* Ver que trae el objeto*/
        let salfin = usuario.saldoEnPesos = usuario.saldoEnPesos + dep;
        return "Usuario: " +nombre+ "  Deposito: " +dep+ "   Saldo final: "+salfin;
    },
    retiro: function(nombre, ret){
        let usuario = this.consultarCliente("Ansel Ardley");
        let saldoUsuario = usuario.saldoEnPesos
        if (saldoUsuario > ret){
            let salfin = usuario.saldoEnPesos = usuario.saldoEnPesos - ret;
            return "Usuario: " +nombre+ "  Retiro: " +ret+ "   Saldo final: "+salfin;
        }
        else return "Saldo insuficiente";
    }
  };

  let clienteEncontrado = banco.consultarCliente("Ramon Campos");
  console.log(clienteEncontrado);
  let depCliente = banco.deposito("Ansel Ardley", 1000);
  console.log(depCliente);
  depCliente = banco.retiro("Ansel Ardley", 500);
  console.log(depCliente);

