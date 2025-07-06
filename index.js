// ===============================
// 🎵 Configuración de audio
// ===============================
const audio = new Audio('./audio/cancion.mp3');
audio.loop = true;

const btnMusic = document.getElementById('toggleMusic');
const iconMusic = document.getElementById('musicIcon');
let isPlaying = false;

btnMusic.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    iconMusic.textContent = '⏸️';
    iconMusic.classList.add('spin');
    btnMusic.querySelector('span:last-child').textContent = 'Pausar música';
    isPlaying = true;
  } else {
    audio.pause();
    iconMusic.textContent = '▶️';
    iconMusic.classList.remove('spin');
    btnMusic.querySelector('span:last-child').textContent = 'Reproducir música';
    isPlaying = false;
  }
});


// ===============================
// 📦 Cargar datos desde data.json
// ===============================
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Insertar datos en el DOM
    insertarDatos(data);
    iniciarContador(data.fechaEvento);
  })
  .catch(err => {
    console.error("Error cargando data.json:", err);
  });


// ===============================
// 📝 Insertar datos al HTML
// ===============================
function insertarDatos(data) {
  document.querySelector("h1").textContent = data.nombres || "Pareja";
  document.getElementById("lugar").textContent = data.lugar || "Lugar del evento";
  document.getElementById("mensaje").textContent = data.mensaje || "";
}


// ===============================
// ⏳ Contador regresivo
// ===============================
function iniciarContador(fechaEvento) {
  const targetDate = new Date(fechaEvento).getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias.toString().padStart(2, '0');
    document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
    document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');
  }, 1000);
}







// fetch('data.json')
//   .then(res => res.json())
//   .then(data => {

//     // Insertar nombres
//     document.querySelector("h1").textContent = data.nombres;

//     // Insertar lugar
//     document.querySelector("#lugar").textContent = data.lugar;

//     // Insertar mensaje
//     document.querySelector("#mensaje").textContent = data.mensaje;

//     // Insertar fecha
//     const targetDate = new Date(data.fechaEvento).getTime();
//     setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const segundos = Math.floor((distance % (1000 * 60)) / 1000);

//       document.getElementById("dias").innerText = dias.toString().padStart(2, '0');
//       document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
//       document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
//       document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');
//     }, 1000);
// });



// // Crear el audio
// const audio = new Audio('./audio/cancion.mp3');
// audio.loop = true;

// const btn = document.getElementById('toggleMusic');
// const icon = document.getElementById('musicIcon');
// let isPlaying = false;

// btn.addEventListener('click', () => {
//   if (!isPlaying) {
//     audio.play();
//     icon.textContent = '⏸️';
//     icon.classList.add('spin'); // 🔄 Añade animación al reproducir
//     btn.querySelector('span:last-child').textContent = 'Pausar música';
//     isPlaying = true;
//   } else {
//     audio.pause();
//     icon.textContent = '▶️';
//     icon.classList.remove('spin'); // 🛑 Quita animación al pausar
//     btn.querySelector('span:last-child').textContent = 'Reproducir música';
//     isPlaying = false;
//   }
// });



