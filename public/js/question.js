'use strict';

var data = require("../idioms.json");

exports.view = function(req, res){
	console.log(data);
	res.render('question', data);
};

$(document).ready(function(){
	initializePage();
})

/*
 * Function is meant to replace the selector 
 * box within the same question with a newly generated
 * selection box which is updated with the two elements
 * in the "hint" array for that json value. 
 */
$(".btn btn-danger").click(function(e){
	e.preventDefault();
	//how do you refer to the selector box within this question??
	
})

function initializePage() {
	console.log("Javascript connected. Yee boyee!");
}