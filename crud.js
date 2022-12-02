
const formAñadir = document.getElementById("formAñadir")
formAñadir.addEventListener('submit', (e)=>{
    e.preventDefault()
    const password = document.getElementById("password")
    const confirmpassword = document.getElementById("confirmpassword")
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    if (name.value=='' &&
    password.value=='' &&
    confirmpassword.value=='' &&
    email.value=='') {
        alert('Completa todos los campos')
        return false
    }
    if (password.value.length<8) {
        alert('La contraseña debe tener como minimo 8 caracteres')
        return false
    }
    if (password.value!=confirmpassword.value) {
        alert('La contraseña no es igual a la confirmacion')
        return false
    }
    formAñadir.submit()
})
const formAnotacion = document.getElementById("formAnotacion")
formAnotacion.addEventListener('submit', (e)=>{
    e.preventDefault()
    /*const password = document.getElementById("password")
    const confirmpassword = document.getElementById("confirmpassword")
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    if (name.value=='' &&
    password.value=='' &&
    confirmpassword.value=='' &&
    email.value=='') {
        alert('Completa todos los campos')
        return false
    }
    if (password.value.length<8) {
        alert('La contraseña debe tener como minimo 8 caracteres')
        return false
    }
    if (password.value!=confirmpassword.value) {
        alert('La contraseña no es igual a la confirmacion')
        return false
    }*/
    formAnotacion.submit()
})
/*const añadir = document.getElementById("añadirUsuario");

let usuario={
    email:document.getElementById("email"),
    password:document.getElementById("password")
}
//const confirmar = document.getElementById("confirmar");

async function peticionAñadir() {
    
    console.log(usuario)
   fetch(`http://localhost:8000/api/login/`,{
    method:'POST',
    body:JSON.stringify(usuario)})
    .then(response=>response.json())
    .then(correcto=>{console.log(correcto)});
    console.log(usuario)
}

// eslint-disable-next-line no-unused-vars
añadir.addEventListener("click", ()=>peticionAñadir());*/
