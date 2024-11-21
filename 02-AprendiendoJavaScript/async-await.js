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

const getEmpleado = ( id ) => {

    //e representa un empleado
    //primer argumento del callback es el error
    
    
    //la promesa internamente ejecuta un callback y es el argumento
    //el resolve es algo que se va a llamar cuando todo funciona bien y este es el callback
    //el reject es algo que se va a llamar cuando algo falla 
    /*const promesa = new Promise( (resolve, reject) => {

        const empleado = empleados.find(e => e.id == id)?.nombre;

        /*if(empleado){
            resolve(empleado);
        } else {
            reject(`El empleado con el id ${ id } no existe`);
        }*/
    //});
    
    /*if normal
    return promesa;*/

    //estrucde promesa con el operador ternario
    return new Promise( (resolve, reject) => {

      const empleado = empleados.find(e => e.id == id)?.nombre;
      
      //usar el operador ternario
      (empleado) 
      ? resolve(empleado) 
      : reject(`El empleado con el id ${ id } no existe`);
    });
}

const getSalario = ( id ) => {

  return new Promise( (resolve, reject) =>{

    const salario = salarios.find(s => s.id == id)?.salario;

    (salario)
    ? resolve(salario)
    : reject(`El salario con el id ${ id } no existe`)
  });

}


const getInfoUsuario = async( id ) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El empleado: ${ empleado } tiene un salario de: ${ salario }`;
    } catch (error) {
        return error
    }

}

getInfoUsuario( id )
    .then( msg => {
        console.log('Todo salio bien');
        console.log(msg)})
    .catch(err => {
        console.log('Todo salio mal');
        console.log(err)});
