const veriMadre = require("../veriMadre/veriMadre");
const {argv} = require("process");

let accion = argv[2];// node app comandos//Ingrese para ver comandos.
let titulo = argv[3];
let estado = argv[4];
let id = +argv[5];

veriMadre(accion, titulo, estado, id);