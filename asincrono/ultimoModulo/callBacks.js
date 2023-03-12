//JavaScript asincronico: Call Backs son funciones que pueden pasarse como parametro
//los Call Backs son la posibilidad de pasarle una funcion que va ser llamada despues de ejecutarse cierta operación
function pedirDato(a, b, tiempo, operacion){
    /*funcion que recibe como primer parametro otra funcion y como segundo parametro el tiempo que debe esperar para realizar la operación*/
    setTimeout(() => {
        operacion(a, b);
    }, tiempo);
    }

pedirDato(1,2, 500, (x, y) => {
    console.log(x + y, "Suma");
});

pedirDato(1,2, 1000, (x,y) =>{
    console.log(x * y, "Multiplicación");
});

pedirDato(1,2, 800, (x,y) =>{
    console.log(x / y, "División");
});

pedirDato(1,2, 1200, (x, y)  =>{
    console.log(x - y, "Resta");
});

/*PROMESAS - La utilizamos para llamar por ejemplo a una API*/
/*Ejemplo real*/

const dato = [
    {id: 1, nombre: "Juan Perez", edad: 18 },
    {id: 2, nombre: "Lucas Palacios", edad: 20 },
    {id: 3, nombre: "Pablo Ledesma", edad: 22 },
];

const solicitarDato = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(dato);
        }, 500);
    });
};

solicitarDato().then((datos)=> console.log(datos));