const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra elemento por hacer', {
        descripcion
    })
    .command('listar', 'obtiene el listado', {
        completado: {
            type: 'boolean',
            alias: 'c',
            desc: 'Indicador de estado filtro completado',
            default: undefined
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}