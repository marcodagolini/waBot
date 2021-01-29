

require('dotenv').config()

var myStoredResponse = {
	"light":"red",
	"error":"",
	"value1":"",
	"value2":"",
	"value3":""
}



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
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.raw({
    type: 'application/x-www-form-urlencoded',
    limit: '50mb'
}));


/****
app.use(
  bodyParser.raw({ type : 'application/x-www-form-urlencoded' }),
  function(req, res, next) {
    try {
      req.body = JSON.parse(req.body)
    } catch(e) {
      req.body = require('qs').parse(req.body.toString());
    }
    next();
  }
);
****/




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
app.get('/getValues', getValues)
app.post('/push', checkValuesPostPush);
app.post('/bind', checkValuesPostBind);
app.post('/outboundCall', outboundCall);
app.post('/stopOutboundCall', stopOutboundCall);
app.post('/getMetrics', getMetrics);
app.post('/test', testPost)
app.post('/checkFile', checkFile);


app.post('/add1', checkValuesPost);
app.post('/add2', checkValuesPost);
app.post('/add3', checkValuesPost);
app.post('/add4', checkValuesPost);
app.post('/add5', checkValuesPost);





function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}


function getValues(req, res, next) {
	
	console.log(req.originalUrl);
	// console.log(binary);
	// console.log("body --> " + Buffer.from(JSON.stringify(myPayload)).toString('base64'));
	// console.log("post request --> " + JSON.stringify(myPayload));
	console.log("IP --> " + (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress);
	console.log(JSON.stringify(req.headers));
	
	myStoredResponse.light = "red";
	var myCounter = 0;
	
	var refreshIntervalId = setInterval(function(){
		console.log("inside loop");
		myCounter = myCounter + 1
		if(myStoredResponse.light === "green"){
			console.log("i got an answer!!!");
			clearInterval(refreshIntervalId);
			res.send(myStoredResponse);
			myStoredResponse.light = "red";
		} else{
			console.log("i dont have an answer");
		}
		if(myCounter > 4){
			console.log("exiting loop");
			myStoredResponse.error = "server error";
			myStoredResponse.light = "red";
			clearInterval(refreshIntervalId);
			res.send(myStoredResponse);
		}
	}, 5000);
	
	
}





function checkFile(req, res, next) {
	
	console.log(req.originalUrl);
	// console.log(binary);
	// console.log("body --> " + Buffer.from(JSON.stringify(myPayload)).toString('base64'));
	// console.log("post request --> " + JSON.stringify(myPayload));
	console.log("IP --> " + (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress);
	console.log(JSON.stringify(req.headers));
	
	
	
	
	// console.log(req.body);
	
	
	
	
	var myImage = Buffer.from(req.body).toString('base64');
	// console.log(Buffer.from(req.body).toString('binary'));
	
	var request = require('request');
	
	
	var url = 'http://52.166.95.161:5002/api/server';
	var body = {"type":"predict", "image":myImage};
	request.post({
    		url: url,
    		json: true,
		body: body,
    		headers: {
        		'X-My-App-Auth-Token': '76j0lEi7d7oj7JZolE4K80ckMMCtK9EG'
    		}
	}, function (e, r, b) {
		console.log(JSON.stringify(b));
		if(b){
			if(JSON.stringify(b).indexOf("Error") > -1){
				myStoredResponse.light = "green";
				myStoredResponse.error = "file not supported";
				res.send({"error":"file not supported"});
			} else{
				myStoredResponse.light = "green";
				myStoredResponse.error = "";
				myStoredResponse.value1 = b.response["pigmented benign keratosis"];
				myStoredResponse.value2 = b.response.nevus;
				myStoredResponse.value3 = b.response.melanoma;
				res.send(b.response);
			}
			
		} else{
			myStoredResponse.light = "green";
			myStoredResponse.error = "file not supported";
			res.send({"error":"file not supported"})
		}
		

	});
	

	
	
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
	
	console.log(req.headers.cookie);
	res.send("okGet");
	
}

function testPost(req, res, next) {
	
	
	console.log(req.originalUrl);
	// console.log(binary);
	// console.log("body --> " + Buffer.from(JSON.stringify(myPayload)).toString('base64'));
	// console.log("post request --> " + JSON.stringify(myPayload));
	console.log("IP --> " + (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress);
	console.log(JSON.stringify(req.headers));
	
	
	
	
	// console.log(req.body);
	
	const queryString = require('query-string');
	
	
	var myImage = Buffer.from(req.body).toString('ascii');
	// myImage = myImage.replace(/%2B/g, "+").replace(/%3B/g, "/").replace(/%3D/g, "=");
	
	const parsed = queryString.parse(myImage);
	
	var mySAML = parsed.SAMLResponse
	
	console.log(mySAML);
	
	// console.log(req.body);
	// console.log(myImage);
	
	var encodedString = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c2FtbDJwOlJlc3BvbnNlIERlc3RpbmF0aW9uPSJodHRwczovL21hcmNvd2Fib3QuaGVyb2t1YXBwLmNvbS90ZXN0IiBJRD0iaWQ2NDIyNjM2ODg4NjcwOTU4OTEyNzI3NjkiIElzc3VlSW5zdGFudD0iMjAyMS0wMS0yN1QxNzoyMjozNS44ODFaIiBWZXJzaW9uPSIyLjAiIHhtbG5zOnNhbWwycD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIiB4bWxuczp4cz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiPjxzYW1sMjpJc3N1ZXIgRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6bmFtZWlkLWZvcm1hdDplbnRpdHkiIHhtbG5zOnNhbWwyPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIj5odHRwOi8vd3d3Lm9rdGEuY29tL2V4azRmNjUxOWRTaXF0T3ZCNWQ2PC9zYW1sMjpJc3N1ZXI+PGRzOlNpZ25hdHVyZSB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI+PGRzOlNpZ25lZEluZm8+PGRzOkNhbm9uaWNhbGl6YXRpb25NZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48ZHM6U2lnbmF0dXJlTWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxkc2lnLW1vcmUjcnNhLXNoYTI1NiIvPjxkczpSZWZlcmVuY2UgVVJJPSIjaWQ2NDIyNjM2ODg4NjcwOTU4OTEyNzI3NjkiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiPjxlYzpJbmNsdXNpdmVOYW1lc3BhY2VzIFByZWZpeExpc3Q9InhzIiB4bWxuczplYz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94bWwtZXhjLWMxNG4jIi8+PC9kczpUcmFuc2Zvcm0+PC9kczpUcmFuc2Zvcm1zPjxkczpEaWdlc3RNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGVuYyNzaGEyNTYiLz48ZHM6RGlnZXN0VmFsdWU+S0xGUFoxdkl3VU5HaTVrQ3dIZldFVTlDZTFiaGZ1MFlHZk92eDVSNGJ4cz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU+WHcyN0ZpRWduM0djWDUrSHMydlpkZ29OUFpVWnJqRkdyb0RMd1J6Y3JCNmN0YWRmdUdwWm90QlFIWW96NnlZS2VZOEhiYXNCUGljdnVXRlYzNXl2ckFvUFpRSFFJVlhEVUFpOXVKZkFrajlYRW5FRHRxRUYxSmE5SzU5U2JzVTRpT0FoRW1hR3NUQnRTUzJ3N3NVOEhqZzVqTk1LcHVxTFI4eWVhVlJINU5oeEdVZnZsVGxmekZBNTk0aDJYeGVmSitJRDY2YllTbVp5MnUxSWkwN2dYME95c1NxNFpWVWRMVjBxV2dXUjVSQUd5QXovTklnM1paNnZzVzRhdEl0c2Fxa1dtaEFvcUcrYm9oOG56YWRZSVBXbDNWeWtXaFlGR3NBQjlycklNSVdxNWJ6N2hsRjVIVFl5WEY2WmludFZJVjVIZ3BwSU5FQWhUQ0xMVXB3SlpnPT08L2RzOlNpZ25hdHVyZVZhbHVlPjxkczpLZXlJbmZvPjxkczpYNTA5RGF0YT48ZHM6WDUwOUNlcnRpZmljYXRlPk1JSURvRENDQW9pZ0F3SUJBZ0lHQVhkQTROLzBNQTBHQ1NxR1NJYjNEUUVCQ3dVQU1JR1FNUXN3Q1FZRFZRUUdFd0pWVXpFVE1CRUcKQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVXTUJRR0ExVUVCd3dOVTJGdUlFWnlZVzVqYVhOamJ6RU5NQXNHQTFVRUNnd0VUMnQwWVRFVQpNQklHQTFVRUN3d0xVMU5QVUhKdmRtbGtaWEl4RVRBUEJnTlZCQU1NQ0dSbGFXeGhZbk15TVJ3d0dnWUpLb1pJaHZjTkFRa0JGZzFwCmJtWnZRRzlyZEdFdVkyOXRNQjRYRFRJeE1ERXlOakl5TkRVMU5Wb1hEVE14TURFeU5qSXlORFkxTlZvd2daQXhDekFKQmdOVkJBWVQKQWxWVE1STXdFUVlEVlFRSURBcERZV3hwWm05eWJtbGhNUll3RkFZRFZRUUhEQTFUWVc0Z1JuSmhibU5wYzJOdk1RMHdDd1lEVlFRSwpEQVJQYTNSaE1SUXdFZ1lEVlFRTERBdFRVMDlRY205MmFXUmxjakVSTUE4R0ExVUVBd3dJWkdWcGJHRmljekl4SERBYUJna3Foa2lHCjl3MEJDUUVXRFdsdVptOUFiMnQwWVM1amIyMHdnZ0VpTUEwR0NTcUdTSWIzRFFFQkFRVUFBNElCRHdBd2dnRUtBb0lCQVFDbDhva0sKZlMrK3lseVlIODBjbmhwQUZoalhacWhBZkxRNy9TS3l1eWl6WmpNOGU4NzVoakRlQmNMWHpzYkNMOU43aWdzQVNwU2RXejQxckUrNwpKd1VnUDNEOFBhNVIzNHZkdFlwb3Q3djBCR1RaeXpWdGVuM21aWE9McUhXYWFJcW51NzlFUytaeWRGOEtrZ24rQ0JSRzNvcERZRFhoCmxFUnpHZDRhTThyNzNqT0tINEFSeCsyWnFmQmhXbWdZdVdxd29NRmFBUWJEeTJma0hjRlBERjdOZlJHTkhaN0VzcWo4YVNSSm11VFgKNlNRUmZ3K1NwTnlTK21SSVNtK25NTi9TWkRjUkVwZ01oczhhOXN5SDZHT1k3VWFyR2FwcWEzaTFYeCtPakJPNHpXcUpHaVc1bFVseQpxb05TNmRRcmJPWGVlcmQ2MVM5NktXK296Zi84TUhoWkFnTUJBQUV3RFFZSktvWklodmNOQVFFTEJRQURnZ0VCQUloaENaKzlPSG1lCjJ0bHB6Q293YnlwYWE4YU5nTjdvd0ExR3daWmI5cVRuRGE2aW9QM215QkpVRmZOakkvTi8rK2dYVDhuRkMweHZKdzdzYVFLVmUwMHQKYjl2QnBmMWVBTVQ3dEE4TCs2R0xCZ2k2eXdmRERUSmdrME8yM3VnUFdXbncvakNOR2h5blZWa1NZbGFmV1p3ZEM1SDNJMFRwSVFZSApyUVBaYWVKNEZIcXdyZ2lGeGtya050UndWRmtZYk4vL3M2bGVJUGlnTjhKLzVMZ3lvcWY2RDNUZk5BQzBTK0xranVlbXJGcm92ajdlCmxHcmszWVY5OEJ6SHRGUExCbzZTVHZmU0k4YUdmMU1wQWl4N1lZRWlqOEFJZ2VjQ2Y1MCt0VGxkV2xPd0dHb3RkWWQ0WDF1c2hCWTAKdzFydWtoWUpNb21GOG1qWGt0d2FFbVZvUHJRPTwvZHM6WDUwOUNlcnRpZmljYXRlPjwvZHM6WDUwOURhdGE+PC9kczpLZXlJbmZvPjwvZHM6U2lnbmF0dXJlPjxzYW1sMnA6U3RhdHVzIHhtbG5zOnNhbWwycD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDJwOlN0YXR1c0NvZGUgVmFsdWU9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDpzdGF0dXM6U3VjY2VzcyIvPjwvc2FtbDJwOlN0YXR1cz48c2FtbDI6QXNzZXJ0aW9uIElEPSJpZDY0MjI2MzY4ODkzOTU5MDE5NDM5MzM5MTciIElzc3VlSW5zdGFudD0iMjAyMS0wMS0yN1QxNzoyMjozNS44ODFaIiBWZXJzaW9uPSIyLjAiIHhtbG5zOnNhbWwyPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIiB4bWxuczp4cz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiPjxzYW1sMjpJc3N1ZXIgRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6bmFtZWlkLWZvcm1hdDplbnRpdHkiIHhtbG5zOnNhbWwyPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIj5odHRwOi8vd3d3Lm9rdGEuY29tL2V4azRmNjUxOWRTaXF0T3ZCNWQ2PC9zYW1sMjpJc3N1ZXI+PGRzOlNpZ25hdHVyZSB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI+PGRzOlNpZ25lZEluZm8+PGRzOkNhbm9uaWNhbGl6YXRpb25NZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48ZHM6U2lnbmF0dXJlTWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxkc2lnLW1vcmUjcnNhLXNoYTI1NiIvPjxkczpSZWZlcmVuY2UgVVJJPSIjaWQ2NDIyNjM2ODg5Mzk1OTAxOTQzOTMzOTE3Ij48ZHM6VHJhbnNmb3Jtcz48ZHM6VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI2VudmVsb3BlZC1zaWduYXR1cmUiLz48ZHM6VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94bWwtZXhjLWMxNG4jIj48ZWM6SW5jbHVzaXZlTmFtZXNwYWNlcyBQcmVmaXhMaXN0PSJ4cyIgeG1sbnM6ZWM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjwvZHM6VHJhbnNmb3JtPjwvZHM6VHJhbnNmb3Jtcz48ZHM6RGlnZXN0TWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxlbmMjc2hhMjU2Ii8+PGRzOkRpZ2VzdFZhbHVlPk9ZK29MRTBmVllsVmZCYUpHNTg4aEhBa05QWTd3L3ZGYWFRbVRhWThpUXc9PC9kczpEaWdlc3RWYWx1ZT48L2RzOlJlZmVyZW5jZT48L2RzOlNpZ25lZEluZm8+PGRzOlNpZ25hdHVyZVZhbHVlPk5yMUo4bzg5K2FhTC83RzZ2V3pha2ZPUDlOL2NSb1RTUkh2SnNub20vcC96eTIyOERVaitCTldQa1FUT1cvZzE3TW9CdGlCUWxZTUUyU2doSVUvOFV3TjR5ZU5aUWE5dHJSV3FpWFMxRGF4NmZUZzlNK0sramJVb0hyeVlURWk3eGlISHd0RUpOQjVzUUlDRmxseTc4Z3hTWTIzdnpmU29xZXhBZVBZMGFoNFFvVzRkemdEY3JVVk5kbzRwUEpld28za1VLa2NBM0djay83Z3JPUTVaVjA0Z1JsVnU1V1hjb2NtM1o1dnNvNis0TUc0VUNSbzVlckF3WjI1ZkRCVzVxNlYxWGhSNWVRTkduaXJONzNWaEtTSitEdjFNZ2dnZkJhRG11dCtiQ1RKTk1ha0Y0VlJhL3M2eE1JNTA0a3JDaTBqMDZoZ2ZyZ2toWkQ0eUtYbW83Zz09PC9kczpTaWduYXR1cmVWYWx1ZT48ZHM6S2V5SW5mbz48ZHM6WDUwOURhdGE+PGRzOlg1MDlDZXJ0aWZpY2F0ZT5NSUlEb0RDQ0FvaWdBd0lCQWdJR0FYZEE0Ti8wTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdRTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHCkExVUVDQXdLUTJGc2FXWnZjbTVwWVRFV01CUUdBMVVFQnd3TlUyRnVJRVp5WVc1amFYTmpiekVOTUFzR0ExVUVDZ3dFVDJ0MFlURVUKTUJJR0ExVUVDd3dMVTFOUFVISnZkbWxrWlhJeEVUQVBCZ05WQkFNTUNHUmxhV3hoWW5NeU1Sd3dHZ1lKS29aSWh2Y05BUWtCRmcxcApibVp2UUc5cmRHRXVZMjl0TUI0WERUSXhNREV5TmpJeU5EVTFOVm9YRFRNeE1ERXlOakl5TkRZMU5Wb3dnWkF4Q3pBSkJnTlZCQVlUCkFsVlRNUk13RVFZRFZRUUlEQXBEWVd4cFptOXlibWxoTVJZd0ZBWURWUVFIREExVFlXNGdSbkpoYm1OcGMyTnZNUTB3Q3dZRFZRUUsKREFSUGEzUmhNUlF3RWdZRFZRUUxEQXRUVTA5UWNtOTJhV1JsY2pFUk1BOEdBMVVFQXd3SVpHVnBiR0ZpY3pJeEhEQWFCZ2txaGtpRwo5dzBCQ1FFV0RXbHVabTlBYjJ0MFlTNWpiMjB3Z2dFaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQkR3QXdnZ0VLQW9JQkFRQ2w4b2tLCmZTKyt5bHlZSDgwY25ocEFGaGpYWnFoQWZMUTcvU0t5dXlpelpqTThlODc1aGpEZUJjTFh6c2JDTDlON2lnc0FTcFNkV3o0MXJFKzcKSndVZ1AzRDhQYTVSMzR2ZHRZcG90N3YwQkdUWnl6VnRlbjNtWlhPTHFIV2FhSXFudTc5RVMrWnlkRjhLa2duK0NCUkczb3BEWURYaApsRVJ6R2Q0YU04cjczak9LSDRBUngrMlpxZkJoV21nWXVXcXdvTUZhQVFiRHkyZmtIY0ZQREY3TmZSR05IWjdFc3FqOGFTUkptdVRYCjZTUVJmdytTcE55UyttUklTbStuTU4vU1pEY1JFcGdNaHM4YTlzeUg2R09ZN1VhckdhcHFhM2kxWHgrT2pCTzR6V3FKR2lXNWxVbHkKcW9OUzZkUXJiT1hlZXJkNjFTOTZLVytvemYvOE1IaFpBZ01CQUFFd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFJaGhDWis5T0htZQoydGxwekNvd2J5cGFhOGFOZ043b3dBMUd3WlpiOXFUbkRhNmlvUDNteUJKVUZmTmpJL04vKytnWFQ4bkZDMHh2Snc3c2FRS1ZlMDB0CmI5dkJwZjFlQU1UN3RBOEwrNkdMQmdpNnl3ZkREVEpnazBPMjN1Z1BXV253L2pDTkdoeW5WVmtTWWxhZldad2RDNUgzSTBUcElRWUgKclFQWmFlSjRGSHF3cmdpRnhrcmtOdFJ3VkZrWWJOLy9zNmxlSVBpZ044Si81TGd5b3FmNkQzVGZOQUMwUytMa2p1ZW1yRnJvdmo3ZQpsR3JrM1lWOThCekh0RlBMQm82U1R2ZlNJOGFHZjFNcEFpeDdZWUVpajhBSWdlY0NmNTArdFRsZFdsT3dHR290ZFlkNFgxdXNoQlkwCncxcnVraFlKTW9tRjhtalhrdHdhRW1Wb1ByUT08L2RzOlg1MDlDZXJ0aWZpY2F0ZT48L2RzOlg1MDlEYXRhPjwvZHM6S2V5SW5mbz48L2RzOlNpZ25hdHVyZT48c2FtbDI6U3ViamVjdCB4bWxuczpzYW1sMj0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI+PHNhbWwyOk5hbWVJRCBGb3JtYXQ9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjEuMTpuYW1laWQtZm9ybWF0OnVuc3BlY2lmaWVkIj5tYXJjbzwvc2FtbDI6TmFtZUlEPjxzYW1sMjpTdWJqZWN0Q29uZmlybWF0aW9uIE1ldGhvZD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmNtOmJlYXJlciI+PHNhbWwyOlN1YmplY3RDb25maXJtYXRpb25EYXRhIE5vdE9uT3JBZnRlcj0iMjAyMS0wMS0yN1QxNzoyNzozNS44ODFaIiBSZWNpcGllbnQ9Imh0dHBzOi8vbWFyY293YWJvdC5oZXJva3VhcHAuY29tL3Rlc3QiLz48L3NhbWwyOlN1YmplY3RDb25maXJtYXRpb24+PC9zYW1sMjpTdWJqZWN0PjxzYW1sMjpDb25kaXRpb25zIE5vdEJlZm9yZT0iMjAyMS0wMS0yN1QxNzoxNzozNS44ODFaIiBOb3RPbk9yQWZ0ZXI9IjIwMjEtMDEtMjdUMTc6Mjc6MzUuODgxWiIgeG1sbnM6c2FtbDI9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphc3NlcnRpb24iPjxzYW1sMjpBdWRpZW5jZVJlc3RyaWN0aW9uPjxzYW1sMjpBdWRpZW5jZT5kZWlsYWJzLW9yZy01MzEyOTU3PC9zYW1sMjpBdWRpZW5jZT48L3NhbWwyOkF1ZGllbmNlUmVzdHJpY3Rpb24+PC9zYW1sMjpDb25kaXRpb25zPjxzYW1sMjpBdXRoblN0YXRlbWVudCBBdXRobkluc3RhbnQ9IjIwMjEtMDEtMjdUMTU6MTA6NTguNjE2WiIgU2Vzc2lvbkluZGV4PSJpZDE2MTE3NjgxNTU4NzkuNzc2Mjg4OTA0IiB4bWxuczpzYW1sMj0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI+PHNhbWwyOkF1dGhuQ29udGV4dD48c2FtbDI6QXV0aG5Db250ZXh0Q2xhc3NSZWY+dXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQ8L3NhbWwyOkF1dGhuQ29udGV4dENsYXNzUmVmPjwvc2FtbDI6QXV0aG5Db250ZXh0Pjwvc2FtbDI6QXV0aG5TdGF0ZW1lbnQ+PHNhbWwyOkF0dHJpYnV0ZVN0YXRlbWVudCB4bWxuczpzYW1sMj0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI+PHNhbWwyOkF0dHJpYnV0ZSBOYW1lPSJzaXRlSWQiIE5hbWVGb3JtYXQ9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphdHRybmFtZS1mb3JtYXQ6dW5zcGVjaWZpZWQiPjxzYW1sMjpBdHRyaWJ1dGVWYWx1ZSB4bWxuczp4cz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhzaTp0eXBlPSJ4czpzdHJpbmciPjMxNTU0MzU3PC9zYW1sMjpBdHRyaWJ1dGVWYWx1ZT48L3NhbWwyOkF0dHJpYnV0ZT48c2FtbDI6QXR0cmlidXRlIE5hbWU9ImxvZ2luTmFtZSIgTmFtZUZvcm1hdD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmF0dHJuYW1lLWZvcm1hdDp1bnNwZWNpZmllZCI+PHNhbWwyOkF0dHJpYnV0ZVZhbHVlIHhtbG5zOnhzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSIgeG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIgeHNpOnR5cGU9InhzOnN0cmluZyI+bWFyY288L3NhbWwyOkF0dHJpYnV0ZVZhbHVlPjwvc2FtbDI6QXR0cmlidXRlPjwvc2FtbDI6QXR0cmlidXRlU3RhdGVtZW50Pjwvc2FtbDI6QXNzZXJ0aW9uPjwvc2FtbDJwOlJlc3BvbnNlPg==";
	
	var myXML = Buffer.from(mySAML, 'base64').toString();
	// console.log(myXML);
	
	
	
	// var public_cert = "MIIDoDCCAoigAwIBAgIGAXdA4N/0MA0GCSqGSIb3DQEBCwUAMIGQMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEUMBIGA1UECwwLU1NPUHJvdmlkZXIxETAPBgNVBAMMCGRlaWxhYnMyMRwwGgYJKoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMB4XDTIxMDEyNjIyNDU1NVoXDTMxMDEyNjIyNDY1NVowgZAxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRYwFAYDVQQHDA1TYW4gRnJhbmNpc2NvMQ0wCwYDVQQKDARPa3RhMRQwEgYDVQQLDAtTU09Qcm92aWRlcjERMA8GA1UEAwwIZGVpbGFiczIxHDAaBgkqhkiG9w0BCQEWDWluZm9Ab2t0YS5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCl8okKfS++ylyYH80cnhpAFhjXZqhAfLQ7/SKyuyizZjM8e875hjDeBcLXzsbCL9N7igsASpSdWz41rE+7JwUgP3D8Pa5R34vdtYpot7v0BGTZyzVten3mZXOLqHWaaIqnu79ES+ZydF8Kkgn+CBRG3opDYDXhlERzGd4aM8r73jOKH4ARx+2ZqfBhWmgYuWqwoMFaAQbDy2fkHcFPDF7NfRGNHZ7Esqj8aSRJmuTX6SQRfw+SpNyS+mRISm+nMN/SZDcREpgMhs8a9syH6GOY7UarGapqa3i1Xx+OjBO4zWqJGiW5lUlyqoNS6dQrbOXeerd61S96KW+ozf/8MHhZAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAIhhCZ+9OHme2tlpzCowbypaa8aNgN7owA1GwZZb9qTnDa6ioP3myBJUFfNjI/N/++gXT8nFC0xvJw7saQKVe00tb9vBpf1eAMT7tA8L+6GLBgi6ywfDDTJgk0O23ugPWWnw/jCNGhynVVkSYlafWZwdC5H3I0TpIQYHrQPZaeJ4FHqwrgiFxkrkNtRwVFkYbN//s6leIPigN8J/5Lgyoqf6D3TfNAC0S+LkjuemrFrovj7elGrk3YV98BzHtFPLBo6STvfSI8aGf1MpAix7YYEij8AIgecCf50+tTldWlOwGGotdYd4X1ushBY0w1rukhYJMomF8mjXktwaEmVoPrQ=";
	
	var public_cert = "MIIDoDCCAoigAwIBAgIGAXdA4N/0MA0GCSqGSIb3DQEBCwUAMIGQMQswCQYDVQQGEwJVUzETMBEG\nA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEU\nMBIGA1UECwwLU1NPUHJvdmlkZXIxETAPBgNVBAMMCGRlaWxhYnMyMRwwGgYJKoZIhvcNAQkBFg1p\nbmZvQG9rdGEuY29tMB4XDTIxMDEyNjIyNDU1NVoXDTMxMDEyNjIyNDY1NVowgZAxCzAJBgNVBAYT\nAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRYwFAYDVQQHDA1TYW4gRnJhbmNpc2NvMQ0wCwYDVQQK\nDARPa3RhMRQwEgYDVQQLDAtTU09Qcm92aWRlcjERMA8GA1UEAwwIZGVpbGFiczIxHDAaBgkqhkiG\n9w0BCQEWDWluZm9Ab2t0YS5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCl8okK\nfS++ylyYH80cnhpAFhjXZqhAfLQ7/SKyuyizZjM8e875hjDeBcLXzsbCL9N7igsASpSdWz41rE+7\nJwUgP3D8Pa5R34vdtYpot7v0BGTZyzVten3mZXOLqHWaaIqnu79ES+ZydF8Kkgn+CBRG3opDYDXh\nlERzGd4aM8r73jOKH4ARx+2ZqfBhWmgYuWqwoMFaAQbDy2fkHcFPDF7NfRGNHZ7Esqj8aSRJmuTX\n6SQRfw+SpNyS+mRISm+nMN/SZDcREpgMhs8a9syH6GOY7UarGapqa3i1Xx+OjBO4zWqJGiW5lUly\nqoNS6dQrbOXeerd61S96KW+ozf/8MHhZAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAIhhCZ+9OHme\n2tlpzCowbypaa8aNgN7owA1GwZZb9qTnDa6ioP3myBJUFfNjI/N/++gXT8nFC0xvJw7saQKVe00t\nb9vBpf1eAMT7tA8L+6GLBgi6ywfDDTJgk0O23ugPWWnw/jCNGhynVVkSYlafWZwdC5H3I0TpIQYH\nrQPZaeJ4FHqwrgiFxkrkNtRwVFkYbN//s6leIPigN8J/5Lgyoqf6D3TfNAC0S+LkjuemrFrovj7e\nlGrk3YV98BzHtFPLBo6STvfSI8aGf1MpAix7YYEij8AIgecCf50+tTldWlOwGGotdYd4X1ushBY0\nw1rukhYJMomF8mjXktwaEmVoPrQ=";
	
	if(myXML.indexOf(public_cert) > -1){
		console.log("verified!")
	} else{
		console.log("NOT verified!")
	}
	
	const crypto = require('crypto');
	const fs = require('fs')
	
	let pem = fs.readFileSync('publickey.crt')
        let publicKey = pem.toString('ascii')
        const verifier = crypto.createVerify('RSA-SHA256')
	
	verifier.update(mySAML, 'ascii')
	
	const publicKeyBuf = new Buffer.from(publicKey, 'ascii')
        const signatureBuf = new Buffer.from(mySAML.toString('hex'), 'hex')
	
	console.log(publicKeyBuf);
	console.log(signatureBuf);
	
        const result = verifier.verify(publicKeyBuf, mySAML.toString('hex'))
	
	console.log("******* signature validation: " + result);
	
	
	
	
	
	var myResponse = '<html><head><script type="text/javascript">console.log("okokokok");document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";</script><title>1685908</title></head><body></body></html>'
	
	res.set('Content-Type', 'text/html');
	res.cookie('cookieName', 'cookieValue')
	res.send(Buffer.from(myResponse));


	
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












