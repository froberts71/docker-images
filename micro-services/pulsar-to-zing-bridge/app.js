/*
 * Application that will listen to the Pulsar topic websockets, decode the payload
 * from base64, parse the JSON message, and convert it into the correct format for 
 * consumption by zing-chart for display.
 */
'use strict';

// Get the command line arguments
const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
    alias: {
        h: 'pulsar-host',
        p: 'property',
        c: "cluster",
        n: "namespace",
        t: "topic",
        s: "subscription"
    }
});

// Start a WebSocket Server on port 5218
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 5218 });

// Create an emitter
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// Subscribe
emitter.on('quote', function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
});


// Build up the cosumerURL for the Pulsar topic
var topicName = "ws://" + args.h + ":9090/ws/consumer/persistent/" + args.p + "/" + args.c + "/" + args.n + "/" + args.t + "/" + args.s

var WebSocketPulsar = require('ws'),
    topic = topicName,
    pulsarTopicWs = new WebSocket(topic);

pulsarTopicWs.on('message', function(message) {
    var receiveMsg = JSON.parse(message);
  
    // Parse the payload
    var quotes = JSON.parse(new Buffer(receiveMsg.payload, 'base64').toString());
    for (var i = 0; i < quotes.length; i++) {
    		var quote = quotes[i];
    		console.log('Exchange: %s -  FromCurrency: %s - Price: %s', quote.ExchangeName, quote.FromCurrency, quote.Price);
    
    		// Create the data object for ZingChart
    		var tick = {};
    		tick.plot0 = quote.Price;
    		emitter.emit('quote', JSON.stringify(tick));
    	} 
    
    // Ack the message.
    var ackMsg = {"messageId" : receiveMsg.messageId};
    pulsarTopicWs.send(JSON.stringify(ackMsg));
});