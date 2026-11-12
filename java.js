// ==========================================
// RESTAURANT PRO - SISTEMA DIGITAL
// ==========================================

// LISTA DE PLATILLOS

const platillos = [

    // ENTRADAS
    { id: 1, nombre: "Ensalada fresca", categoria: "Entradas", precio: 85, descripcion: "Ensalada con vegetales frescos.", imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
    { id: 2, nombre: "Papas a la francesa", categoria: "Entradas", precio: 60, descripcion: "Papas crujientes con salsa.", imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877" },
    { id: 3, nombre: "Alitas BBQ", categoria: "Entradas", precio: 110, descripcion: "Alitas de pollo con salsa BBQ.", imagen: "https://images.unsplash.com/photo-1527477396000-e27163b481c2" },
    { id: 4, nombre: "Nachos con queso", categoria: "Entradas", precio: 95, descripcion: "Totopos con queso y jalapeños.", imagen: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d" },
    { id: 5, nombre: "Dedos de queso", categoria: "Entradas", precio: 90, descripcion: "Queso empanizado y crujiente.", imagen: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7" },
    { id: 6, nombre: "Aros de cebolla", categoria: "Entradas", precio: 70, descripcion: "Aros de cebolla empanizados.", imagen: "https://images.unsplash.com/photo-1639024471283-03518883512d" },
    { id: 7, nombre: "Guacamole con totopos", categoria: "Entradas", precio: 80, descripcion: "Guacamole fresco acompañado de totopos.", imagen: "https://images.unsplash.com/photo-1601050690597-df0568f70950" },
    { id: 8, nombre: "Champiñones al ajillo", categoria: "Entradas", precio: 95, descripcion: "Champiñones salteados con ajo y especias.", imagen: "https://images.unsplash.com/photo-1504545102780-26774c1bb073" },

    // PLATOS FUERTES
    { id: 9, nombre: "Hamburguesa especial", categoria: "Platos fuertes", precio: 120, descripcion: "Hamburguesa con carne, queso y vegetales.", imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
    { id: 10, nombre: "Pizza italiana", categoria: "Platos fuertes", precio: 180, descripcion: "Pizza con queso, tomate y pepperoni.", imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
    { id: 11, nombre: "Pasta Alfredo", categoria: "Platos fuertes", precio: 145, descripcion: "Pasta cremosa con queso parmesano.", imagen: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a" },
    { id: 12, nombre: "Tacos de carne asada", categoria: "Platos fuertes", precio: 130, descripcion: "Tacos con carne asada, cebolla y cilantro.", imagen: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b" },
    { id: 13, nombre: "Pechuga a la plancha", categoria: "Platos fuertes", precio: 155, descripcion: "Pechuga de pollo con verduras.", imagen: "https://images.unsplash.com/photo-1532550907401-a500c9a57435" },
    { id: 14, nombre: "Costillas BBQ", categoria: "Platos fuertes", precio: 210, descripcion: "Costillas de cerdo bañadas en salsa BBQ.", imagen: "https://images.unsplash.com/photo-1544025162-d76694265947" },
    { id: 15, nombre: "Filete de pescado", categoria: "Platos fuertes", precio: 175, descripcion: "Pescado acompañado de vegetales.", imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2" },
    { id: 16, nombre: "Bistec ranchero", categoria: "Platos fuertes", precio: 190, descripcion: "Bistec de res con salsa ranchera.", imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d" },

    // POSTRES
    { id: 17, nombre: "Pastel de chocolate", categoria: "Postres", precio: 75, descripcion: "Pastel de chocolate con crema.", imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
    { id: 18, nombre: "Cheesecake", categoria: "Postres", precio: 85, descripcion: "Pay de queso con cubierta de fresa.", imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad" },
    { id: 19, nombre: "Brownie con helado", categoria: "Postres", precio: 90, descripcion: "Brownie de chocolate con helado.", imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
    { id: 20, nombre: "Flan napolitano", categoria: "Postres", precio: 65, descripcion: "Flan casero con caramelo.", imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307" },
    { id: 21, nombre: "Helado de vainilla", categoria: "Postres", precio: 55, descripcion: "Helado cremoso de vainilla.", imagen: "https://images.unsplash.com/photo-1563805042-7684c019e1cb" },
    { id: 22, nombre: "Crepas de fresa", categoria: "Postres", precio: 80, descripcion: "Crepas dulces con fresas y chocolate.", imagen: "https://images.unsplash.com/photo-1519676867240-f03562e64548" },
    { id: 23, nombre: "Churros con azúcar", categoria: "Postres", precio: 60, descripcion: "Churros crujientes con azúcar y canela.", imagen: "https://images.unsplash.com/photo-1624371414361-e670edf4898d" },
    { id: 24, nombre: "Pay de limón", categoria: "Postres", precio: 70, descripcion: "Pay cremoso con sabor a limón.", imagen: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13" },

    // BEBIDAS
    { id: 25, nombre: "Limonada natural", categoria: "Bebidas", precio: 40, descripcion: "Limonada preparada al momento.", imagen: "https://th.bing.com/th/id/OIP.SNvLBC7S1ccO01fJ4D8ONwHaEk?w=302&h=186&c=7&r=0&o=7&pid=1.7&rm=3" },
    { id: 26, nombre: "Naranjada", categoria: "Bebidas", precio: 45, descripcion: "Bebida refrescante de naranja natural.", imagen: "https://images.unsplash.com/photo-1600271886742-f049cd451bba" },
    { id: 27, nombre: "Malteada de chocolate", categoria: "Bebidas", precio: 75, descripcion: "Malteada cremosa de chocolate.", imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699" },
    { id: 28, nombre: "Café americano", categoria: "Bebidas", precio: 35, descripcion: "Café caliente recién preparado.", imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { id: 29, nombre: "Agua de horchata", categoria: "Bebidas", precio: 35, descripcion: "Agua fresca de arroz con canela.", imagen: "https://images.unsplash.com/photo-1544145945-f90425340c7e" },
    { id: 30, nombre: "Jugo de fresa", categoria: "Bebidas", precio: 50, descripcion: "Jugo natural preparado con fresas.", imagen: "https://images.unsplash.com/photo-1553530666-ba11a7da3888" },
    { id: 31, nombre: "Licuado de plátano", categoria: "Bebidas", precio: 45, descripcion: "Licuado de plátano con leche.", imagen: "https://th.bing.com/th/id/OIP.HZh7VSCsVrBbIM6of1_pSwHaEO?w=288&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
    { id: 32, nombre: "Agua de jamaica", categoria: "Bebidas", precio: 35, descripcion: "Agua fresca de jamaica natural.", imagen: "https://images.unsplash.com/photo-1546173159-315724a31696" }
];

// ==========================================
// VARIABLES GENERALES
// ==========================================

let carrito = [];
let favoritos = [];
let pedidosRegistrados = [];
let reservaciones = [];

let contadorPedidos = 1;
let categoriaActual = "Todos";

// ==========================================
// CAMBIAR DE SECCION
// ==========================================

function mostrarVista(id) {

    document.querySelectorAll(".vista").forEach(vista => {
        vista.classList.remove("activa");
    });

    const seccion = document.getElementById(id);

    if (!seccion) return;

    seccion.classList.add("activa");

    if (id === "menu") {
        mostrarMenu();
    }

    if (id === "pedidos") {
        mostrarPedido();
    }

    if (id === "favoritos") {
        mostrarFavoritos();
    }

    if (id === "perfil") {
        actualizarEstadisticas();
        cambiarRol();
    }
}

// ==========================================
// MOSTRAR MENU
// ==========================================

function mostrarMenu(lista = platillos) {

    const contenedor = document.getElementById("listaPlatillos");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    const resultados = lista.filter(platillo => {
        return categoriaActual === "Todos" ||
            platillo.categoria === categoriaActual;
    });

    if (resultados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron platillos.</p>";
        return;
    }

    resultados.forEach(platillo => {

        contenedor.innerHTML += `
            <div class="producto">

                <img src="${platillo.imagen}"
                    alt="${platillo.nombre}"
                    onerror="this.src='https://placehold.co/400x250?text=Platillo'">

                <div class="producto-info">

                    <h3>${platillo.nombre}</h3>

                    <p>${platillo.descripcion}</p>

                    <div class="precio">
                        $${platillo.precio.toFixed(2)}
                    </div>

                    <button onclick="agregarPedido(${platillo.id})">
                        Agregar al pedido
                    </button>

                    <button onclick="agregarFavorito(${platillo.id})">
                        ⭐ Favorito
                    </button>

                </div>
            </div>
        `;
    });
}

// ==========================================
// FILTRAR CATEGORIAS
// ==========================================

function filtrar(categoria) {

    categoriaActual = categoria;

    document.getElementById("buscarPlatillo").value = "";

    mostrarMenu();
}

// ==========================================
// BUSCAR PLATILLOS
// ==========================================

function buscarPlatillos() {

    const texto = document.getElementById("buscarPlatillo")
        .value.toLowerCase().trim();

    const resultados = platillos.filter(platillo => {

        const coincideCategoria =
            categoriaActual === "Todos" ||
            platillo.categoria === categoriaActual;

        const coincideTexto =
            platillo.nombre.toLowerCase().includes(texto) ||
            platillo.descripcion.toLowerCase().includes(texto);

        return coincideCategoria && coincideTexto;
    });

    mostrarMenu(resultados);
}

// ==========================================
// AGREGAR PEDIDOS
// ==========================================

function agregarPedido(id) {

    const platillo = platillos.find(p => p.id === id);

    if (!platillo) return;

    const existente = carrito.find(p => p.id === id);

    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({
            ...platillo,
            cantidad: 1
        });

    }

    mostrarPedido();

    alert("Platillo agregado al pedido.");
}

// ==========================================
// MOSTRAR PEDIDO
// ==========================================

function mostrarPedido() {

    const contenedor = document.getElementById("listaPedido");
    const totalElemento = document.getElementById("totalPedido");

    if (!contenedor || !totalElemento) return;

    contenedor.innerHTML = "";

    if (carrito.length === 0) {

        contenedor.textContent = "Tu pedido está vacío.";
        totalElemento.textContent = "0.00";
        return;
    }

    let total = 0;

    carrito.forEach(producto => {

        const subtotal = producto.precio * producto.cantidad;

        total += subtotal;

        contenedor.innerHTML += `
            <div class="pedido-item">

                <span>
                    ${producto.nombre}
                    x ${producto.cantidad}
                    - $${subtotal.toFixed(2)}
                </span>

                <button onclick="eliminarPedido(${producto.id})">
                    Eliminar
                </button>

            </div>
        `;
    });

    totalElemento.textContent = total.toFixed(2);
}

// ==========================================
// ELIMINAR PRODUCTO DEL PEDIDO
// ==========================================

function eliminarPedido(id) {

    carrito = carrito.filter(producto => producto.id !== id);

    mostrarPedido();
}

// ==========================================
// VACIAR PEDIDO
// ==========================================

function vaciarPedido() {

    carrito = [];

    mostrarPedido();

    document.getElementById("mensajePedido").textContent =
        "El pedido fue vaciado.";
}

// ==========================================
// CONFIRMAR PEDIDO
// ==========================================

function enviarPedido() {

    if (carrito.length === 0) {

        document.getElementById("mensajePedido").textContent =
            "Agrega un platillo antes de confirmar.";

        return;
    }

    const total = carrito.reduce((suma, producto) => {
        return suma + producto.precio * producto.cantidad;
    }, 0);

    const nuevoPedido = {

        id: contadorPedidos++,

        fecha: new Date().toLocaleString(),

        productos: carrito.map(producto => ({
            ...producto
        })),

        total: total,

        estado: "Pendiente"
    };

    pedidosRegistrados.push(nuevoPedido);

    carrito = [];

    mostrarPedido();

    document.getElementById("mensajePedido").textContent =
        "¡Pedido registrado correctamente! El chef ya puede verlo.";

    actualizarPanelesRoles();
    actualizarEstadisticas();
}

// ==========================================
// AGREGAR FAVORITOS
// ==========================================

function agregarFavorito(id) {

    const platillo = platillos.find(p => p.id === id);

    if (!platillo) return;

    if (!favoritos.some(p => p.id === id)) {

        favoritos.push(platillo);

        alert("Agregado a favoritos.");

    } else {

        alert("Este platillo ya está en favoritos.");
    }

    mostrarFavoritos();
}

// ==========================================
// MOSTRAR FAVORITOS
// ==========================================

function mostrarFavoritos() {

    const contenedor = document.getElementById("listaFavoritos");

    if (!contenedor) return;

    if (favoritos.length === 0) {

        contenedor.innerHTML = "No tienes favoritos todavía.";
        return;
    }

    contenedor.innerHTML = "";

    favoritos.forEach(platillo => {

        contenedor.innerHTML += `
            <div class="producto">

                <img src="${platillo.imagen}"
                    alt="${platillo.nombre}"
                    onerror="this.src='https://placehold.co/400x250?text=Platillo'">

                <div class="producto-info">

                    <h3>${platillo.nombre}</h3>

                    <p>$${platillo.precio.toFixed(2)}</p>

                    <button onclick="agregarPedido(${platillo.id})">
                        Pedir
                    </button>

                    <button onclick="eliminarFavorito(${platillo.id})">
                        Quitar favorito
                    </button>

                </div>
            </div>
        `;
    });
}

// ==========================================
// ELIMINAR FAVORITOS
// ==========================================

function eliminarFavorito(id) {

    favoritos = favoritos.filter(p => p.id !== id);

    mostrarFavoritos();
}

// ==========================================
// RESERVACIONES
// ==========================================

document.getElementById("formReserva")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const datos = new FormData(this);

        const nombre = datos.get("nombre");
        const fecha = datos.get("fecha");
        const hora = datos.get("hora");
        const personas = Number(datos.get("personas"));
        const comentarios = datos.get("comentarios");

        if (personas < 1 || personas > 20) {

            document.getElementById("mensajeReserva").textContent =
                "El número de personas debe estar entre 1 y 20.";

            return;
        }

        const fechaHora = new Date(`${fecha}T${hora}`);
        const ahora = new Date();

        if (isNaN(fechaHora.getTime()) || fechaHora <= ahora) {

            document.getElementById("mensajeReserva").textContent =
                "Selecciona una fecha y hora futuras.";

            return;
        }

        const nuevaReserva = {
            nombre,
            fecha,
            hora,
            personas,
            comentarios
        };

        reservaciones.push(nuevaReserva);

        document.getElementById("mensajeReserva").textContent =
            `¡Gracias ${nombre}! Tu reservación fue registrada para el ${fecha} a las ${hora}.`;

        this.reset();

        actualizarEstadisticas();
        actualizarPanelesRoles();
    });

// ==========================================
// SISTEMA DE ROLES
// ==========================================

function cambiarRol() {

    const selector = document.getElementById("rolUsuario");

    if (!selector) return;

    const rol = selector.value;

    const paneles = [
        "panelCliente",
        "panelChef",
        "panelGerente",
        "panelSupervisor"
    ];

    paneles.forEach(id => {

        const panel = document.getElementById(id);

        if (panel) {
            panel.style.display = "none";
        }
    });

    const panelSeleccionado = {

        cliente: "panelCliente",
        chef: "panelChef",
        gerente: "panelGerente",
        supervisor: "panelSupervisor"
    };

    const panel = document.getElementById(panelSeleccionado[rol]);

    if (panel) {
        panel.style.display = "block";
    }

    const permisos = {

        cliente:
            "Puedes consultar el menú, hacer pedidos y reservar.",

        chef:
            "Puedes consultar los pedidos y actualizar su preparación.",

        gerente:
            "Puedes consultar los pedidos y las estadísticas del restaurante.",

        supervisor:
            "Puedes supervisar los pedidos y la actividad del restaurante."
    };

    document.getElementById("permisosRol").textContent =
        permisos[rol] || "Bienvenido al sistema.";

    actualizarPanelesRoles();
}

// ==========================================
// MOSTRAR PEDIDOS AL CHEF
// ==========================================

function mostrarPedidosChef() {

    const contenedor = document.getElementById("listaPedidosChef");

    if (!contenedor) return;

    const pendientes = pedidosRegistrados.filter(
        pedido => pedido.estado !== "Listo"
    );

    if (pendientes.length === 0) {

        contenedor.innerHTML =
            "<p>¡No hay pedidos pendientes de preparación!</p>";

        return;
    }

    contenedor.innerHTML = "";

    pendientes.forEach(pedido => {

        let productosHTML = "";

        pedido.productos.forEach(producto => {

            productosHTML += `
                <p>
                    🍽️ ${producto.nombre}
                    <strong>x ${producto.cantidad}</strong>
                </p>
            `;
        });

        contenedor.innerHTML += `

            <div class="pedido-admin">

                <h3>Pedido #${pedido.id}</h3>

                <p>Fecha: ${pedido.fecha}</p>

                <p>
                    Estado:
                    <strong>${pedido.estado}</strong>
                </p>

                <div>
                    ${productosHTML}
                </div>

                <h4>
                    Total: $${pedido.total.toFixed(2)}
                </h4>

                ${
                    pedido.estado === "Pendiente"

                    ? `
                        <button class="btn-principal"
                            onclick="cambiarEstadoPedido(${pedido.id}, 'En preparación')">
                            Comenzar preparación
                        </button>
                    `

                    : `
                        <button class="btn-principal"
                            onclick="cambiarEstadoPedido(${pedido.id}, 'Listo')">
                            Marcar como listo
                        </button>
                    `
                }

            </div>
        `;
    });
}

// ==========================================
// CAMBIAR ESTADO DEL PEDIDO
// ==========================================

function cambiarEstadoPedido(id, nuevoEstado) {

    const pedido = pedidosRegistrados.find(
        pedido => pedido.id === id
    );

    if (!pedido) return;

    pedido.estado = nuevoEstado;

    actualizarPanelesRoles();
    actualizarEstadisticas();
}

// ==========================================
// PANEL DEL GERENTE
// ==========================================

function mostrarPedidosGerente() {

    const contenedor = document.getElementById("listaPedidosGerente");

    if (!contenedor) return;

    if (pedidosRegistrados.length === 0) {

        contenedor.innerHTML =
            "<p>Todavía no hay pedidos registrados.</p>";

        return;
    }

    contenedor.innerHTML = "";

    pedidosRegistrados.forEach(pedido => {

        contenedor.innerHTML += `

            <div class="pedido-admin">

                <h3>Pedido #${pedido.id}</h3>

                <p>Fecha: ${pedido.fecha}</p>

                <p>
                    Estado:
                    <strong>${pedido.estado}</strong>
                </p>

                <p>
                    Productos: ${pedido.productos.length}
                </p>

                <h4>
                    Total: $${pedido.total.toFixed(2)}
                </h4>

            </div>
        `;
    });
}

// ==========================================
// PANEL DEL SUPERVISOR
// ==========================================

function mostrarActividadSupervisor() {

    const contenedor = document.getElementById("actividadSupervisor");

    if (!contenedor) return;

    if (pedidosRegistrados.length === 0) {

        contenedor.innerHTML =
            "<p>No hay actividad registrada.</p>";

        return;
    }

    contenedor.innerHTML = "";

    pedidosRegistrados.forEach(pedido => {

        contenedor.innerHTML += `

            <div class="pedido-admin">

                <h3>Pedido #${pedido.id}</h3>

                <p>Fecha: ${pedido.fecha}</p>

                <p>
                    Estado actual: ${pedido.estado}
                </p>

                <p>
                    Total: $${pedido.total.toFixed(2)}
                </p>

            </div>
        `;
    });
}

// ==========================================
// ACTUALIZAR PANELES Y ESTADISTICAS
// ==========================================

function actualizarPanelesRoles() {

    const pendientes = pedidosRegistrados.filter(
        p => p.estado === "Pendiente"
    ).length;

    const preparacion = pedidosRegistrados.filter(
        p => p.estado === "En preparación"
    ).length;

    const listos = pedidosRegistrados.filter(
        p => p.estado === "Listo"
    ).length;

    const actualizarTexto = (id, valor) => {

        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.textContent = valor;
        }
    };

    actualizarTexto("pedidosPendientes", pendientes);
    actualizarTexto("pedidosPreparacion", preparacion);
    actualizarTexto("pedidosListos", listos);

    actualizarTexto("statPedidos", pedidosRegistrados.length);
    actualizarTexto("statReservas", reservaciones.length);

    actualizarTexto("gerenteTotal", pedidosRegistrados.length);
    actualizarTexto("gerenteReservas", reservaciones.length);
    actualizarTexto("gerentePlatillos", platillos.length);

    actualizarTexto("superTotal", pedidosRegistrados.length);
    actualizarTexto("superPendientes", pendientes + preparacion);
    actualizarTexto("superListos", listos);

    mostrarPedidosChef();
    mostrarPedidosGerente();
    mostrarActividadSupervisor();
}

// ==========================================
// ACTUALIZAR ESTADISTICAS GENERALES
// ==========================================

function actualizarEstadisticas() {

    const actualizarTexto = (id, valor) => {

        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.textContent = valor;
        }
    };

    actualizarTexto("statPlatillos", platillos.length);
    actualizarTexto("statPedidos", pedidosRegistrados.length);
    actualizarTexto("statReservas", reservaciones.length);

    actualizarPanelesRoles();
}

// ==========================================
// INICIAR SISTEMA
// ==========================================

document.addEventListener("DOMContentLoaded", function() {

    mostrarMenu();

    mostrarPedido();

    mostrarFavoritos();

    actualizarEstadisticas();

    cambiarRol();

    actualizarPanelesRoles();

});