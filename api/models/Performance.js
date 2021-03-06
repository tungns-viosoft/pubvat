/**
 * Perf.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // id: {    
    //   type: 'integer',
    //   autoIncrement: true,
    //   unique: true
    // },

  	session: {
  		type: 'string'
  	}, 

  	usecase: {
  		type: 'string'
  	}, 

  	vnfname: {
  		type: 'string',
      notNull: true
  	},

  	vnf: {
  		type: 'json'
  	},

  	testcase: {
  		type: 'integer'
  	},

  	size: {
  		type: 'array'
  	},

  	lines: {
  		type: 'array'
  	}, 

    visible: {
      type: 'boolean'
    },

  }
};

