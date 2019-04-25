const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argumentos;

let comando = argv._[0];
// console.log(comando);

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando desconocido');
        break;
}

// let argv2 = process.argv;

// console.log('base:', argv.base);
// console.log('limite:', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1];