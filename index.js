var fs = require('fs');
var _ = require('lodash');

var md = require( "markdown" ).markdown;
var raw = fs.readFileSync(__dirname + '/demo.md', 'utf8');

function getData(str) {
  var mdTree = md.parse(str);
  var heading = '';

  _.each(mdTree, function(section){
    if(section[0] && section[0] === 'header') {
      heading = section[3]
    }
  })
}

var result = getData(raw);
fs.writeFileSync('api.json', JSON.stringify(result, null, 4));
