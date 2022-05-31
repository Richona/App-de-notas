const {readFileSync} = require("fs");
const tareas = JSON.parse(readFileSync("../baseDeDatos/tareas.json", "utf-8"));// convierte el formato JSON a formato de js para poder trabajar con el.
const {listar,agregar,eliminar,actualizar,filtrar} = require("../funciones/funcionesDeTareas");
const {fechaDeCreacion} = require("../funciones/funcionesExternas")
const {mostrarComandos} = require("./comandos")

module.exports = function veriMadre(accion, titulo, estado, id) {
    switch (estado) {//comprueba si el estado es el solicitado.
        case "terminada":
        case "en progreso":
        case "pendiente":
        case undefined:
            break;
        default:
            return console.log("Ingresar un estado correcto, por favor, estos son: terminada, en progreso, y pendiente");
    }
    
    switch (accion){//comprueba si la accion es la correcta.
        case "listar":
            listar();
            break;
        case "agregar":
            let tareaNueva = {
                id: tareas[tareas.length - 1].id +1,
                titulo,
                estado,
                fecha: fechaDeCreacion(),
            };
            agregar(tareaNueva,setTimeout(listar, 1000));//setTimeout hace esperar para ejecutar la funcion, en este caso 1seg (1000 miliseg)
            break;
        case "eliminar":
            eliminar(titulo,setTimeout(listar, 1000));//listar setTimeout como callback, y listar como callback del callback.
            break;
        case "actualizar":
            tareas.findIndex(obj => obj.id === id) === -1 ? console.log("Id no encontrada, ingrese una correcta por favor") : actualizar(titulo, estado, id,setTimeout(listar, 1000));//comprueba si la id es la correcta.
            break;
        case "filtrar":
            filtrar(titulo, tareas);
            break;
        case "comandos":
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            mostrarComandos()
            break;
        case undefined:
            console.log("**Atención** - Tienes que pasar una acción.");
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            mostrarComandos();
            break;
        default:
            console.log("No entiendo qué quieres hacer. Ingresa una accion, por favor.");
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            mostrarComandos();
            break;
    }
}