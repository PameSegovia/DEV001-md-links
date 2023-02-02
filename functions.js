/*FUNCIÓN QUE CONVIERTE UNA RUTA RELATIVA EN ABSOLUTA*/
const path = require('path');
//Returns: <boolean>

function pathAbsolute(footpath) {
    const result = path.isAbsolute(footpath) ? footpath : path.resolve(footpath)
  return result 
  }
console.log(pathAbsolute("./prueba/ejemplo.md"))

/*FUNCIÓN QUE VERIFICA SI HAY ARCHIVOS MD*/
const  isMd  = (pathAbsolute) => {
  const filePath = path.extname(pathAbsolute);
  if (filePath === ".md"){
    return true;
  } return false;
};
