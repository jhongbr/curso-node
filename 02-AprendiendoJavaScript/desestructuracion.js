
//creacion de un string con los valores de un objeto y concatenarlos

const persona1 = {
    nombre: 'Superman',
    edad: 23,
    poder: 'Super Fuerza',
    getNombre(){
        return `${ this.nombre } ${ this.edad } ${ this.poder}`;
    }
}

//console.log(persona1.getNombre());

// desestructuracion, mas corta para no escribir tanto codigo

const { nombre, edad, poder, ciudad = 'Colombia'} /*propiedades que quieremos extraer*/ =  persona1 /*objetos al que se le van a extraer*/;

console.log(nombre, edad, poder, ciudad); // colocamos la propiedades que se van a ver en consola

/*function imprimeHeroe( heroe ){

    const { nombre, edad, poder, ciudad } = heroe;
    console.log(nombre, edad, poder, ciudad);
}

imprimeHeroe(persona1);*/


function imprimeHeroe( { nombre, edad, poder, ciudad = 'Colombia'} ){

    nombre = 'Juan';
    console.log(nombre, edad, poder, ciudad);
}

//imprimeHeroe(persona1);

const hereos =  ['Batman', 'Superman', 'Flash'];

const [ , , h3] = hereos;

console.log( h3 );