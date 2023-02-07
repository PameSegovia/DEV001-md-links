const { mdLinks } = require('./index.js');
mdLinks('./prueba/ejemplo.md').then((result)=> {console.log(result)})
.catch((error)=> {
    console.log(error)
});