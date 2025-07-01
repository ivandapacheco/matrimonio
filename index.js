// JS PARA CONTADOR (opcional)
  
// const targetDate = new Date("2025-11-17T16:00:00").getTime();
// setInterval(() => {
//   const now = new Date().getTime();
//   const distance = targetDate - now;
//   const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const segundos = Math.floor((distance % (1000 * 60)) / 1000);
//   document.getElementById("dias").innerText = dias.toString().padStart(2, '0');
//   document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
//   document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
//   document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');
// }, 1000);



fetch('data.json')
  .then(res => res.json())
  .then(data => {

    // Insertar nombres
    document.querySelector("h1").textContent = data.nombres;

    // Insertar lugar
    document.querySelector("#lugar").textContent = data.lugar;

    // Insertar mensaje
    document.querySelector("#mensaje").textContent = data.mensaje;

    // Insertar fecha
    const targetDate = new Date(data.fechaEvento).getTime();
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
  });

