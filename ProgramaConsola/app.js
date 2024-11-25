require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    Pausa,
    leerInput,
    ListadoTareasBorrar,
    confirmar,
    MostrarLIstadoCheck
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas')


console.clear();


const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        //establecer las tareas
        tareas.cargarTareasFromArray(tareasDB)
    }

    do {

        //imprimir el menu
        opt = await inquirerMenu();



        switch (opt) {
            case '1':
                //crear una tarea
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarTareasComletasPendientes(true);
                break;
            case '4':
                tareas.listarTareasComletasPendientes(false);
                break;
            case '5':
               const ids = await MostrarLIstadoCheck(tareas.listadoArr);
               tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await ListadoTareasBorrar(tareas.listadoArr);
                if( id !== 0){
                    if(confirm){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada'.green);
                    }
                }
                const confirm = await confirmar('¿Estas seguro?');
                break;
        }

        guardarDB(tareas.listadoArr);

        //funcion para que el usuario espere
        await Pausa();


    } while (opt !== '0');
    console.log('Adios');
}

main();
