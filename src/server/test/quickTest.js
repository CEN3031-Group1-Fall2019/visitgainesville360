// TK is using this to test all the backend functions, please do not edit/delete this file.
// TK is using this to test all the backend functions, please do not edit/delete this file.
// TK is using this to test all the backend functions, please do not edit/delete this file.


'use strict';

var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Biz = require('../models/biz.model.js'),
    User = require('../models/user.model.js'),
    bizFunction = require('../controllers/biz.db.controller.js'),
    userFunction = require('../controllers/user.db.controller.js'),
    config = require('../config/config');

	mongoose.connect(config.db.uri, { useNewUrlParser: true });



// exports.changeListingEmail = function (req, updates, cb) {



var changeAccountBizEmail = function() {
	var findEmail = { email: "new_user1email@domain.com" };
	var updateEmail = { email: "correct_email888@domain.com" }; 

	bizFunction.findBiz(findEmail, function(found) {
		bizFunction.changeBizEmail(found, updateEmail, function(result) {
			console.log('The listing was updated to: ');
			console.log(result);
		});		
	});
	userFunction.findUser(findEmail, function(found) {
		userFunction.updateUser(found, updateEmail, function(result) {
			console.log('The listing was updated to: ');
			console.log(result);
		});		
	});
}




var changeBizEmailProp = function() {
	var findEmail = { email: "a@bx7.com" };
	var updateProp = { email: "new_user1email@domain.com" }; 

	bizFunction.findBiz(findEmail, function(found) {
		bizFunction.changeBizEmail(found, updateProp, function(result) {
			console.log('The listing was updated to: ');
			console.log(result);
		});		
	});
}




var findUserProp = function() {
	var findEmail = { email: "user1@domain.com" };
	userFunction.findUser(findEmail, function(found) {
		console.log(found);
	});
};


var updateUserProp = function() {
	var findEmail = { email: "user1@domain.com" };
	var updateProp = { 
		name: "NEW USER 1 NAME",
		email: "new_user1email@domain.com",
		password: "NEW_USER_1_PASS" };

	userFunction.findUser(findEmail, function(found) {
		userFunction.updateUser(found, updateProp, function(result) {
			console.log('The listing was updated to: ');
			console.log(result);
		});		
	});
}





var addUserDB = function() {
	var exampleUser = {
		email: "user1@domain.com",
		name: "User 1 Name",
		password: "user1pass"
	};

	userFunction.createUser(exampleUser, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});


	var exampleUser = {
		email: "user2@domain.com",
		name: "User 2 Name",
		password: "user2pass"
	};

	userFunction.createUser(exampleUser, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});

	var exampleUser = {
		email: "user3@domain.com",
		name: "User 3 Name",
		password: "user3pass"
	};

	userFunction.createUser(exampleUser, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});



};	


var delUser = function() {
	var findEmail = { email: 'user1@domain.com' };
	userFunction.deleteUser(findEmail, function(found) {
		console.log('In original test function: ');
		console.log(found);
	});
}



var hasPropertyTest = function() {

	var findEmail = { email: 'a@bx.com' };
	if (findEmail.hasOwnProperty('email')) 
		console.log('has email property');
	else
		console.log('this is an error!!!');
		

	if (findEmail.hasOwnProperty('name')) 
		console.log('this should not appear, no name listed');
	else
		console.log('correct! has no name property');

};

// exports.updateListing = function(req, updates, cb) {

// exports.changeListingEmail = function (req, updates, cb) {



var updateBizProp = function() {
	var findEmail = { email: "correct_email888@domain.com" };
	var updateProp = { 
		name: "SEVEN",
		address: "7777, CITY, STATE, USA",
		description: "Hola, yes yes yes.",
		phone: 7771231234 }; 


	bizFunction.findBiz(findEmail, function(found) {
		bizFunction.updateBiz(found, updateProp, function(result) {
			console.log('The listing was updated to: ');
			console.log(result);
		});		
	});
}

