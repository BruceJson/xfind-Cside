// https://github.com/michael-ciniawsky/postcss-load-config
const path = require('path');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', __dirname);
const variables = require('./src/assets/style/variables.js');


module.exports = {
    "plugins": {
        "postcss-import": {
            resolve: function (id, basedir, importOptions) {
                // console.log('######', id, '######', basedir, '######', importOptions);
                if (id.match(/@pages/) && id.match(/@pages/).index === 0) {
                    // console.log('=================', path.join(__dirname, 'src/assets/style/pages', id.substr(6)));
                    return path.join(__dirname, 'src/assets/style/pages', id.substr(6));
                }
                return id;
            }
        },
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "postcss-cssnext": {
            features: {
                customProperties: {
                    variables: variables
                }
            }
        }
    }
}