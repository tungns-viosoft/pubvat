/**
 * PerformanceController
 *
 * @description :: Server-side logic for managing Performance
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	new: function(req,res){

 		var x = req.body;

 		Performance.create(x).exec(function(err, data){
 			if(err){
 				console.log('Error Performance create. Data: ' + data);
 			} else {
 				console.log('Create Performance success');
 				console.log(data);
 				res.send(data.session);
 			}
 		});

 	},


	view: function(req,res){

		Performance.findOne({"vnfname": "srt"}).exec(function (err, data){
			if(err){
				console.log('Error findOne Performance');
				return res.serverError();
			}
			console.log(data);

			res.view('performance', {
				title: 'Performance', 
				chartData: data
			});
		});


	}
};

