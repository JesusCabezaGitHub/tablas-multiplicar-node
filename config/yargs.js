const optsComandos = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argumentos = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', optsComandos)
    .command('crear', 'Crea un archivo .txt que contiene el listado de la tabla de multiplicar de la base indicada, hasta el limite inidicado ', optsComandos)
    .help()
    .argv;

module.exports = {
    argumentos
}