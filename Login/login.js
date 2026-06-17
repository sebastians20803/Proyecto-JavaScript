const dom = document;

const email = dom.getElementById("emailInput");
const password = dom.getElementById("passwordInput");

const btnIngresar = dom.getElementById("formBtn");

let user = {
    email: "brayanstevenriano@gmail.com",
    password: "12345Aa@"
}

btnIngresar.addEventListener("click", () => {

    validarInputs();
    
})

//Validar si los input cumple con las condiciones

function validarInputs(){

    const regEmail=/^[A-Za-z0-9]+@(outlook|gmail|hotmail).com$/

    const email = dom.getElementById("emailInput");
    const password = dom.getElementById("passwordInput");
 

    if(password.value.length<8){
       password.classList.add("error")
       password.classList.remove("correcto")

    //    password.addEventListener("input", validarInputs) 
    }else{
        password.classList.remove("error");
        password.classList.add("correcto") 
    }
    
const mensaje =
    password.value.length < 8
        ? "Longitud inválida"
        : !/[a-z]/.test(password.value)
        ? "Debe contener una minúscula"
        : !/[A-Z]/.test(password.value)
        ? "Debe contener una mayúscula"
        : !/[0-9]/.test(password.value)
        ? "Debe contener un número"
        : !/[^A-Za-z0-9]/.test(password.value)
        ? "Debe contener un símbolo"
        : password.value !== user.password
        ? "contraseña incorrecta"
        : "contraseña valida";
    alert(mensaje);
}     