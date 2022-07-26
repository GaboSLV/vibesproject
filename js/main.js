let balance;
let monto;
let solucion;
let apuesta;
let salir;
balance = 50000;
do {
  monto = parseInt(prompt("Ingresa la cantidad que deseas apostar"));
  balance = balance - monto;
  alert("Tu balance actual es: " + balance);
  solucion = Math.random();
  console.log(solucion);
  if (solucion >= 0.5) {
balance = balance + (monto*1.9);
    alert("¡Felicidades! Ganaste, tu balance ahora es: " + balance);
  } else {
    alert("Lo lamentamos perdiste, tu balance actual es: " + balance);
  }
  salir = prompt(
    "Usa n para salir / b para consultar tu balance / Cualquier otra tecla para seguir apostando."
  );
  if (salir=="b") {
    alert("Tu balance actual es: " +balance);
  }
  if (balance <=0) {
    alert ("Lo lamentamos, no tienes balance para realizar esta operación. Recarga tu balance.")
  }
} while (salir != "n");
