var parser = require('mdast');
var fs = require('fs');
var _ = require('lodash')

var raw = fs.readFileSync(__dirname + '/leetcode.md', 'utf8');

var resultsInString = "";

function getData(string) {
    var tokens = parser.parse(string)
    var results = [];
    var heading = '';

    _.forEach(tokens.children, function(token){
        if(token.type === 'heading') {
            heading = token.children[0].value
            console.log(heading)
        }
    })
    return results;
}

var result = getData(raw);
fs.writeFileSync('api.json', JSON.stringify(result, null, 4));
