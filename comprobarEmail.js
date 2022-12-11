const formAnotacion = document.getElementById("formAnotacion");
const boton = document.getElementById("submiranotacion");
const email = document.getElementById("emailAnotacion").value;
function comprobarEmail() {
  alert(email);
  fetch("https://localhost:8080/api/emails", {
    method: "get",
    headers: {
        "Content-Type": "text/plain"
    }
}).then(function(response) {
    return response.json();
  });
}
function hacerPeticion () {
  fetch("https://localhost:8080/api/emails", {
    method: "get"
}).then(function(response) {
    return response.json();
  });
}

function comprobarEmail() {
  var json= hacerPeticion()
  console.log(json)
}
formAnotacion.addEventListener("submit", (e) => {
  e.preventDefault();
  boton.addEventListener('click',comprobarEmail())
  //comprobarEmail();
  /*for (let index = 0; index < json.data.length; index++) {
    if (email == json.data[index]) {
      alert("El email existe");
    }
  }*/
  //formAnotacion.submit();
});
