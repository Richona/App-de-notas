const {readFileSync} = require("fs");
let tareas = JSON.parse(readFileSync("../baseDeDatos/tareas.json", "utf-8"));//// convierte el formato JSON a formato de js para poder trabajar con el.
const {escribir,actId,fechaDeCreacion} = require("./funcionesExternas");

const listar= function(){
    tareas.forEach(tareas => {//forEach recorre el array uno por uno.
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`(${tareas.id})Titulo: ${tareas.titulo} ---- Estado: ${tareas.estado} ---- Fecha: ${tareas.fecha}`);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
})};
const agregar= function(tareaNueva){
    tareas.push({id :tareas[tareas.length - 1].id +1, ...tareaNueva});
    console.log("Tarea agregada con exito.");
    escribir(tareas);
    setTimeout(listar, 1000);
};
const eliminar= function(id){
    tareas.splice(id -1, 1)//splice elimina el objeto con el parametro de la id - 1, ya que en array empieza desde 0.
    actId(tareas);
    escribir(tareas);
    setTimeout(listar, 1000);
};
const actualizar= function(titulo, estado, id){
    tareas[tareas.findIndex(obj => obj.id === id)].titulo = titulo;//findIndex busca un elemento en tareas.id igual a la id ingresada. Una vez hecho, modifica los valores de la tarea correspondiente.
    tareas[tareas.findIndex(obj => obj.id === id)].estado = estado;
    tareas[tareas.findIndex(obj => obj.id === id)].fecha = fechaDeCreacion();
    escribir(tareas);
    setTimeout(listar, 1000);
};
const filtrar= function(estado,array){
    let filtrados = array.filter(array => array.estado === estado);//filter busca el estado en el array, los dos pasados como parametros, devuelve otro array con los datos buscados, sino array vacio, sin modificar el anterior.
    filtrados.forEach(tareas => {//forEach recorre el array uno por uno.
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`(${tareas.id})Titulo: ${tareas.titulo} ---- Estado: ${tareas.estado} ---- Fecha: ${tareas.fecha}`);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    })
};

module.exports = {
    listar,
    agregar,
    eliminar,
    actualizar,
    filtrar
};