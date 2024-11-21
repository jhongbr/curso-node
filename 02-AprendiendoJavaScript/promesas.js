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
    : reject(`El slario con el id ${ id } no existe`)
  });

}

/*getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err))*/

/*getEmpleado ( id )
  .then( empleado => {
    getSalario( id )
      .then (salario => {
        console.log('el empleado:', empleado)
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err)) esto es dificil de entender*/

let nombre;

getEmpleado( id )
 .then( empleado => {
   nombre = empleado;
   return getSalario( id )
  })
 .then( salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
 .catch(err => console.log(err))