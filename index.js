



require('dotenv').config()



var AWS = require("aws-sdk");
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
		
		console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Content-Type', 'text/plain');
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/add', checkValuesGet);

app.post('/add', checkValuesPost);


function checkValuesGet(req, res, next) {
	var tipeOfRequest = req.query.tipeOfRequest;
	var myPayload = req.query.myPayload;
	
	console.log(" my tipeOfRequest --> " + tipeOfRequest);
	console.log(" my myPayload --> " + JSON.stringify(myPayload));
	
	res.send(["okGet"]);
}


function pushToAWS(c){
	console.log("pushing");
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
				console.log("users::save::success" );
				console.log("Here my DB --> " + JSON.stringify(myDatabase));
			}
		});
	}
	
	save();


}



function deleteAllAWS(phoneNumbers,tipeOfRequest){
	
	phoneNumbers.forEach(c => {
		console.log("*****" + c.numero);
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
			console.log(params);
			docClient.delete(params, function (err, data) {
				if (err) {
					console.log("users::delete::error - " + JSON.stringify(err, null, 2));
				} else {
					console.log("users::delete::success");
					
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
						console.log("Here my DB --> " + JSON.stringify(myDatabase));

					}
								
							
					
				}
			});

			
		}
		
		deleteElement();

		
	});
	
}


function checkValuesPost(req, res, next) {
	
	var tipeOfRequest = req.query.tipeOfRequest;
	var myPayload = req.body;
	
	console.log(" my tipeOfRequest --> " + tipeOfRequest);
	console.log(" my myPayload --> " + JSON.stringify(myPayload));
	
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


	
	
	
}



function checkAuthentication(token, callback) {
	
	var request = require('request');
	var oauth = "Bearer " + token;
	var body = {"status":["ONLINE"]};
	var url = 'https://lo.msghist.liveperson.net/messaging_history/api/account/13099967/agent-view/status';
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
	console.log("Here my DB --> " + JSON.stringify(myDatabase));
	
}




const Agent = require('node-agent-sdk').Agent;
var echoAgent = new Agent({
	accountId: '31554357',
	username: 'waBot',
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
				console.log("upsert");
				echoAgent.getUserProfile(c.result.consumerId, (e, profileResp) => {
					console.log(JSON.stringify(profileResp));
					console.log(e);
				});

				
				c.result.ringsDetails.forEach(r => {
					if (r.ringState === 'WAITING') {


						echoAgent.updateRingState({
							"ringId": r.ringId,
							"ringState": "ACCEPTED"
						}, (e, resp) => console.log(resp));

                        			echoAgent.publishEvent({
                            				"dialogId": c.result.dialogId,
                            				"event": {
                                				"type": "ChatStateEvent",
                                				"chatState": "COMPOSING"
                            				}
                        			});
						setTimeout(()=>{
                        				echoAgent.publishEvent({
                            					dialogId: c.result.dialogId,
                            					event: {
                                					type: 'ContentEvent',
                                					contentType: 'text/plain',
									message: 'Welcome message'
                            					}
                        				});
						}, 3000);

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
					console.log(JSON.stringify(profileResp));
					console.log(e);
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




setInterval(function() {
    https.get("https://git.heroku.com/marcowabot.git");
}, 300000); // every 5 minutes (300000) every 10 minutes (600000)












