/**
 * AboutController
 *
 * @description :: Server-side logic for managing Abouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	view: function(req,res){

      	req.session.authenticated = false;
		About.find().exec(function(err, data){
			if(err){
				console.log('error about');
			} else {
				if(data && data.length > 0){
					res.view('about', {
						title: 'About Us',
						about: data[0]
					});
				} else{
					res.serverError();
				}
			}
		});
	}
};

