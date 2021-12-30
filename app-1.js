//const { option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors'); // o simplemente require('colors')
const argv = require('./config/yargs');



console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
















// console.log(process.argv);
//console.log(argv);
// console.log('base: yargs',argv.b);

// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

// crearArchivo(argv.b, argv.l)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));

//const base = 3;


