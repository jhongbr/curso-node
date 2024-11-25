require('colors');
const readline = require('readline');



const mostrarMenu = () => {


    return new Promise(resolve => {
        console.clear();
        
    
        console.log(`${'1.'} crear una tarea`);
        console.log(`${'2.'} listar tareas`);
        console.log(`${'3.'} listar tareas completadas`);
        console.log(`${'4.'} listar tareas pendientes`);
        console.log(`${'5.'} comletar tareas`);
        console.log(`${'6.'} borrar tareas`);
        console.log(`${'0.'} salir \n`);
    
        //como recibir informacion del usuario
    
        const read = readline.createInterface({
            input: process.stdin,
            output: process.stdout
    
        });
    
        read.question('Seleccione una opccion:', (opt) =>{
            read.close();
            resolve(opt)
            
        })
    })
}


const pausa = () => {

    return new Promise(resolve  => {
    
        const read = readline.createInterface({

            input: process.stdin,
            output: process.stdout
    
        });
    
        read.question('\nPresione enter para continuar', (opt) => {
            read.close();
            resolve();
        })
    })


    //inquirer sirve para crear aplicacion interactivas en consola

}
module.exports = {
    mostrarMenu,
    pausa
}