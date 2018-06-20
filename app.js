//en por-hacer.js se encuentran los diferentes métodos de los comandos
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado(argv.completado);

        for (let tarea of listado) {
            console.log('=========== Por Hacer ============='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==================================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`actualizado: ${ actualizado }`);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`borrado: ${ borrado} `);
        break;

    default:
        console.log('comando no reconocido');
}