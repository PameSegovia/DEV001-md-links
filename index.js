const {
  isMd,
  pathAbsolute,

} = require('./functions');

const fs = require('fs');

const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
      //Identifica sí la ruta existe.
      //Sí existe:
      if (fs.existsSync(path)) {
        console.log("La ruta existe.")
      }
      //Sí no existe la ruta, rechaza la promesa.
      else {
        reject('La ruta no Existe');
      }
      // Chequear o convertir a un ruta absoluta.
      const pathAbsolut = pathAbsolute(path);
     
      // Verificar sí es archivo MD.
      if (!isMd(pathAbsolut)) {
        reject(new Error('La extensión del archivo es .md!'));
      } else {
        // El archivo contiene links?
        console.log('La extensión del archivo es de tipo .md');
        // Sí es un directorio, filtrar los archivos md.


      }
    });
}

    module.exports = {
      mdLinks,
  
    };
