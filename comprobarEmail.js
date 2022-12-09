const formAnotacion = document.getElementById("formAnotacion");
async function comprobarEmail() {
  const email=  document.getElementById("emailAnotacion").value;
  alert(email)
  const miFeth = await fetch("https://localhost:8080/api/emails");
  const json = await miFeth.json();
  for (let index = 0; index < json.data.length; index++) {
    if (email==json.data[index]) {
        alert('El email existe')
    }
    
  }
}
formAnotacion.addEventListener("submit", (e) => {
  e.preventDefault();
  comprobarEmail()
  //formAnotacion.submit();
});
