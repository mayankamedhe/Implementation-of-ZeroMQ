var zmq = require('zeromq');

var responder = zmq.socket('rep');

responder.on('message', function(request)
{
    console.log(`Received request: '${request.toString()}'`);

    if (request.toString() == "getTime_ms")
    {
        responder.send((new Date).getTime());
    }
});

responder.bind('tcp://127.0.0.1:16540', function(error)
{
    if (error) throw error;

    console.log("Server listening on 16540!");
});

process.on('SIGINT', function()
{
    responder.close();
});