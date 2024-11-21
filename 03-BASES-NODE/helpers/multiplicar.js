const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        
        
        let salida = '';

        for (let i = 0; i <= hasta; i++){
            salida += `${base} * ${i} = ${base * i}\n`;
            
        }
        
        if(listar){
            console.log('*******************');
            console.log(`Tabla de multiplicar del ${ base }`);
            console.log('*******************');
            console.log(salida); 
        }
        

        fs.writeFileSync(`./03-BASES-NODE/salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}