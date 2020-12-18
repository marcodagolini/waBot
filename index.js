


require('dotenv').config()



const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const myPlaintextPassword2 = 'yrktjfyghykthfgpi';
const someOtherPlaintextPassword = 'not_bacon';


bcrypt.genSalt(saltRounds, function(err, salt) {
	console.log("mySalt --> " + salt);
	console.log("%%%%%%%%%%%%");
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
	    console.log("myHash --> " + hash);
	    console.log("%%%%%%%%%%%%");
	    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
		    console.log(res);
	    });
    });
});


bcrypt.genSalt(saltRounds, function(err, salt) {
	console.log("mySalt --> " + salt);
	console.log("%%%%%%%%%%%%");
    bcrypt.hash(myPlaintextPassword2, salt, function(err, hash) {
	    console.log("myHash --> " + hash);
	    console.log("%%%%%%%%%%%%");
    });
});





var AWS = require("aws-sdk");
var cors = require('cors')
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": process.env.accessKeyIdDynamo, "secretAccessKey": process.env.secretAccessKeyIdDynamo
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchEverything = function () {
    var params = {
        TableName: "whatsappDB",
    };
    docClient.scan(params, function (err, data) {
        if (err) {
		console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
		https.get("https://git.heroku.com/marcowabot.git");
        }
        else {
		echoAgent.setAgentState({availability: "ONLINE"});
		echoAgent.subscribeExConversations({
			'agentIds': [echoAgent.agentId],
			'convState': ['OPEN']
		}, (e, resp) => console.log('subscribed successfully', echoAgent.conf.id || ''));
		echoAgent.subscribeRoutingTasks({});
		setInterval(function(){
			echoAgent.getClock({}, (e, resp) => {
				if (e) { console.log(e) }
				console.log(resp)
			});
		}, 30000);
		
		// console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
		addToObject(data);
		
        }
    })
}





var myDatabase = [];


var events = require('events');
var emitter = new events.EventEmitter();
var https = require('https');
var express = require('express');
var bodyParser = require("body-parser");



var app = express();
app.listen(process.env.PORT);
app.set('port', (process.env.PORT || 5000));

// Required to allow access to the service across different domains
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://marcodagolini.github.io");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Content-Type', 'text/plain');
  next();
});
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));



var whitelist = ['https://marcodagolini.github.io','https://vodit-report.fs.liveperson.com']
var corsOptions = {
  origin: function (origin, callback) {
	  console.log(origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS. This is from --> ' + origin))
    }
  }
}
 
// app.get('/add', cors(corsOptions), checkValuesGet);
app.get('/getApp', checkValuesGetApp)
app.get('/getFB', checkValuesGetFB)
app.get('/getGoogleMapKey', getGoogleMapKey)
app.get('/test', testGet)
app.post('/push', checkValuesPostPush);
app.post('/bind', checkValuesPostBind);
app.post('/outboundCall', outboundCall);
app.post('/stopOutboundCall', stopOutboundCall);
app.post('/getMetrics', getMetrics);
app.post('/test', testPost)



app.post('/add1', checkValuesPost);
app.post('/add2', checkValuesPost);
app.post('/add3', checkValuesPost);
app.post('/add4', checkValuesPost);
app.post('/add5', checkValuesPost);

app.post('/file', checkFile);



function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}





