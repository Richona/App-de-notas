const comandos = [
    {accion: "listar",
    sintaxis: "node app listar",
    },
    {accion: "agregar",
    sintaxis: "node app agregar tituloDeLaNota estadoDeLaNota",
    },
    {accion: "eliminar",
    sintaxis: "node app eliminar numId",
    },
    {accion: "actualizar",
    sintaxis: "node app actualizar nuevoTitulo nuevoEstado numId",
    },
    {accion: "filtrar",
    sintaxis: "node app filtrar estadoBuscado",
    },
]

module.exports = {
    mostrarComandos: function(){
    comandos.forEach(element => {
       console.log(`Accion: ${element.accion}`);
       console.log(`Sintaxis: ${element.sintaxis}`);
       console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    });
    return "Estos son los comandos, disfrutelos!"
    },
}