const veriMadre = require("../veriMadre/veriMadre");
const {argv} = require("process");

// node app comandos//Ingrese para ver comandos.
let accion = argv[2] && argv[2].toLocaleLowerCase();// condicional reducido, si argv2 esta, cambia caracteres a minus.
let titulo = argv[3];
let estado = argv[4] && argv[4].toLocaleLowerCase();
let id = +argv[5];

veriMadre(accion, titulo, estado, id);