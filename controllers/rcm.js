 
var User = require('../models/User');

///////////////////////////////////////////////
////     SET YOUR APP.JSON DETAILS        //// 
/////////////////////////////////////////////
//Not working ? try double dots on the json url..
var myModule = require('../app.json');
var sitename = myModule.sitename
var website = myModule.website
var repo = myModule.repo
  

////////////////////////////////
//////////   DEMO  ////////////
//////////////////////////////
exports.demo = function(req, res) {
  console.log('enter')
  res.render('demo',{
        pagetitle: 'Demo | '+sitename+'',
  })
};

