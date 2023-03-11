//console.log('Hola Node JS')
/*
const request = require("request");

request('https://wikipedia.com', function(){
    console.log('ya accedi a Wikipedia')
        request('https://google.com', function(){
        console.log('ya accedi a Google')
        })
})

*/

const promesa = require('request-promise')

console.log('soy el primero')

promesa('http://wikipedia.com').then(function(html){
    console.log('ya accedi a wikipedia')
}).catch(function(err){
    console.log(err)
})

console.log ('Soy el ultimo')

/* ESTADOS DE LA PROMESA:
1. fullfiled: completo
2. rejected: se completo pero tiene un error
3. pending: pendiente
4. setled: finalizada*/