var findABC = function() {
	var findEmail = { email: 'a@bx.com' };
	bizFunction.findBiz(findEmail, function(found) {
		console.log(found);
//		console.log("type of data: "+typeof(found));
	});
};


var searchAndDestroy = function() {
	var findEmail = { email: 'a@bx3.com' };
	bizFunction.deleteBiz(findEmail, function(found) {
		console.log('In original test function: ');
		console.log(found);
	});
}

var addProperFunct = function() {
	var exampleList = {
		email: "oldemail@domain.com",
		name: "Old Shop Name",
		address: "Old Shop Address, city, state, zip, USA",
		description: "This is an ancient description.",
		phone: 9999999999
	};

	bizFunction.createBiz(exampleList, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});

};

var findABC = function() {
	var findEmail = { email: 'a@bx.com' };
	bizFunction.findBiz(findEmail, function(found) {
		console.log(found);
//		console.log("type of data: "+typeof(found));
	});
};


var newBizYo = function() {
	var exampleList = {
		email: "a@b.com",
		name: "ABC food",
		address: "7 street, city, state, zip, USA",
		description: "A lovely spot. Happy times.",
		phone: 555765847
	};

	var list = new Biz(exampleList);

  list.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log(list)
    }
  });
};


var newUserYo = function () {

	var exampleUser = {
		name: "username9",
		email: "email@domain.com",
		password: "s3cr3t7"
	};
	
	var user = new User(exampleUser);
	
  user.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log(user)
    }
  });
	
};


var populateDB = function() {
	var exampleList = {
		email: "a@bx1.com",
		name: "ABCx1 food",
		address: "7x1 street, city, state, zip, USA",
		description: "Ax1 lovely spot. Happy times.",
		phone: 55576000
	};
	var exampleList2 = {
		email: "a@bx2.com",
		name: "ABCx2 food",
		address: "7x2 street, city, state, zip, USA",
		description: "Ax2 lovely spot. Happy times.",
		phone: 55576000
	};
	var exampleList3 = {
		email: "a@bx3.com",
		name: "ABCx3 food",
		address: "7x3 street, city, state, zip, USA",
		description: "Ax3 lovely spot. Happy times.",
		phone: 55576000
	};
	var exampleList4 = {
		email: "a@bx4.com",
		name: "ABCx4 food",
		address: "7x4 street, city, state, zip, USA",
		description: "Ax4 lovely spot. Happy times.",
		phone: 55576000
	};
	var exampleList5 = {
		email: "a@bx5.com",
		name: "ABCx5 food",
		address: "7x5 street, city, state, zip, USA",
		description: "Ax5 lovely spot. Happy times.",
		phone: 55576000
	};
	var exampleList6 = {
		email: "a@bx6.com",
		name: "ABCx6 food",
		address: "7x6 street, city, state, zip, USA",
		description: "Ax6 lovely spot. Happy times.",
		phone: 55576000
	};
	var exampleList7b = {
		email: "a@bx7b.com",
		name: "ABCx7b food",
		address: "7x7b street, city, state, zip, USA",
		description: "Ax7b lovely spot. Happy times.",
		phone: 55576000
	};
	var exampleList7 = {
		email: "a@bx7.com",
		name: "ABCx7 food",
		address: "7x7 street, city, state, zip, USA",
		description: "Ax7 lovely spot. Happy times.",
		phone: 55576000
	};
	
	bizFunction.createBiz(exampleList, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
	bizFunction.createBiz(exampleList2, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
	bizFunction.createBiz(exampleList3, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
	bizFunction.createBiz(exampleList4, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
	bizFunction.createBiz(exampleList5, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
	bizFunction.createBiz(exampleList6, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
	bizFunction.createBiz(exampleList7, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
	bizFunction.createBiz(exampleList7b, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
};

//changeAccountBizEmail();
//changeBizEmailProp();

//addUserDB();
//delUser();
//findUserProp();
//updateUserProp();

//updateBizProp();
//addProperFunct();
//populateDB();
//hasPropertyTest();
//searchAndDestroy();
//findABC();
//newUserYo();
//newBizYo();
