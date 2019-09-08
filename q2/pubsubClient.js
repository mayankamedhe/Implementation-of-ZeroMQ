// weather update client in node.js
// connects SUB socket to tcp://localhost:5556
// collects weather updates and finds avg temp in zipcode

var zmq = require('zeromq');

// Socket to talk to server
var subscriber = zmq.socket('sub');

var serverTime = "";
var timeAfter;
var timeBefore = (new Date).getTime();

subscriber.subscribe("getTime_ms");

subscriber.on('message', function(topic, message)
{
    var serverTime = Number(message.toString());    

    var timeAfter = (new Date).getTime();

    console.log();
    console.log(`Time before: ${timeBefore}`);
    console.log(`Server time: ${serverTime}`);
    console.log(`Time after:  ${timeAfter}`);
    console.log();
    console.log(`Time difference: ${timeAfter - timeBefore}`);
    console.log(`"Corrected" time for client: ${serverTime + Math.floor((timeAfter - timeBefore)/2)}`);

    subscriber.close()
    process.exit(0);
});

subscriber.connect("tcp://127.0.0.1:16540");