const { mdLinks } = require('./index.js');
mdLinks('./README.md').then((result)=> {console.log(result)})
.catch((error)=> {
    console.log(error)
});