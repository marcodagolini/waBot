require('dotenv').config()



var events = require('events');
var emitter = new events.EventEmitter();



var https = require('https');
var express = require('express');
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

	console.log("");
	console.log("");
	console.log("");
	console.log("*****connected")
	console.log(JSON.stringify(body));
	echoAgent.setAgentState({availability: "ONLINE"});
	echoAgent.subscribeExConversations({
		'agentIds': [echoAgent.agentId],
		'convState': ['OPEN']
	}, (e, resp) => console.log('subscribed successfully', echoAgent.conf.id || ''));
	echoAgent.subscribeRoutingTasks({});

});



echoAgent.on('routing.RoutingTaskNotification', body =>{

	if(!(body.changes.length < 1 || body.changes == undefined)){

		body.changes.forEach(c => {
			console.log("inside2");
			if (c.type === "UPSERT") {
				console.log("upsert");
				echoAgent.getUserProfile(c.result.consumerId, (e, profileResp) => {
					console.log(JSON.stringify(profileResp));
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



});




echoAgent.on('cqm.ExConversationChangeNotification', body =>{


	if(!(body.changes.length < 1 || body.changes == undefined)){

		console.log("inside1");

		body.changes.forEach(c => {

			if (c.type === "UPSERT") {
				console.log("upsert");
				
				var myLength = c.result.conversationDetails.participants.length;
				for (var i = 0; i < myLength; i++){
					if(c.result.conversationDetails.participants[i].role === "CONSUMER"){
						var myCustomer = c.result.conversationDetails.participants[i].id;
					}
				}
        echoAgent.getUserProfile(myCustomer, (e, profileResp) => {
          console.log(JSON.stringify(profileResp));
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




echoAgent.on('closed', body =>{

	console.log("");
	console.log("");
	console.log("");
	console.log("*****closed")
	console.log(JSON.stringify(body));

});










