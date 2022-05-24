const {readFileSync, writeFileSync} = require("fs");
const tareas = JSON.parse(readFileSync("../baseDeDatos/tareas.json", "utf-8"));//// convierte el formato JSON a formato de js para poder trabajar con el.
let fecha = new Date();
module.exports = {
    escribir: function(tareas){
        writeFileSync("../baseDeDatos/tareas.json", JSON.stringify(tareas, null, 4));//escribe el nuevo formato js y lo convierte a json, para guardarlo en la base de datos.
    },
    actId: function(tareas){ //modifica las id empezando desde 1, y las siguienes ++.
        for(x = 0; x < tareas.length; x++){
            x === 0? tareas[x].id = 1 : tareas[x].id = x + 1;}
    },
    fechaDeCreacion: function(){
        return `${fecha.getDate()}/${fecha.getMonth() +1}/${fecha.getFullYear()} [${fecha.getHours()}:${fecha.getMinutes()}]`
    }
}