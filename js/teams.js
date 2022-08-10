
const equipos= [
    {
    team: "Real Madrid", gep: "3/1/1", capitan: "Karim Benzema", estrella: "Karim Benzema",
},
{
    team: "Barcelona", gep: "2/1/2", capitan: "Gerard Piqué", estrella: "Robert Lewandowski",
},

{
    team: "Liverpool", gep: "1/2/2", capitan: "Fabinho", estrella: "Mohamed Salah",

},
{
    team: "Atletico Madrid", gep: "2/2/1", capitan: "Savic", estrella: "Griezmann",

}
];
alert("La cantidad de equipos cargados es de: "+equipos.length);
let buscado = prompt ("Nombre del equipo");
let busqueda = equipos.find ((equipo)=>equipo.team== buscado);
if (busqueda!=undefined) {

    let contenido = document.createElement("div");
    contenido.innerHTML = `  
    <div class=equipoList><p>Equipo buscado: ${busqueda.team}</p>
    <p>Ganados, empatados y perdidos: ${busqueda.gep}</p>
    <p>Capitán: ${busqueda.capitan}</p>
    <p>Estrella: ${busqueda.estrella}</p>
    </div>`;
    document.body.appendChild(contenido);
    }
else {
    contenido = document.createElement("div");
    contenido.innerHTML = `  
    <div class=equipoList><p>Equipo no encontrado</p></div>
    `;
    document.body.appendChild(contenido);
   
}
