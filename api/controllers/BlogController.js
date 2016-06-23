/**
 * PostController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	view: function(req,res){

		res.view('blog', {
			title: 'Blog'
		});
	},


	viewentry: function(req,res){
		var id = req.query.id;

		return res.view('blog', {
			title: 'Bog Entry'
		});
	},


	newentry: function(req,res){
		var title = req.param('title');
		var content = req.param('content');


	}, 


	editentry: function(req,res) {

	},


	deleteentry: function(req,res){

	}, 





};

