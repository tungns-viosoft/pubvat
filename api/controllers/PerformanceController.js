/**
 * PerformanceController
 *
 * @description :: Server-side logic for managing Performance
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	add: function(req,res){

 		var x = req.body;

 		Performance.create(x).exec(function(err, data){
 			if(err){
 				console.log('Error Performance create. Data: ' + data);
        res.serverError();
 			} else {
 				console.log('Create Performance success');
 				console.log(data);
 				res.send(200);
 			}
 		});
 	},

 	read: function(req,res){
 		var id = req.params.id;

 		Performance.findOne({"id": id}).exec(function(err, data){
 			if(err){
 				console.log('Error Performance read. Data: ' + data);
        res.serverError();
 			} else {
 				console.log('Found Performance');
 				console.log(data);
 				res.send(data);
 			}
 		});
 	},

 	browse: function(req,res){
		Performance.find({ visible : 'true' } ).exec(function(err, data){
 			if(err){
 				console.log('Error Performance browse. Data: ' + data);
        res.serverError();
 			} else {
 				console.log('Found all Performances');
 				// console.log(data);
 				res.send(data);
 			}
 		});
 	},

 	edit: function(req,res){
		var id = req.params.id;
		var visible = req.query.visible;

 		Performance.update({"id": id}, {"visible" : visible}).exec(function(err, data){
 			if(err){
 				console.log('Error Performance update. Data: ' + data);
        res.serverError();
 			} else {
 				console.log('Update Performance');
 				// console.log(data);
 				return res.send(200);
 			}
 		});
 	},

 	destroy: function(req,res){
		var id = req.params.id;

 		Performance.destroy({"id": id}).exec(function(err){
 			if(err){
 				console.log('Error Performance destroy');
        res.serverError();
 			} else {
 				console.log('Destroy Performance');
 				res.send(200);
 			}
 		});
 	},


	view: function(req,res){

		Performance.find({}).exec(function (err, data){
			if(err){
				console.log('Error findOne Performance');
				return res.serverError();
			}
			console.log(data);

			// req.session.user = "tungns";
			// res.cookie("user", "tungns");



			res.view('performance', {
				title: 'Performance',
				chartData: data[0]
			});
		});
	},

	manage: function(req,res){

		Performance.find().exec(function(err, data){
			if(err){
				console.log('Error Performance create. Data: ' + data);
        res.serverError();
			} else {
				res.view('manage', {
					title: 'Manage',
					chartData: data
				});
			}
		});
	}
};

