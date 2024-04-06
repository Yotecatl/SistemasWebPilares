document.addEventListener("DOMContentLoaded", () =>{
    const baseDeDatos = [
        {
            id: 1,
            nombre: "Patata",
            precio: 1,
            image: "img/patata.jpg", 
        },
        {
            id: 2,
            nombre: "Cebolla",
            precio: 1.2,
            image: "img/cebolla.jpg", 
        },
        {
            id: 3,
            nombre: "Calabacin",
            precio: 2.1,
            image: "img/calabacin.jpg", 
        },
        {
            id: 4,
            nombre: "Fresas",
            precio: 0.6,
            image: "img/fresas.jpg", 
        },
    ];

    let carrito =[];
    const divisa = "$";
    const items = document.querySelector("#items");
    const carrito2 = document.querySelector("#carrito");
    const total = document.querySelector("#total");
    const botonVaciar = document.querySelector("#boton-vaciar");

    function renderizarProducto(){
        baseDeDatos.forEach((info) => {
            //Estructura
            const miNodo = document.createElement("div");
            miNodo.classList.add("card", "col-sm-4");

            //Body
            const miNodoCardBody = document.createElement("div");
            miNodoCardBody.classList.add("card-body");

            //Titulo
            const miNodoTitle = document.createElement("h5");
            miNodoTitle.classList.add("card-title");
            miNodoTitle.textContent = info.nombre;

            //Imagen
            const miNodoImagen = document.createElement("img");
            miNodoImagen.classList.add("img-fluid");
            miNodoImagen.setAttribute("src", info.image);

            //Precio
            const miNodoPrecio = document.createElement("p");
            miNodoTitle.classList.add("img-fluid");
            miNodoTitle.textContent = `${info.precio}${divisa}`;

            //Boton
            const miNodoBoton = document.createElement("button");
            miNodoBoton.classList.add("btn", "btn-primary");
            miNodoBoton.textContent = "+";
            miNodoBoton.setAttribute("marcador", info.id);
            miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);

            //Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            items.appendChild(miNodo);
        });
    }

    //Añadir un producto al carrito
    function anyadirProductoAlCarrito(e){
        //añadir el nodo a nuestro carrito
        carrito.push(e.target.getAttribute("marcador"));
        //Actualizamos carrito
        renderizarCarrito();
    }

    function renderizarCarrito(){
        //Limpiar el html
        carrito2.textContent="";
        //Quitamos los duplicados
        const carritoSinDuplicados =[...new Set(carrito)];
        //Generamos los nodos a partir del carrito
        carritoSinDuplicados.forEach((item) => {
            //Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                //Coincide los ID 
                return itemBaseDatos.id === parseInt(item);
        });
        //cuenta el numero de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            //Concide los id incrementa el contador, en caso contrario lo mantengo
            return itemId === item ? (total +=1): total;
        }, 0);
        //Creamos el nodo del item del carrito
        const miNodo = document.createElement("li");
        miNodo.classList.add("list-group-item", "text-right", "mx-2");
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
         //boton de borrar
         const miBoton = document.createElement(`button`);
         miBoton.classList.add("btn", "btn-danger", "mx-5");
         miBoton.textContent = "X";
         miBoton.style.marginLeft = "1rem";
         miBoton.dataset.item = item;
         miBoton.addEventListener("click", borrarItemCarrito);
         //Mezclar nodos
         miNodo.appendChild(miBoton);
         carrito2.appendChild(miNodo);
     });
     // renderizamos el precio total en el html
     total.textContent = calcularTotal();
    }

    //Evento para borrar un elemnto del carrito
    function borrarItemCarrito(evento){
        //obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        //Borramos todos los productos.
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        //se vuelve a renderizar
        renderizarCarrito();
    }

    //Calcular el precio total en cuenta los productos repetidos
    function calcularTotal(){
        //Recorremos el array del carrito
        return carrito.reduce((total,item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    // Vaciar carrito y render
    function vaciarCarrito(){
        //limpiamos los productos guardados
        carrito =[];
        //Render
        renderizarCarrito();
    }

    //Eventos
    botonVaciar.addEventListener("click", vaciarCarrito);

    //Inicio
    renderizarProducto();
    renderizarCarrito();



});