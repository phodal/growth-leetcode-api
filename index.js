var fs = require('fs');
var _ = require('lodash');
var slugify = require('slugify')

var md = require( "markdown" ).markdown;
var raw = fs.readFileSync(__dirname + '/leetcode.md', 'utf8');

function getData(str) {
  var questionsArray = str.split('==============================');
  var questionsAPI = [];

  for(var index in questionsArray) {
  	var question = questionsArray[index];
	var mdTree = md.parse(question);
	var heading = '';
	var fileName = '';

	_.each(mdTree, function(section){
		if(section[0] && section[0] === 'header') {
		  heading = section[2];
		  fileName = slugify(heading).toLowerCase();
		}
	})

	questionsAPI.push({
		name: heading,
		fileName: fileName
	})

	fs.writeFileSync(__dirname + '/questions/' + fileName + '.md', question);
  }

  fs.writeFileSync(__dirname + '/api.json', JSON.stringify(questionsAPI));
}

var result = getData(raw);

