const fs = require('fs')
const layoutHelpers = require('./util/layout_helper')

// Load banks
let banks = {};
const banksFolders = fs.readdirSync(__dirname + '/banks/');

for (var i = 0; i < banksFolders.length; i++) {
    banks[banksFolders[i]] = require(__dirname + '/banks/' + banksFolders[i] + '/index.js');
}

exports.banks = banks
exports.layoutHelpers = layoutHelpers