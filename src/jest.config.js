const {defaults} = require('jest-config');


module.exports = {
    setupFiles: ['<rootDir>/__tests__/setup.js'],
    verbose: true,
    "bail": true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
}

