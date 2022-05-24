const {readFileSync} = require("fs");
const tareas = JSON.parse(readFileSync("../baseDeDatos/tareas.json", "utf-8"));// convierte el formato JSON a formato de js para poder trabajar con el.
const acciones = require("../funciones/funcionesDeTareas");
const funcionExt = require("../funciones/funcionesExternas")
const comandos = require("./comandos")

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
            acciones.listar();
            break;
        case "agregar":
            let tareaNueva = {
                id: tareas[tareas.length - 1].id +1,
                titulo,
                estado,
                fecha: funcionExt.fechaDeCreacion(),
            };
            acciones.agregar(tareaNueva);
            break;
        case "eliminar":
            acciones.eliminar(titulo);
            break;
        case "actualizar":
            tareas.findIndex(obj => obj.id === id) === -1 ? console.log("Id no encontrada, ingrese una correcta por favor") : acciones.actualizar(titulo, estado, id);//comprueba si la id es la correcta.
            break;
        case "comandos":
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            comandos()
            break;
        case undefined:
            console.log("**Atención** - Tienes que pasar una acción.");
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            comandos();
            break;
        default:
            console.log("No entiendo qué quieres hacer. Ingresa una accion, por favor.");
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            comandos();
            break;
    }
}