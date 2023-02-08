const { mdLinks } = require('./index.js');
mdLinks('./prueba/ejemplo.md', {validate: false } ).then((result)=> {console.log(result)})
.catch((error)=> {
    console.log(error)
});