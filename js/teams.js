const Equipos = [
    {
    equipo: "Real Madrid",
    gep: "3/1/1",
    capitan: "Karim Benzema",
    estrella: "Karim Benzema",
},
{
    equipo: "Barcelona",
    gep: "2/1/2",
    capitan: "Gerard Piqué",
    estrella: "Robert Lewandowski",
},

{
    equipo: "Liverpool",
    gep: "1/2/2",
    capitan: "Fabinho",
    estrella: "Mohamed Salah",

},
{
    equipo: "Atletico Madrid",
    gep: "2/2/1",
    capitan: "Savic",
    estrella: "Griezmann",

}
];
alert("La cantidad de equipos cargados es de: "+Equipos.length)

function buscarEquipo (total, equipo) {
    const equipoEncontrado = total.find ((equi) => equi.equipo == equipo);
    return equipoEncontrado;

}
let equipoBuscado = prompt("Ingresa el nombre del equipo")
const encontrado=buscarEquipo (Equipos,equipoBuscado)
if (encontrado!=undefined) {
console.log (encontrado)
}
else {
    alert("Equipo no encontrado.")
}
