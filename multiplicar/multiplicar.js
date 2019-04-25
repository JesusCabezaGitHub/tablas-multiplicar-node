//Requires: 1.Librería propia de node 2.Paquetes no nativos de node pero que se isntalan eje. 'express' 3.Archivos que nbosostroa mismos escribimos en nuestro proyecto
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('==================='.green);
    console.log(`   tabla de ${base}   `.green);
    console.log('==================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i}*${base} = ${base*i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base no es un número');
            return;
        }

        if (!Number(limite)) {
            reject('El límite no es un número');
            return;
        }

        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}