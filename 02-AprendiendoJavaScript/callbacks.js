//un callback es una funcion que se va a ejecutar en otro momento

//funtion flecha
/*setTimeout( () => {
    console.log('Primer Timeout');
}, 3000);*/

const getUsuarioById = (id, callback ) => {

    const usuario =  {
        id,
        nombre: 'Fernando'
    };

    setTimeout( () => {
        callback( usuario );
    }, 1500);
}
//se llama la funtion
getUsuarioById(10, ( usuario ) => {
    console.log(usuario);
});


