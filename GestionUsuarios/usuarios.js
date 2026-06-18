let dom = document;

const btnCrearUsuario = dom.getElementById("btnCrearUsuario");
const btnLimpiar = dom.getElementById("btnLimpiar");
const cuerpoTabla = dom.getElementById("cuerpoTabla");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let modoEdicion = false;
let idEditando = null;

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

    if (modoEdicion) {

        for (let usuario of usuarios) {
            if (usuario.identificacion === idEditando) {

                usuario.identificacion = identificacion;
                usuario.nombre = nombre;
                usuario.email = email;
                usuario.telefono = telefono;
                usuario.cargo = cargo;
                usuario.password = password;

                break;
            }
        }

        modoEdicion = false;
        idEditando = null;

    } else {

        for (let usuario of usuarios) {
            if (usuario.identificacion === identificacion) {
                alert("Ya existe un usuario con esa identificación");
                return;
            }
        }

        const usuario = {
            identificacion,
            nombre,
            email,
            telefono,
            cargo,
            password
        };

        usuarios.push(usuario);
    }

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    mostrarUsuarios();

    dom.querySelector("form").reset();
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

function cargarFormulario(usuario) {
    dom.getElementById("identificacion").value = usuario.identificacion;
    dom.getElementById("nombre").value = usuario.nombre;
    dom.getElementById("email").value = usuario.email;
    dom.getElementById("telefono").value = usuario.telefono;
    dom.getElementById("cargo").value = usuario.cargo;
    dom.getElementById("password").value = usuario.password;
}

cuerpoTabla.addEventListener("click", (e) => {

    if (e.target.classList.contains("eliminar")) {

        const fila = e.target.closest("tr");
        const identificacion = fila.children[0].textContent;

        usuarios = usuarios.filter(
            usuario => usuario.identificacion !== identificacion
        );

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        mostrarUsuarios();
    }

    if (e.target.classList.contains("editar")) {

        const fila = e.target.closest("tr");
        const identificacion = fila.children[0].textContent;

        const usuario = usuarios.find(
            u => u.identificacion === identificacion
        );

        cargarFormulario(usuario);

        modoEdicion = true;
        idEditando = identificacion;
    }
});