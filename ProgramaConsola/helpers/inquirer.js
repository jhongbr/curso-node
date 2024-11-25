const inquirer = require('inquirer');
const Tarea = require('../models/tarea');
require('colors');

//utilizando el inquirer
const preguntas = [{
    type: 'list',
    name: 'option',
    message: 'Que desea hacer?',
    choices: [
        {
            value: '1',
            name: `${'1'.green}. Crear tarea`
        },
        {
            value: '2',
            name: `${'2'.green}. Listar tarea`
        },
        {
            value: '3',
            name: `${'3'.green}. Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4'.green}. Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5'.green}. Completar tareas`
        },
        {
            value: '6',
            name: `${'6'.green}. Borrar tareas`
        },
        {
            value: '0',
            name: `${'0'.green}. Salir`
        }
        
    ],
}];



const inquirerMenu = async() => {

    //console.clear();
    console.log('*******************'.red);
    console.log(' Menu '.white);
    console.log('*******************'.red);
    
    const {option} = await inquirer.default.prompt(preguntas);//se coloco con el default para que no de error

    return option;
}

const Pausa = async () =>{

    const question = [
        {
            type: 'input',
            name: 'salida',
            message: `Prsione ${'ENTER'.green} para continuar`,
        }
    ]

    console.log('\n')
    await inquirer.default.prompt(question);
}

const leerInput = async ( message ) => {

    const question1 = [{

        type: 'input',
        name: 'desc',
        message,
        validate( value ){
            if(value.length === 0){
                return 'Por favor ingrese un valor';
            }
            return true;
        }
    }];


    const { desc } = await inquirer.default.prompt(question1);
    return desc;
}

const ListadoTareasBorrar = async ( tareas = []) =>{

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}`.green;

        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [{
        type: 'list',
        name: 'ids',
        message: 'Borrar',
        choices
    }]

    const { id } = await inquirer.default.prompt(preguntas);
    return id;
}

const confirmar = async ( message ) => {

    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const { ok } = await inquirer.default.prompt(question);
    return ok;
}


const MostrarLIstadoCheck = async ( tareas = []) =>{

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}`.green;

        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    })

    const preguntas = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Seleccione',
        choices
    }]

    const { ids } = await inquirer.default.prompt(preguntas);
    return ids;
}

module.exports = {
    inquirerMenu,
    Pausa,
    leerInput,
    ListadoTareasBorrar,
    confirmar,
    MostrarLIstadoCheck
}