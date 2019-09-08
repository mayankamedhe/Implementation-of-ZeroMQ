// Weather update server in node.js
// Binds PUB socket to tcp://127.0.0.1:16540
// Publishes random weather updates

var zmq = require('zeromq')
var publisher = zmq.socket('pub');

console.log("Server binding...");
publisher.bindSync("tcp://127.0.0.1:16540");
console.log("Server bound!");

function sendUpdate()
{
    var serverTime = (new Date).getTime();
    setTimeout(() => {
        console.log("Sending update");
        publisher.send(["getTime_ms", serverTime]);
    }, 10);
}

setInterval(sendUpdate, 1000);