function checkFile(req, res, next) {
	
	var tipeOfRequest = req.query.tipeOfRequest;
	var myPayload = req.body;
	
	// console.log(myPayload);
	// var binary = new Buffer(JSON.stringify(myPayload)).toString('binary');
	
	let objJsonStr = JSON.stringify(myPayload);
	// let objJsonStr = JSON.stringify(myPayload,undefined,1);
	// var binary = new Buffer(JSON.stringify(myPayload)).toString('binary');
	objJsonStr = objJsonStr.substring(2, objJsonStr.length - 5);
	// console.log(objJsonStr)
	objJsonStr = Buffer.from(objJsonStr, 'binary').toString("base64");
	// console.log("\n\n\n\n\n\n");
	// console.log(objJsonB64)
	// var btoa = require('btoa');
	console.log(objJsonStr);
	
	var base64 = require('base-64');
	var utf8 = require('utf8');
	
	var bytes = utf8.encode(objJsonStr);
	var encoded = base64.encode(bytes);
	// console.log(encoded);
	
	// var binary = new Buffer(JSON.stringify(myPayload)).toString('binary');
	// binary = binary.substring(2, binary.length - 5);
	
	// console.log(Buffer.from(binary).toString('base64'));
	// console.log(Buffer.from(binary, 'base64').toString('binary'))
	
	
	var data = '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';
	
	let buff = new Buffer(data, 'base64');
	let text = buff.toString('ascii');
	// console.log(text);
	// console.log(Buffer.from(a).toString('binary'))
	
	
	// var btoa = require('btoa');
	// var base64 = btoa(binary);
	
	// console.log(binary)
	
	// console.log(base64);
	
	
	
	console.log(req.originalUrl);
	// console.log(binary);
	// console.log("body --> " + Buffer.from(JSON.stringify(myPayload)).toString('base64'));
	// console.log("post request --> " + JSON.stringify(myPayload));
	console.log("IP --> " + (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress);
	console.log(JSON.stringify(req.headers));
	
	
	
	res.send("ok");
	
	
	
}



function pushAgentData(agentId, concurrency, body, callback) {
	
	console.log("agentId --> " + agentId);
	var request = require('request');
	var oauth = {
        	consumer_key: process.env.appKey,
        	consumer_secret: process.env.secret,
        	token: process.env.accessToken,
        	token_secret: process.env.secretToken	
		
    	};
	
	console.log("concurrency --> " + concurrency)
	delete body.passwordSh
	body.maxAsyncChats = concurrency;
	console.log("body --> " + JSON.stringify(body))
	
	var url = 'https://lo.ac.liveperson.net/api/account/31554357/configuration/le-users/users/' + agentId + '?v=4.0';
	console.log(url);
	request.put({
    		url: url,
    		json: true,
		body: body,
		oauth: oauth,
    		headers: {
        		'Content-Type': 'application/json',
			'Accept': 'application/json',
			'If-Match': '-1'
    		}
	}, function (e, r, b) {
		if(b){
			callback (b);
		} else{
			console.log(e);
			callback("error");
		}

	});
	

}




function retrieveAgentData(agentId, callback) {
	
	console.log("agentId --> " + agentId);
	var request = require('request');
	var oauth = {
        	consumer_key: process.env.appKey,
        	consumer_secret: process.env.secret,
        	token: process.env.accessToken,
        	token_secret: process.env.secretToken	
		
    	};
	// var body = {"status":["ONLINE"]};
	var url = 'https://lo.ac.liveperson.net/api/account/31554357/configuration/le-users/users/' + agentId + '?v=4.0';
	console.log(url);
	request.get({
    		url: url,
    		json: true,
		oauth: oauth,
    		headers: {
        		'Content-Type': 'application/json',
			'Accept': 'application/json'
    		}
	}, function (e, r, b) {
		if(b){
			callback (b);
		} else{
			callback("error");
		}

	});
	

}




function setConcurrency(agentId, concurrency) {


	
	retrieveAgentData(agentId, function (response) {
		
		console.log("second level --> " + JSON.stringify(response));
		var myBody = response;
		if (response.hasOwnProperty('error')){
			console.log("error");
		} else {
			
			pushAgentData(agentId, concurrency, myBody, function (response) {

				if (response.totalSize === 0){
					console.log("error");
				} else {
					console.log("ok");
				}
			});
			
			
		}
		
	});


	
	
}




function getMetrics(req, res, next) {
	
	var contactId = req.body.contactId;
	
	var AWS = require("aws-sdk");


	let awsConfig = {
		"region": "eu-west-2",
		"endpoint": "https://connect.eu-west-2.amazonaws.com",
		"accessKeyId": process.env.accessKeyIdConnect, "secretAccessKey": process.env.secretAccessKeyIdConnect
	};
	
	AWS.config.update(awsConfig);

	
	console.log("get metrics");
	
	let connect = new AWS.Connect();
	

		
		
		var params = {
			CurrentMetrics: [{"Name": "AGENTS_AVAILABLE",
					  "Unit": "COUNT"}],
			"Filters": {
				"Channels": ["VOICE"],
				"Queues": ["a17e3d42-a477-4a82-ae3d-208666131e45"]
			},
			"InstanceId": "469d4b90-f0e5-4aed-9f1e-46c5234ca491",
			"MaxResults": "100"
		};
		
		
		
		connect.getCurrentMetricData(
			params, function (error, response){
				
				if(error) {
					console.log(JSON.stringify(error))
					res.send("error");
					
				} else {
					console.log('Your metrics --> ' + JSON.stringify(response));
					res.send("ok");
				}
			}
		);

	
	
}


function stopOutboundCall(req, res, next) {
	

	var contactId = req.body.contactId;
	var myAgent = req.body.agentId;
	
	var AWS = require("aws-sdk");


	let awsConfig = {
		"region": "eu-west-2",
		"endpoint": "https://connect.eu-west-2.amazonaws.com",
		"accessKeyId": process.env.accessKeyIdConnect, "secretAccessKey": process.env.secretAccessKeyIdConnect
	};
	
	AWS.config.update(awsConfig);

	
	console.log("stop calling");
	

		let connect = new AWS.Connect();

		
		let params = {
			"InstanceId" : '469d4b90-f0e5-4aed-9f1e-46c5234ca491',
			"ContactId" : contactId
		}
		
		connect.stopContact(
			params, function (error, response){
				
				if(error) {
					console.log(JSON.stringify(error))
					res.send("error");
					
				} else {
					console.log('Stop outbound call --> ' + JSON.stringify(response));
					setConcurrency(myAgent, 4);
					res.send("ok");
				}
			}
		);

	
	
}


function testGet(req, res, next) {
	
	console.log(JSON.stringify(req.query));
	
}

function testPost(req, res, next) {
	
	console.log(req.body);
	res.send("ok");
	
}




function outboundCall(req, res, next) {
	
	var phoneNumber = req.body.phone;
	var myAgent = req.body.agentId;
	var attributes = {}
	if (typeof myAgent !== 'undefined' && myAgent){
		console.log("change attributes");
		attributes = {"myAgent":myAgent};
	}
	var clientToken = uuidv4();
	console.log("phone number --> " + phoneNumber);
	
	var AWS = require("aws-sdk");


	let awsConfig = {
		"region": "eu-west-2",
		"endpoint": "https://connect.eu-west-2.amazonaws.com",
		"accessKeyId": process.env.accessKeyIdConnect, "secretAccessKey": process.env.secretAccessKeyIdConnect
	};
	
	AWS.config.update(awsConfig);

	
	console.log("calling");
	

		let connect = new AWS.Connect();

		
		let params = {
			"InstanceId" : '469d4b90-f0e5-4aed-9f1e-46c5234ca491',
			"ContactFlowId" : '9cc6b87e-65c8-47c2-be5e-01c55ce43aa0',
			"SourcePhoneNumber" : '+442073656117',
			"DestinationPhoneNumber" : phoneNumber,
			"Attributes": attributes,
			"ClientToken":clientToken,
			"QueueId": '',
		}
		
		connect.startOutboundVoiceContact(
			params, function (error, response){
				
				if(error) {
					console.log(JSON.stringify(error))
					res.send("error");
					
				} else {
					console.log('Initiated an outbound call --> ' + JSON.stringify(response));
					setConcurrency(myAgent, 0);
					res.send(response.ContactId);
				}
			}
		);

	
	
}





function isThereAnyOpenConversationViaApp(myJSON, myPhoneNumber, callback) {
	
	var request = require('request');
	var oauth = {
        	consumer_key: process.env.appKey,
        	consumer_secret: process.env.secret,
        	token: process.env.accessToken,
        	token_secret: process.env.secretToken	
		
    	};
	console.log(myPhoneNumber);
	var now = Date.now();
	var before = (Date.now() - (1000*60*60*24*30));    // only the conversation of the last 60 days will be fetched
	var body = {"start":{"from":before,"to":now},"status":["OPEN"], "sdeSearch":{"personalContact":myPhoneNumber}}
	console.log(body);
	var url = 'https://lo.msghist.liveperson.net/messaging_history/api/account/31554357/conversations/search?offset=0&limit=100';



	request.post({
    		url: url,
		body: body,
		oauth: oauth,
    		json: true,
    		headers: {
        		'Content-Type': 'application/json',
			'Accept': 'application/json'
    		}
	}, function (e, r, b) {
		if(e){
			console.log("third level --> " +  JSON.stringify(e));
			callback ("error");
		} else{
			console.log("third level --> " +  JSON.stringify(b));
			if (b._metadata.count > 0){
				console.log("****** found conversation!");
				callback (true);
			} else{
				console.log("****** not found conversation!");
				callback (false);
			}
		}

	});
	
	

	
	
}




function isThereAnyOpenConversationViaFB(myJSON, myCustomerID, callback) {
	
	var request = require('request');
	var oauth = {
        	consumer_key: process.env.appKey,
        	consumer_secret: process.env.secret,
        	token: process.env.accessToken,
        	token_secret: process.env.secretToken	
		
    	};
	console.log(myCustomerID);
	var body = {"consumer":myCustomerID,"status":["OPEN"]};
	var url = 'https://lo.msghist.liveperson.net/messaging_history/api/account/31554357/conversations/consumer/search';



	request.post({
    		url: url,
		body: body,
		oauth: oauth,
    		json: true,
    		headers: {
        		'Content-Type': 'application/json',
			'Accept': 'application/json'
    		}
	}, function (e, r, b) {
		if(e){
			console.log("third level --> " +  JSON.stringify(e));
			callback ("error");
		} else{
			if (b._metadata.count > 0){
				console.log("****** found conversation!");
				callback (true);
			} else{
				console.log("****** not found conversation!");
				callback (false);
			}
		}

	});
	
	

	
	
}




function updateFacebookSFDC(facebookID, oAuth, url, callback) {
	
	var request = require('request');
	var url = url;
	
	
	var myNewBody = {"FacebookID__c": facebookID};
	console.log(myNewBody);

	request.patch({
    		url: url,
		body: myNewBody,
    		json: true,
    		headers: {
        		'Content-Type': 'application/json',
			'Authorization': oAuth
    		}
	}, function (e, r, b) {
		if(e){
			console.log("third level --> " +  JSON.stringify(e));
			callback ("error");
		} else{
			console.log("third level --> " +  JSON.stringify(b));
			callback (b);
		}

	});
	
	

	
	
}


function updateSpecificContactSFDC(myJSON, oAuth, url, callback) {
	
	var request = require('request');
	var url = url;
	
	var name = myJSON.name;
	var phone = myJSON.phone;
	var facebookID = myJSON.facebookID;
	var status = myJSON.status;
	
	var myNewBody = {"Name": name, "FacebookID__c": facebookID, "phone__c": phone, "Type__c": status};
	console.log(myNewBody);

	request.patch({
    		url: url,
		body: myNewBody,
    		json: true,
    		headers: {
        		'Content-Type': 'application/json',
			'Authorization': oAuth
    		}
	}, function (e, r, b) {
		if(e){
			console.log("third level --> " +  JSON.stringify(e));
			callback ("error");
		} else{
			console.log("third level --> " +  JSON.stringify(b));
			callback (b);
		}

	});
	
	

	
	
}



function retrieveSpecificContactSFDC(oAuth, url, callback) {
	
	var request = require('request');
	var url = url;

	request.get({
    		url: url,
    		json: true,
    		headers: {
        		'Content-Type': 'application/json',
			'Authorization': oAuth
    		}
	}, function (e, r, b) {
		if(e){
			console.log("third level --> " +  JSON.stringify(e));
			callback ("error");
		} else{
			console.log("third level --> " +  JSON.stringify(b));
			callback (b);
		}

	});
	
	
}



function retrieveContactSFDC(oAuth, phone, callback) {
	
	var request = require('request');
	var url = "https://eu16.salesforce.com/services/data/v45.0/query/?q=SELECT+Phone__c+FROM+myContact__c+WHERE+Phone__c+=+'" + phone + "'";

	request.get({
    		url: url,
    		json: true,
    		headers: {
        		'Content-Type': 'application/json',
			'Authorization': oAuth
    		}
	}, function (e, r, b) {
		if(e){
			console.log("second level --> " +  JSON.stringify(e));
			callback ("error");
		} else{
			console.log("second level --> " +  JSON.stringify(b));
			callback (b);
		}

	});
	
	
}


function retrieveContactSFDCviaFB(oAuth, facebookID, callback) {
	
	var request = require('request');
	var url = "https://eu16.salesforce.com/services/data/v45.0/query/?q=SELECT+FacebookID__c+FROM+myContact__c+WHERE+FacebookID__c+=+'" + facebookID + "'";

	request.get({
    		url: url,
    		json: true,
    		headers: {
        		'Content-Type': 'application/json',
			'Authorization': oAuth
    		}
	}, function (e, r, b) {
		if(e){
			console.log("second level --> " +  JSON.stringify(e));
			callback ("error");
		} else{
			console.log("second level --> " +  JSON.stringify(b));
			callback (b);
		}

	});
	
	
}



function loginSFDC(phone, callback) {
	
	var request = require('request');
	var body = {};
	var passwordSFDC = process.env.passwordSFDC;
	var url = 'https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9fTLmJ60pJ5JK9RRpb91nRTT1WQHmz_ADCLVSSUfIoPhTTzOWhXEe.5RIs_ByFYfUTC3QpTS1UOuEIskC&client_secret=289736B3E84183AC51552AC5F1610AE21B0B21B9D3148ACD85DC939DAC783C96&username=mdagolini@me.com&password=' + passwordSFDC;

	request.post({
    		url: url,
    		body: body,
    		json: true,
    		headers: {
        		'Content-Type': 'application/json',
    		}
	}, function (e, r, b) {
		if(e){
			console.log("first level --> " +  JSON.stringify(e));
			callback ("error");
		} else{
			console.log("first level --> " +  JSON.stringify(b));
			callback (b);
		}

	});
	

}





function getGoogleMapKey(req, res, next) {

	console.log("get request");
	console.log((req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress);
	
	var myGoogleKey = process.env.myGoogleKey;
	
	res.send(myGoogleKey);
	
}




function checkValuesGetApp(req, res, next) {
	// console.log(req);
	var myNumber = req.query.phone;
	console.log("get request");
	console.log((req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress);
	
	loginSFDC(myNumber, function (response) {
		
		console.log("second level --> " + JSON.stringify(response));
		if (response.hasOwnProperty('error')){
			res.send("error");
		} else {
			var oAuth = "Bearer " + response.access_token;
			console.log("oAuth --> " + oAuth)
			retrieveContactSFDC(oAuth, myNumber, function (response) {
				console.log("main level --> " + JSON.stringify(response));
				if (response.totalSize === 0){
					res.send("error");
				} else {
					var myUrl = "https://eu16.salesforce.com" + response.records[0].attributes.url;
					retrieveSpecificContactSFDC(oAuth, myUrl, function (response) {
						console.log("main level --> " + JSON.stringify(response));
						if (response.totalSize === 0){
							res.send("error");
						} else {
							var responseToSend = {"name": response.Name, "status": response.Type__c, "phone": response.phone__c, "facebookID": response.FacebookID__c, "isThereConv": "none", "id": response.Id};
							if(response.FacebookID__c){
								isThereAnyOpenConversationViaFB(responseToSend, response.FacebookID__c, function (response) {
									if(response){
										console.log("main level --> " + JSON.stringify(response));
										responseToSend.isThereConv = "FaceBook";
										res.send(responseToSend);
									} else{
										console.log("main level --> " + JSON.stringify(response));
										res.send(responseToSend);
									}
									
								});
							} else{
								res.send(responseToSend);
							}
						}
					});
				}
			});
		}
		
	});

	
	
	
	
	
	
	/**********
	
	var trafficLight = true;
	var myID = "";
	var myName = "";
	var myDBreplica = myDatabase;
	var myLength = myDBreplica.length;
	for (var i = 0; i < myLength; i ++){
		if (myDBreplica[i].phoneNumber === myNumber){
			if (myDBreplica[i].hasOwnProperty('name')){
				myName = myDBreplica[i].name;
			} else{
				myName = "unknown";
			}
			if (myDBreplica[i].hasOwnProperty('customerID')){
				myID = myDBreplica[i].customerID;
			} else{
				myID = "unknown";
			}
			var myAnswer = {"name": myName, "customerType": myID};
			res.send(myAnswer);
			i = myLength;
			trafficLight = false
			
		}
	}
	
	if (trafficLight) {
		res.send("error");
	}
	
	
	******/
	
	
}




function checkValuesGetFB(req, res, next) {
	// console.log(req);
	var facebookID = req.query.facebookID;
	console.log("get request");
	console.log((req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress);
	
	loginSFDC(facebookID, function (response) {
		
		console.log("second level --> " + JSON.stringify(response));
		if (response.hasOwnProperty('error')){
			res.send("error");
		} else {
			var oAuth = "Bearer " + response.access_token;
			console.log("oAuth --> " + oAuth)
			retrieveContactSFDCviaFB(oAuth, facebookID, function (response) {
				console.log("main level --> " + JSON.stringify(response));
				if (response.totalSize === 0){
					res.send("error");
				} else {
					var myUrl = "https://eu16.salesforce.com" + response.records[0].attributes.url;
					retrieveSpecificContactSFDC(oAuth, myUrl, function (response) {
						console.log("main level --> " + JSON.stringify(response));
						if (response.totalSize === 0){
							res.send("error");
						} else {
							var responseToSend = {"name": response.Name, "status": response.Type__c, "phone": response.phone__c, "facebookID": response.FacebookID__c, "isThereConv": "none", "id": response.Id};
							console.log(response.phone__c);
							if(response.phone__c){
								isThereAnyOpenConversationViaApp(responseToSend, response.phone__c, function (response) {
									if(response){
										console.log("main level --> " + JSON.stringify(response));
										responseToSend.isThereConv = "inApp";
										res.send(responseToSend);
									} else{
										console.log("main level --> " + JSON.stringify(response));
										res.send(responseToSend);
									}
									
								});
							} else{
								res.send(responseToSend);
							}
						}
					});
				}
			});
		}
		
	});


	
	
}





function checkValuesPostPush(req, res, next) {

	
	console.log("post request");
	console.log((req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress);
	console.log(req.body);
	var myBody = req.body;
	var myNumber = myBody.phone;
	
	
	loginSFDC(myNumber, function (response) {
		
		console.log("second level --> " + JSON.stringify(response));
		if (response.hasOwnProperty('error')){
			res.send("error");
		} else {
			var oAuth = "Bearer " + response.access_token;
			console.log("oAuth --> " + oAuth)
			retrieveContactSFDC(oAuth, myNumber, function (response) {
				console.log("main level --> " + JSON.stringify(response));
				if (response.totalSize === 0){
					res.send("error");
				} else {
					var myUrl = "https://eu16.salesforce.com" + response.records[0].attributes.url;
					updateSpecificContactSFDC(myBody, oAuth, myUrl, function (response) {
						console.log("main level --> " + JSON.stringify(response));
						if (!JSON.stringify(response) || (JSON.stringify(response) === 'undefined')){
							res.send("ok");
						} else {
							res.send("error");
						}
					});
				}
			});
		}
		
	});
	
	
	


	
}



function checkValuesPostBind(req, res, next) {

	
	console.log("bind request");
	console.log((req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress);
	console.log(req.body);
	var myBody = req.body;
	var visitorID = myBody.visitorID;
	var myNumber = myBody.phone;
	
	
	loginSFDC(myNumber, function (response) {
		
		console.log("second level --> " + JSON.stringify(response));
		if (response.hasOwnProperty('error')){
			res.send("error");
		} else {
			var oAuth = "Bearer " + response.access_token;
			console.log("oAuth --> " + oAuth)
			retrieveContactSFDC(oAuth, myNumber, function (response) {
				console.log("main level --> " + JSON.stringify(response));
				if (response.totalSize === 0){
					res.send("error");
				} else {
					var myUrl = "https://eu16.salesforce.com" + response.records[0].attributes.url;
					updateFacebookSFDC(visitorID, oAuth, myUrl, function (response) {
						console.log("main level --> " + JSON.stringify(response));
						if (!JSON.stringify(response) || (JSON.stringify(response) === 'undefined')){
							retrieveSpecificContactSFDC(oAuth, myUrl, function (response) {
								console.log("main level --> " + JSON.stringify(response));
								if (response.totalSize === 0){
									res.send("error");
								} else {
									var responseToSend = {"name": response.Name, "status": response.Type__c, "facebookID": response.FacebookID__c};
									res.send(responseToSend);
								}
							});
						} else {
							res.send("error");
						}
					});
				}
			});
		}
		
	});
	
	
	


	
}





function pushToAWS(c){
	// console.log("pushing");
	var AWS = require("aws-sdk");
	let awsConfig = {
		"region": "us-east-2",
		"endpoint": "http://dynamodb.us-east-2.amazonaws.com",
		"accessKeyId": process.env.accessKeyIdDynamo, "secretAccessKey": process.env.secretAccessKeyIdDynamo
	};
	AWS.config.update(awsConfig);
	let docClient = new AWS.DynamoDB.DocumentClient();
	let save = function () {
		var input = {
			"phoneNumber": c.numero, "name": c.nome, "customerID": c.idCliente
		};
		var params = {
			TableName: "whatsappDB",
			Item:  input
		};
		docClient.put(params, function (err, data) {
			if (err) {
				console.log("users::save::error - " + JSON.stringify(err, null, 2));
			} else{
				// console.log("users::save::success" );
				// console.log("Here my DB --> " + JSON.stringify(myDatabase));
			}
		});
	}
	
	save();


}



function deleteAllAWS(phoneNumbers,tipeOfRequest){
	
	phoneNumbers.forEach(c => {
		// console.log("*****" + c.numero);
		var AWS = require("aws-sdk");
		let awsConfig = {
			"region": "us-east-2",
			"endpoint": "http://dynamodb.us-east-2.amazonaws.com",
			"accessKeyId": process.env.accessKeyIdDynamo, "secretAccessKey": process.env.secretAccessKeyIdDynamo
		};
		let docClient = new AWS.DynamoDB.DocumentClient();
		let deleteElement = function () {
			var params = {
				TableName: "whatsappDB",
				Key: {
					"phoneNumber": c.numero
				}
			};
			// console.log(params);
			docClient.delete(params, function (err, data) {
				if (err) {
					console.log("users::delete::error - " + JSON.stringify(err, null, 2));
				} else {
					// console.log("users::delete::success");
					
					var myLength = myDatabase.length;
					for (var index = 0; index < myLength; index ++){
						if(myDatabase[index].phoneNumber === c.numero){
							myDatabase.splice(index, 1);
							index = myLength;
						}
					}
					if(tipeOfRequest !== "blackList"){
						pushToAWS(c);
						var partialItem = {"phoneNumber": c.numero, "name": c.nome, "customerID": c.idCliente};
						myDatabase.push(partialItem);
						
					}
								
					// console.log("Here my DB --> " + JSON.stringify(myDatabase));
		
					
				}
			});

			
		}
		
		deleteElement();

		
	});
	
}


function checkValuesPost(req, res, next) {
	
	var tipeOfRequest = req.query.tipeOfRequest;
	var myPayload = req.body;
	
	console.log(req.originalUrl);
	// console.log(Buffer.from(JSON.stringify(myPayload)).toString('base64'));
	console.log("post request --> " + JSON.stringify(myPayload));
	console.log((req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress);
	
	
	res.send("ok");
	
	// console.log(" my tipeOfRequest --> " + tipeOfRequest);
	// console.log(" my myPayload --> " + JSON.stringify(myPayload));
	
	/******
	
	checkAuthentication(myPayload.bearer, function (status) {
		if (status) {
			console.log("you're in");
			deleteAllAWS(myPayload.phoneNumbers,tipeOfRequest);
			var myAnswer = JSON.stringify({"status":"okPost","tipeOfRequest":tipeOfRequest});
			res.send(myAnswer);
		} else {
			console.log("you're out!!!!");
			var myAnswer = JSON.stringify({"status":"koPost","tipeOfRequest":tipeOfRequest});
			res.send(myAnswer);
		}
	});
	
	
	******/


	
	
	
}






function checkAuthentication(token, callback) {
	
	var request = require('request');
	var oauth = "Bearer " + token;
	var body = {"status":["ONLINE"]};
	var url = 'https://lo.msghist.liveperson.net/messaging_history/api/account/27419514/agent-view/status';
	request.post({
    		url: url,
    		body: body,
    		json: true,
    		headers: {
        		'Content-Type': 'application/json',
			'Authorization': oauth
    		}
	}, function (e, r, b) {
		if(b.hasOwnProperty('_metadata')){
			callback (true);
		} else{
			callback(false);
		}

	});
	

}


function manageMyResponse(imei, dialogID){
	// console.log("imei --> " + imei);
	// console.log("dialogID --> " + dialogID);
	var myMessage = "";
	var myMirroredDB = myDatabase;
	var myIndex = -1;
	var myName = "";
	var myLength = myMirroredDB.length;
	for (var i = 0; i < myLength; i ++){
		if (myMirroredDB[i].phoneNumber === imei){
			var myName = myMirroredDB[i].name;
			myIndex = i
			i = myLength;
		}
	}
	
	if (myName !== ""){
		myMessage = "Buongiorno " + myName + "! A breve riceverai risposta da un nostro Agente!";
	} else{
		myMessage = "Buongiorno! A breve riceverai risposta da un nostro Agente!";
	}
	
	if (myIndex === -1){
		echoAgent.publishEvent({
			"dialogId": dialogID,
			"event": {
				"type": "ChatStateEvent",
				"chatState": "COMPOSING"
			}
		});
		setTimeout(()=>{
			echoAgent.publishEvent({
				dialogId: dialogID,
				event: {
					type: 'ContentEvent',
					contentType: 'text/plain',
					message: "Questo servizio non e' disponibile"
				}
			}, (e, resp) => {
   					if (e) { 
						console.error(e);
						console.error("error_sending_message");
    					} else{
						echoAgent.updateConversationField({
							conversationId: dialogID,
							conversationField: [{
								field: "ConversationStateField",
								conversationState: "CLOSE"
							}]
						});
					}
			});


			
		}, 3000);
	} else{
		console.log(myMessage);
		echoAgent.publishEvent({
			"dialogId": dialogID,
			"event": {
				"type": "ChatStateEvent",
				"chatState": "COMPOSING"
			}
		});
		setTimeout(()=>{
			console.log(myMessage);
			echoAgent.publishEvent({
				dialogId: dialogID,
				event: {
					type: 'ContentEvent',
					contentType: 'text/plain',
					message: myMessage
				}
			}, (e, resp) => {
   					if (e) { 
						console.error(e);
						console.error("error_sending_message");
    					} else{
						echoAgent.updateConversationField({
							conversationId: dialogID,
							conversationField: [{
								field: "ParticipantsChange",
								type: "REMOVE",
								role: "ASSIGNED_AGENT"
							},{
								field: "Skill",
								type: "UPDATE",
								skill: "1351654950"
							}]
						});
					}
			});
			
			
		}, 3000);
	}
	
						
	
}



function addToObject(data){
	var myResponse = [];
	data.Items.forEach(c => {
		var phone = "";
		var name = "";
		var customerID = "";
		if(c.hasOwnProperty('phoneNumber')){
			phone = c.phoneNumber;
		} else{
			phone = "";
		}
		if(c.hasOwnProperty('name')){
			name = c.name;
		} else{
			name = "";
		}
		if(c.hasOwnProperty('customerID')){
			customerID = c.customerID;
		} else{
			customerID = "";
		}
		var partialItem = {"phoneNumber": phone, "name": name, "customerID": customerID};
		myDatabase.push(partialItem);
	});
	// console.log("Here my DB --> " + JSON.stringify(myDatabase));
	
}


/*******

const Agent = require('node-agent-sdk').Agent;
var echoAgent = new Agent({
	accountId: '27419514',
	username: 'wa3333bot',
	appKey: process.env.appKey,
	secret: process.env.secret,
	accessToken: process.env.accessToken,
	accessTokenSecret: process.env.secretToken
});


echoAgent.on('connected', body =>{

	console.log("*****connected")
	console.log(JSON.stringify(body));
	
	fetchEverything();
	



});



echoAgent.on('routing.RoutingTaskNotification', body =>{

	if(!(body.changes.length < 1 || body.changes == undefined)){

		body.changes.forEach(c => {
			if (c.type === "UPSERT") {
				// console.log("upsert");
	
				c.result.ringsDetails.forEach(r => {
					if (r.ringState === 'WAITING') {


						echoAgent.updateRingState({
							"ringId": r.ringId,
							"ringState": "ACCEPTED"
						}, function(err) {
							if(err){
								console.log(err);
							} else{
								
								echoAgent.getUserProfile(c.result.consumerId, (e, profileResp) => {
									// console.log(JSON.stringify(profileResp));
									if (typeof profileResp !== 'undefined' && profileResp.length > 0) {
										var myLength = profileResp.length;
										for(var i = 0; i < myLength; i ++){
											if (profileResp[i].hasOwnProperty('type')){
												if (profileResp[i].type === "ctmrinfo"){
													if (profileResp[i].hasOwnProperty('info')){
														if (profileResp[i].info.hasOwnProperty('imei')){
															manageMyResponse(profileResp[i].info.imei, c.result.dialogId);
															i = myLength;
														}
													}
												}
											}
										}
									}
								});
								
							
							}
									 
						});


					}

				});
			}
		});

	}





});




echoAgent.on('ms.MessagingEventNotification', body =>{

	if(!(body.changes.length < 1 || body.changes == undefined)){
		body.changes.forEach(c => {
			if(c.hasOwnProperty('event')){
				if(c.event.hasOwnProperty('type')){
					if(c.event.type === "ContentEvent"){
							echoAgent.publishEvent({
							dialogId: body.dialogId,
							event: {type: "AcceptStatusEvent", status: "READ", sequenceList: c.sequence}
						});
					}
				}

			}

		});

	}

});




echoAgent.on('cqm.ExConversationChangeNotification', body =>{


	if(!(body.changes.length < 1 || body.changes == undefined)){
		body.changes.forEach(c => {

			if (c.type === "UPSERT") {
				
				var myLength = c.result.conversationDetails.participants.length;
				for (var i = 0; i < myLength; i++){
					if(c.result.conversationDetails.participants[i].role === "CONSUMER"){
						var myCustomer = c.result.conversationDetails.participants[i].id;
					}
				}
				echoAgent.getUserProfile(myCustomer, (e, profileResp) => {
					// console.log(JSON.stringify(profileResp));
					// console.log(e);
				});

			}
		});

	}




});



echoAgent.on('notification', body =>{

	// triggered by all the notification events.

});



echoAgent.on('error', body =>{

	console.log("");
	console.log("");
	console.log("");
	console.log("*****error")
	console.log(JSON.stringify(body));

});



echoAgent.on('closed', body => {
	console.log('socket closed', body);
	echoAgent.reconnect();
});


******/



setInterval(function() {
    https.get("https://git.heroku.com/marcowabot.git");
}, 300000); // every 5 minutes (300000) every 10 minutes (600000)












