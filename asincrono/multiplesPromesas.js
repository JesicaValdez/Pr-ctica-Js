//  Promesas Encadenadas

let promesaA= new Promise((resolve, reject)=> setTimeout(resolve, 500, 'Hola soy la promesa A'))
let promesaB= new Promise((resolve, reject)=> setTimeout(resolve, 500, 'Hola soy la promesa B'))
let promesaC= Promise.reject();

//promesaA.then(function(){
//    promesaB.then(function(){
//        console.log('Finalizado')
//    })
//})

Promise.all([promesaA,promesaB,promesaC]).then(function(e){
    console.log('Completado',e)
}).catch(function(err){
    console.log(err, 'no funciono')
})