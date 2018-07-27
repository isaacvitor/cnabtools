const fs = require('fs')
const remessaHelpers = require('./util/remessaHelpers')

// Load banks
let banks = {};
const banksFolders = fs.readdirSync(__dirname + '/banks/');

for (var i = 0; i < banksFolders.length; i++) {
    banks[banksFolders[i]] = require(__dirname + '/banks/' + banksFolders[i] + '/index.js');
}

exports.banks = banks
exports.remessaHelpers = remessaHelpers