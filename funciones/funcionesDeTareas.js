const {readFileSync} = require("fs");
const tareas = JSON.parse(readFileSync("../baseDeDatos/tareas.json", "utf-8"));//// convierte el formato JSON a formato de js para poder trabajar con el.
const {escribir,actId,fechaDeCreacion} = require("./funcionesExternas");

module.exports = {
    listar: function(){
    tareas.forEach(tareas => {//forEach recorre el array uno por uno.
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`(${tareas.id})Titulo: ${tareas.titulo} ---- Estado: ${tareas.estado} ---- Fecha: ${tareas.fecha}`);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    })},
    agregar: function(tareaNueva){
        tareas.push(tareaNueva);
        console.log("Tarea agregada con exito.");
        escribir(tareas)
    },
    eliminar: function(id){
        tareas.splice(id -1, 1)//splice elimina el objeto con el parametro de la id - 1, ya que en array empieza desde 0.
        actId(tareas);
        escribir(tareas);
    },
    actualizar: function(titulo, estado, id){
        tareas[tareas.findIndex(obj => obj.id === id)].titulo = titulo;//findIndex busca un elemento en tareas.id igual a la id ingresada. Una vez hecho, modifica los valores de la tarea correspondiente.
        tareas[tareas.findIndex(obj => obj.id === id)].estado = estado;
        tareas[tareas.findIndex(obj => obj.id === id)].fecha = fechaDeCreacion();
        escribir(tareas);
    },
    filtrar(estado,array){
        let filtrados = array.filter(array => array.estado === estado);//filter busca el estado en el array, los dos pasados como parametros, devuelve otro array con los datos buscados, sino array vacio, sin modificar el anterior.
        filtrados.forEach(tareas => {//forEach recorre el array uno por uno.
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log(`(${tareas.id})Titulo: ${tareas.titulo} ---- Estado: ${tareas.estado} ---- Fecha: ${tareas.fecha}`);
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        })
    }
}