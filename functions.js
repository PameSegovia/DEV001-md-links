/*FUNCIÓN QUE CONVIERTE UNA RUTA RELATIVA EN ABSOLUTA*/
const path = require('path');
//Returns: <boolean>

function pathAbsolute(footpath) {
    const result = path.isAbsolute(footpath) ? footpath : path.resolve(footpath)
  return result 
  }
console.log(pathAbsolute("./prueba/ejemplo.md"))

/*FUNCIÓN QUE VERIFICA SI HAY ARCHIVOS MD*/
function  isMd (pathAbsolute){
  const filePath = path.extname(pathAbsolute);
  if (filePath === ".md"){
    return true;
  } return false;
};
console.log(isMd("./prueba/ejemplo.md"))

/*FUNCIÓN QUE LEE EL ARCHUVO*/

function readFile(mdPath) {
  new Promise((resolve, reject) => {
    fs.readFile(mdPath, 'utf-8', (error, file) => {
      if (error) {
        reject(error);
      } else {
        resolve(file);
      }
    });
  });
} 


module.exports = {
  pathAbsolute,
  isMd,
  readFile

};
