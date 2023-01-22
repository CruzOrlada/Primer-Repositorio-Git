
document.getElementById("educación3").addEventListener("click", function(){
    console.log("capturamos el evento click y mostramos la información sobre EDUCACIÓN")
    document.getElementById("educación").innerHTML = "Lic. en programación, año 9999.";
});
document.getElementById("educación3").addEventListener("click", function(){
    document.getElementById("educación2").innerHTML = "Graduado con honores y con el mejor promedio de mi camada.";
});

document.getElementById("explab3").addEventListener("click", function(){
    console.log("capturamos el evento click y mostramos la información sobre EXPERIENCIA LABORAL")
    document.getElementById("explab").innerHTML = "Asistente de Bill gates en la empresa Bill gates. Seguimiento de agendas y logística de la empresa. Procurarando por el buen estado y control de todo tipo de documentos y archivos.";
});
document.getElementById("explab3").addEventListener("click", function(){
    document.getElementById("explab2").innerHTML = " Asistente de Steve Jobs en la empresa Steve Jobs. Recepción de clientes y llamadas. Organizador de reuniones para la empresa.";
});

document.getElementById("idioma_curso").addEventListener("click", function(){
    console.log("capturamos el evento click y mostramos la información sobre IDIOMAS/CURSOS")
    document.getElementById("idioma").innerHTML = "Nivel oral y escrito avanzado.";
});
document.getElementById("idioma_curso").addEventListener("click", function(){
    document.getElementById("curso").innerHTML = "Nivel avanzado. Instituto de redes sociales Genial.";
});

document.getElementById("contacto4").addEventListener("click", function(){
    console.log("capturamos el evento click y mostramos la información sobre CONTACTO")
    document.getElementById("contacto").innerHTML = "Celular: (00)1234-5678";
});
document.getElementById("contacto4").addEventListener("click", function(){
    document.getElementById("contacto2").innerHTML = "E-mail: genial@genial.com";
});
document.getElementById("contacto4").addEventListener("click", function(){
    document.getElementById("contacto3").innerHTML = "Dirección: Calle cualquierlugar 9999, Cualquier Lugar.";
});

const collection = document.getElementsByClassName("marcar");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "brown";
}
