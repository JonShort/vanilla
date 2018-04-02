var sass = require('sass');

var result = sass.renderSync({ file: '../src/sass/main.sass' });

console.log(result);