/**
 * AboutAdminController
 *
 * @description :: Server-side logic for managing Aboutadmins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	load: function(req, res) {
		
		About.find().exec(function (err, data) { 

			if (err) {
				console.log('error query data');
				return;
			} 

			if(data && data.length > 0){

				console.log('query success');

				res.view('admin/about',  {
					title: 'Admin edit about',
					layout: 'admin/layoutadmin',
					about: data[0]
				});

			} else {
				var about = {
					content: 'This is Viosoft'
				}

				About.create(about).exec(function(err, model){			
					if(err){ 
						console.log('error creating about');
					} else {						
						console.log('create new value');

						res.view('admin/about',  {
							title: 'Admin edit about',
							layout: 'admin/layoutadmin',
							about
						});
					}
				});
			}
			

		});
	
	},


	update: function(req,res){
		console.log('updating... ' + req.param('content'));
		About.update({},{content: req.param('content')}).exec(function(err, updated){
			if(err){
				console.log('updated error');
			} else {
				// console.log('update sucess');
				// res.view('admin/about',  {
				// 			title: 'Admin edit about',
				// 			layout: 'admin/layoutadmin',
				// 			about: updated[0]
				// });

				res.redirect('admin/about');
			}
		}) ;

	},



};

