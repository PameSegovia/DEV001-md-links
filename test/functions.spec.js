const { pathAbsolute } = require("../functions");


//TEST FUNCIÓN pathAbsolute/
describe ('Test función pathAbsolute', () => {
  it('Debe cambiar la ruta a absoluta',  () => {
      pathAbsolute('./prueba/ejemplo.md');
      expect(pathAbsolute('./prueba/ejemplo.md')).toEqual('/Users/pamesegovia/Desktop/MD-Links/DEV001-md-links/prueba/ejemplo.md');
  });
  it('Debe retornar la misma ruta si es absoluta',  () => {
     pathAbsolute('/Users/pamesegovia/Desktop/MD-Links/DEV001-md-links/prueba/ejemplo.md');
      expect(pathAbsolute('/Users/pamesegovia/Desktop/MD-Links/DEV001-md-links/prueba/ejemplo.md')).toEqual('/Users/pamesegovia/Desktop/MD-Links/DEV001-md-links/prueba/ejemplo.md');
    });
  });


