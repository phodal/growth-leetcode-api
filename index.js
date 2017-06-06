var MarkdownIt = require('markdown-it');
var fs = require('fs');
var _ = require('lodash');

var md = new MarkdownIt();
var raw = fs.readFileSync(__dirname + '/demo.md', 'utf8');

function getData(str) {
   
}

var result = getData(raw);
fs.writeFileSync('api.json', JSON.stringify(result, null, 4));
