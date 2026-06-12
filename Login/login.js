const dom = document;

const email = dom.getElementById("emailInput");
const password = dom.getElementById("passwordInput");

const btnIngresar = dom.getElementById("formBtn");

let user = {
    email: "brayanstevenriano@gmail.com",
    password: "12345678"
}

btnIngresar.addEventListener("click", () => {


    validarInputs();
    
})



//Validar si los input cumple con las condiciones

function validarInputs(){

    const regEmail=/^[A-Za-z0-9]+@(outlook|gmail|hotmail).com$/

    const email = dom.getElementById("emailInput");
    const password = dom.getElementById("passwordInput");

    
    if(!regEmail.test(email.value)){
        
    }else{
        
    }
    

    if(password.value.length<8){
       password.classList.add("error")
       password.classList.remove("correcto")

    //    password.addEventListener("input", validarInputs) 
    }else{
        password.classList.remove("error");
        password.classList.add("correcto") 
    }
    
const mensaje =
    password.value.length < 8 || password.value.length > 20
        ? "Longitud inválida"
        : !/[a-z]/.test(password)
        ? "Debe contener una minúscula"
        : !/[A-Z]/.test(password)
        ? "Debe contener una mayúscula"
        : !/[0-9]/.test(password)
        ? "Debe contener un número"
        : !/[^A-Za-z0-9]/.test(password)
        ? "Debe contener un símbolo"
        : "Contraseña válida";
    alert(mensaje);
}     