// 🔥 AQUI VAS A PEGAR TUS LINKS DE DRIVE

const imagenes = [
  // EJEMPLOS (REEMPLAZA CON LOS TUYOS)
  "https://drive.google.com/uc?export=view&id=ID1",
  "https://drive.google.com/uc?export=view&id=ID2"
];

// 🔥 CLASIFICADOR AUTOMÁTICO
imagenes.forEach(img => {

  let contenedor;

  if(img.toLowerCase().includes("mascota")){
    contenedor = document.getElementById("mascotas");
  }
  else if(img.toLowerCase().includes("diseno")){
    contenedor = document.getElementById("disenos");
  }
  else{
    contenedor = document.getElementById("peluches");
  }

  let div = document.createElement("div");
  div.classList.add("card","fade");

  div.innerHTML = `<img src="${img}">`;

  contenedor.appendChild(div);
});