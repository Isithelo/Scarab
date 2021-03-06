 
var User = require('../models/User');

///////////////////////////////////////////////
////     SET YOUR APP.JSON DETAILS        //// 
/////////////////////////////////////////////
//Not working ? try double dots on the json url..
var myModule = require('../app.json');
var sitename = myModule.sitename
var website = myModule.website
var repo = myModule.repo
 
//////////////////////////////////
/////  PRIVACY STATEMENT    ///// 
////////////////////////////////
exports.privacy = function(req, res) {
res.render('privacy-statement',{
      pagetitle: 'Privacy | '+sitename+'',
})
}; 

//////////////////////////////////
/////  TERMS STATEMENT    ///// 
////////////////////////////////
exports.terms = function(req, res) {
res.render('terms-of-service',{
      pagetitle: 'Terms of Service | '+sitename+'',
})
}; 

//////////////////////
/////  INTRO    ///// 
////////////////////
exports.introduction = function(req, res) {
res.render('introduction',{
      pagetitle: 'An Intro | '+sitename+'',
})
}; 

////////////////////////
/////  TESTING    ///// 
//////////////////////
exports.testing = function(req, res) {
res.render('testing',{
      pagetitle: 'Site Testing | '+sitename+'',
})
}; 

/////////////////////////////
/////  INSTALLATION    ///// 
///////////////////////////
exports.installation = function(req, res) {
res.render('installation',{
      pagetitle: 'Installation | '+sitename+'',
})
};

/////////////////////////////
/////  INTEGRATION     ///// 
///////////////////////////
exports.integration = function(req, res) {
res.render('integration',{
      pagetitle: 'Integration | '+sitename+'',
})
};

////////////////////////////////////
////////// SETTINGS PAGE ///////////
///////////////////////////////////
exports.settings = function(req, res) {
	if (req.user) {
		userid = req.user.id
		res.render('settings'
	);
	} else {
		res.redirect('/signin');
	}
};

////////////////////////////////////
////////// PROFILE PAGE ////////////
///////////////////////////////////
exports.profile = function(req, res) {
 //There is a requirement to limit the form size  , as such send the find and send the headings from the parent.
 var query1 = User.findOne(
 {
  "username" : req.params.username
})
 query1.exec(function (err, user) { 
  if(err){console.log('Error Here query1'); return;}
  if (user) {
 
 
      user.password = 'Kwakwakwa'
      res.render('account/profile', {
        userload : user,
     
 
        items:req.items, //list of all '+sitename+' DB entires
        itemsParse:req.itemsParse,//list of all '+sitename+' DB entires
        pagetitle: user.username+' | '+sitename+'',
      });
  
  } else {
   res.redirect('/');
 }
 //Query end
})
 };

//////////////////////////////
//////////  PAGE ////////////
////////////////////////////
exports.page = function(req, res) {
  if (req.user) {
    var template =  req.params.page 
    var username =  req.params.username 
    switch (true){
      case(template=='organizations'):
 
      break;
 
      default:
      	res.render('settings/'+template);
      break;
    }
  } else {
   res.redirect('/signin');
 }
};

//////////////////////////////
//////////  USERS ////////////
////////////////////////////
exports.users = function(req, res) {
      User.find(  function(err, username) {
        res.render('userlist',{
          username : username,
          pagetitle: 'Users | '+sitename+'',
        });
      });
};

////////////////////////////////
//////////  SEARCH ////////////
//////////////////////////////
exports.usersearch = function(req, res) {
  var myExp = new RegExp(req.param('item'), 'i');
  var query1 = User.find({"username" : {$regex : myExp}})
  query1.exec(function (err, query1_return) {
    if(err){
      res.send("No user found");
      return;} 
         res.send(
          { users : query1_return}
          );
       })
};

