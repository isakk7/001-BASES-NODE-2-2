int = numero;
let binario = numero.toString(2);
console.log(binario(10))


const argv = require('yargs')
    .command('listar', 'imprime en pantalla la tabla de multiplicar', {
        Numero:{
            demand: true,
            alias: 'b'
        }
  
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        imprimirNumero:{
            demand: true,
            alias: 'b'
        }
      

    })
    .help()
    .argv;
const yargs = require('yargs');
const Convertir = require('./multiplicacion/multiplicacion');

let comando = argv._[0];
let Numero = argv.numero;
let imprimirNumero = argv.imprimirNumero;

switch(comando) {
    case `listar`:
    Convertir.listarTabla(Numero, imprimirNumero)
    .then ()
    .catch(error => console.log(`Ocurrio un error ${error}`));
    break;
    
    case `crear`:
    
    Convertir
        .crearArchivo(Numero, imprimirNumero)
    .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))
    .catch(error => console.log(`Ocurrio un error ${error}`));
   
    break;
    default:
    console.log(`Comando no reconocido`);
}

//console.log('La base insertada fue: ', argv.base);
//console.log('El limite insertado fue: ', argv.limite);
//console.log ('La opcion del menu seleccionado fue: ', argv._[0]);
//console.log('informacion de la funcion: ', multiplicar);
