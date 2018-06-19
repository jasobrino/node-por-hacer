const fs = require('fs');


let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion, //equivalente a descripcion: descripcion
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(item => item.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }


}

const borrar = (descripcion) => {
    cargarDB();

    //utilizando filter nos devuelve los elementos que coinciden con la condición
    // let nuevoListado = listadoPorHacer.filter(tarea => {
    //     return tarea.descripcion !== descripcion
    // });
    // formato corto
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
    /*  //utilizando findIndex
        let index = listadoPorHacer.findIndex(item => item.descripcion === descripcion);

        if (index >= 0) {
            listadoPorHacer.splice(index, 1);
            guardarDB();
            return true;
        } else {
            return false;
        } */
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}