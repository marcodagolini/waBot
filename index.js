


require('dotenv').config()




var events = require('events');
var emitter = new events.EventEmitter();
var https = require('https');
var express = require('express');



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


app.get('/add', checkValues);


function checkValues(req, res, next) {
	var telefono = req.query.telefono;
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












