var zmq = require('zeromq');

// socket to talk to server
var requester = zmq.socket('req');

var serverTime = "";
var timeAfter;
var timeBefore = (new Date).getTime();

requester.on("message", function(reply)
{
    console.log(`Received reply: '${reply.toString()}'`);

    serverTime = Number(reply.toString());

    timeAfter = (new Date).getTime();

    console.log();
    console.log(`Time before: ${timeBefore}`);
    console.log(`Server time: ${serverTime}`);
    console.log(`Time after:  ${timeAfter}`);
    console.log();
    console.log(`Time difference: ${timeAfter - timeBefore}`);
    console.log(`"Corrected" time for client: ${serverTime + Math.floor((timeAfter - timeBefore)/2)}`);

    requester.close();
});

console.log("Connecting to server...");
requester.connect("tcp://127.0.0.1:16540");

console.log("Sending 'getTime_ms'");
serverTime = requester.send("getTime_ms");

process.on('SIGINT', function() {
    requester.close();
});

