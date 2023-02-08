const {
  isMd,
  pathAbsolute,
  getLinks,
  validateLinks
} = require('./functions');

const fs = require('fs');


const mdLinks = (path, options = {
  validate: false
}) => {
  //Identifica sí la ruta existe.
  return new Promise((resolve, reject) => {
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
      reject('El archivo no es de tipo .md');
    } else {
      
      // Leer el Archivo md y Obtener Links
      getLinks(pathAbsolut).then((arrLinks) => {
          if (arrLinks.length === 0) {
            reject(new Error('El archivo no tiene links'))
          } 
          if (options.validate == false) {
            resolve(arrLinks)

          } else{
            const arrPromise = validateLinks(arrLinks)  
            Promise.all(arrPromise).then(result => resolve(result)
    
      )}
        }

      ).catch((error) => {
        console.log(error)

        })

    }

  });
}

module.exports = {
  mdLinks,
};
