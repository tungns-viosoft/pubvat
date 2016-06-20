/**
 * PerfController
 *
 * @description :: Server-side logic for managing Perfs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
 	new: function(req,res){

 		// var x = {
 		// 	session: 'string',
 		// 	usecase: 'string',

 		// 	vnfname: 'srt',

 		// 	vnf: {
 		// 		name: 'string',
 		// 		os: 'string',
 		// 		sw: [
	 	// 			{
	 	// 				name: 'string',
	 	// 				version: 'string'
	 	// 			}, 
	 	// 			{
	 	// 				name: 'string',
	 	// 				version: 'string'
	 	// 			}
 		// 		],

 		// 		hw: {
 		// 			brand: 'string',
 		// 			cpus: 4,
 		// 			ram: 8,
 		// 			nic: 'string'
 		// 		}
 		// 	},

 		// 	testcase: '234',


 		// 	size: [64,128,256,512,1024,1028,1518],
 		// 	// size: "abc",

 		// 	lines: [
 		// 		{zero_loss: [1,2,3,4,5,6,7,8]}
 		// 	]
 		// };
 		
 		var x = req.body;
 		Perf.create(x).exec(function(err, data){
 			if(err){
 				console.log('Error perf create. Data: ' + data);
 			} else {
 				console.log('Create perf success');
 				console.log(data);
 				res.send(data.session);
 			}
 		});



 	}
 };

