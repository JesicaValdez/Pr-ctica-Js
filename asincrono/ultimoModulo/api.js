/*Url de la API*/
const url = "https://pokeapi.com/api/v2/pokemon/pikachu";

/* Llamado a la url*/
fetch(url)
    //pasamos la respuesta a json
    .then((res) => res.json())
    //imprimir la respuesta ya en json
    .then((dato) => console.log(dato));