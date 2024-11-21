
const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const id = 3;


const getEmpleado = ( (id, callback) => {

    //e representa un empleado
    //primer argumento del callback es el error
    const empleado = empleados.find(e => e.id == id)?.nombre;
    
    if(empleado){
        callback (null, empleado);
    }else{
        callback (`Empleado con id ${ id } no existe`);
    }
})

const getSalario = ( id, callback) => {

    const salario = salarios.find( s => s.id == id)?.salario; //el interrogante es para hacer pregunta si lo anterior existe entonces se ejecuta lo que esta despues

    if(salario){
        callback(null, salario);
    } else {
        callback(`El salario con el id ${ id } no existe`);
    }
}

getEmpleado( id, ( err, empleado) => {

    if(err){
        console.log("ERROR")
        return console.log(err);
    }

    //concatenar los dos argumentos
    getSalario( id, (err, salario) => {

    if(err){
        console.log("ERROR")
        return console.log(err);
    }

        console.log('El empleado:', empleado, 'tiene unsalario de:', salario)
    })
}) //para ejecutar el callback debo colocarlo como argumento en la funtion flecha




/*getSalario( 10, (err, salario) => {

    if(err){
        console.log("ERROR")
        return console.log(err);
    }

    console.log("Salario existe")
    console.log(salario);

})*/
