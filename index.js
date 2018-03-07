const fs = require('fs')
const layoutHelpers = require('./util/layout_helper')

// Load banks
let banks = {};
const banksFolders = fs.readdirSync(__dirname + '/banks/');
console.log('banksFolders', banksFolders);

for (var i = 0; i < banksFolders.length; i++) {
    banks[banksFolders[i]] = require(__dirname + '/banks/' + banksFolders[i] + '/index.js');
}

exports.banks = banks
exports.layoutHelpers = layoutHelpers

console.log(banks['001'].layouts.remessa)