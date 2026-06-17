let dom = document;

const btnCrearUsuario = dom.getElementById("btnCrearUsuario");
const btnLimpiar = dom.getElementById("btnLimpiar");
const cuerpoTabla = dom.getElementById("cuerpoTabla");

// Cargar usuarios guardados o crear arreglo vacío
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Mostrar usuarios al abrir la página
mostrarUsuarios();

btnCrearUsuario.addEventListener("click", crearUsuario);

function crearUsuario(e) {

    e.preventDefault();

    const identificacion = dom.getElementById("identificacion").value;
    const nombre = dom.getElementById("nombre").value;
    const email = dom.getElementById("email").value;
    const telefono = dom.getElementById("telefono").value;
    const cargo = dom.getElementById("cargo").value;
    const password = dom.getElementById("password").value;

    if (
        identificacion == "" ||
        nombre == "" ||
        email == "" ||
        telefono == "" ||
        password == ""
    ) {
        alert("Se deben llenar todos los campos");
        return;
    }

    // Verificar si ya existe el ID
    for (let usuario of usuarios) {
        if (usuario.identificacion === identificacion) {
            alert("Ya existe un usuario con esa identificación");
            return;
        }
    }

    // Crear objeto usuario
    const usuario = {
        identificacion,
        nombre,
        email,
        telefono,
        cargo,
        password
    };

    // Agregar al arreglo
    usuarios.push(usuario);

    // Guardar en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Actualizar tabla
    mostrarUsuarios();
}

function mostrarUsuarios() {

    cuerpoTabla.innerHTML = "";

    for (let usuario of usuarios) {

        cuerpoTabla.innerHTML += `
        <tr>
            <td>${usuario.identificacion}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
            <td>${usuario.cargo}</td>

            <td>
                <button class="accion editar">
                    Editar
                </button>

                <button class="accion eliminar">
                    Eliminar
                </button>
            </td>
        </tr>`;
    }
}

cuerpoTabla.addEventListener("click", (e) => {

    if (e.target.classList.contains("eliminar")) {

        const fila = e.target.closest("tr");
        const identificacion = fila.children[0].textContent;

        // Eliminar del arreglo
        usuarios = usuarios.filter(
            usuario => usuario.identificacion !== identificacion
        );

        // Actualizar localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Actualizar tabla
        mostrarUsuarios();
    }

});