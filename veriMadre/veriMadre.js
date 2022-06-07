const {listar,agregar,eliminar,actualizar,filtrar} = require("../funciones/funcionesDeTareas");
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
                titulo,
                estado,
            };
            agregar(tareaNueva);
            break;
        case "eliminar":
            eliminar(titulo);
            break;
        case "actualizar":
            actualizar(titulo, estado, id);
            break;
        case "filtrar":
            filtrar(titulo);
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