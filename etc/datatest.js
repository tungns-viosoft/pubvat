var dataset =
{
  session: 'string',
  usecase: 'string',

  vnfname: 'string',
  vnf: {
    os: 'string',
    sw: [
      {
        name: 'string',
        version: 'string'
      }, 
      {
        name: 'string',
        version: 'string'
      }
    ],
    hw: {
      brand: 'string',
      cpus: 8,
      ram: 32,
      nic: 'string'
    }
  },

  testcase: 69,


  size: [64,128,256,512,1024,1028,1518],

  lines: [
    {zero_loss: [1,2,3,4,5,6,7,8]},
    {zero_loss: [8,7,6,5,4,3,2,1]},
    {zero_loss: [1,1,1,1,1,1,1,1]},
    {zero_loss: [2,2,2,2,2,2,2,2]},
    {zero_loss: [3,3,3,3,3,3,3,3]},
    {zero_loss: [4,4,4,4,4,4,4,4]}
  ]
}; 






var moris = 
{
  "session":"1465972342253",
  "result":[
    { 
      "size": 64,
      "zero_loss": 47
    },
    { 
      "size": 128,
      "zero_loss": 81
    },
    { 
      "size": 256,
      "zero_loss": 84
    },
    { data
      "size": 512,
      "zero_loss": 87
    },
    { 
      "size": 1024,
      "zero_loss": 87
    },
    { 
      "size": 1028,
      "zero_loss": 90
    },
    { 
      "size": 1518,
      "zero_loss": 90
    }
   ]
};


