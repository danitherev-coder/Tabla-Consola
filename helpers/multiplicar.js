const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida = salida + (`${base} x ${i} = ${base * i}\n`);
            consola = consola + (`${base} ${'x'.red} ${i} ${'='.blue} ${base * i}\n`);
        }
        if (listar) {
            console.log('===================='.green);
            console.log('   Tabla del: ',colors.blue(base) );
            console.log('===================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`);
    } catch (err) {
        console.log(err);
    }


}

module.exports = {
    crearArchivo
}