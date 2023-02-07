const { pathAbsolute } = require('../functions.js');
const {mdLinks} = require('../index.js');
pathAbsolute

describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });
 /*it('Debería devolver una promesa', () => {
   expect(mdLinks()). toBe(typeof Promise);
  });*/

  it('Debería rechazar cuando el path no existe', () => {
    return mdLinks('./prueba/ejemplo.md').catch((error) => {
      expect(error).toStrictEqual('La ruta no Existe');
    })
   });

   it('Debería rechazar sí el archivo no es de tipo .md', () => {
      expect(mdLinks('./prueba/ejemplo.js')).rejects.toStrictEqual('El archivo no es de tipo .md');
   });

   it('Debería rechazar sí no se encuentran links en el archivo', () => {
    expect(mdLinks('./prueba/ejemplo.md')).rejects.toStrictEqual('No se han encontrado links');
 });

});
