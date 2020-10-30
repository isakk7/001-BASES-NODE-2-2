const fs = require('fs'); // aqui importamos el paquete de manipulacion de archivos

let listarTabla = (Numero, imprimirNumero) => {
        return new Promise((resolve, reject) => {
            let tabla = numero.toString(2);

            if(!Number(Numero)){
                reject('Favor de insertar un valor valido');
                return;
            }

            if(!Number(imprimirNumero)){
                reject('Favor de insertar un limite valido');
                return;
            }


           
        });
};
let crearArchivo = (Numero, imprimirNumero) => {
    return new Promise((resolve, reject) => {
       
        if(!Number(Numero)){
            reject('Favor de insertar un valor valido');
            return;
        }
        if(!Number(imprimirNumero)){
            reject('Favor de insertar un limite valido');
            return;
        }
        
        fs.writeFile(`tablas/tabla-${imprimirNumero}.txt`, tabla, (err) => {
            if (err) reject (err);
            else
            resolve (`tabla-${imprimirNumero}.txt`)
        }); 

    }); 
};  
module.exports = {
    crearArchivo,
    listarTabla
};