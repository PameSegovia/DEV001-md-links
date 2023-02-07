const path = require('path');
const fs = require('fs');
const nodeFetch = require('node-fetch');


//FUNCIÓN QUE CONVIERTE UNA RUTA RELATIVA EN ABSOLUTA/
function pathAbsolute(footpath) {
  const result = path.isAbsolute(footpath) ? footpath : path.resolve(footpath)
  return result
}


//FUNCIÓN QUE VERIFICA SI HAY ARCHIVOS MD//
function isMd(pathAbsolute) {
  const filePath = path.extname(pathAbsolute);
  if (filePath === ".md") {
    return true;
  }
  return false;
};


//FUNCIÓN QUE LEE EL ARCHUVO//
function readFile(mdPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(mdPath, 'utf-8', (error, file) => {
      if (error) {
        reject(error);
      } else {
        resolve(file);
      }
    });
  });
}

//FUNCIÓN QUE OBTIENE LOS LINKS 
function getLinks(mdPath) {
  return new Promise((resolve, reject) => {
    const linksArr = [];
    readFile(mdPath)
      .then((file) => {
        const linksURL = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
        let search = linksURL.exec(file);
        while (search !== null) {
          linksArr.push({
            href: search[2],
            text: search[1],
            file: mdPath,
          });
          search = linksURL.exec(file);
        }
        resolve(linksArr);
      })
      .catch((error) => reject(error));
  });
}



//FUNCIÓN QUE VALIDA LOS LINKS

function validateLinks(arrayLinks) {
 return arrayLinks.map(link => {
  return fetch(link.href).then(linkResponse => {
    return {
      ...link,
      status: linkResponse.status,
      ok: linkResponse.statusText
    }
  })
})
}

getLinks('./prueba/ejemplo.md').then(arrayLinks => {
  //console.log(arrayLinks)
const arrPromise = validateLinks(arrayLinks)  
Promise.all(arrPromise).then(result => console.log(result))
})





module.exports = {
  pathAbsolute,
  isMd,
  readFile,
  getLinks,
validateLinks,
};
