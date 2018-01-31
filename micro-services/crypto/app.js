/* Documentation can be found here: https://www.cryptocompare.com/api/#-api-web-socket- 
 * The response will have the following format:
 *
 * '{SubscriptionId}~{ExchangeName}~{CurrencySymbol}~{CurrencySymbol}~{Flag}~{TradeId}~{TimeStamp}~{Quantity}~{Price}~{Total}'
 *
 *  See https://github.com/cryptoqween/cryptoqween.github.io/blob/master/streamer/ccc-streamer-utilities.js for details on
 *  the various values for each of the above symbols, and what they mean.
 *
 *  Subscription requests have the following format: {FeedType}~{ExchangeName}~{CurrencySymbol}~{CurrencySymbol}
 *
 *  USAGE: node app.js -s '["5~CCCAGG~BTC~USD", "5~CCCAGG~ETH~USD"]'
 *
 *     -s, --subs    An array of subscription requests
 */
 
'use strict';

// Get the command line arguments
const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
    alias: {
        s: 'sub'
    }
});

// Start a WebSocket Server on port 4019
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 4019 });

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

// Emit events
var socket = require('socket.io-client')('https://streamer.cryptocompare.com/')
socket.emit('SubAdd', {subs: JSON.parse(args.s)})
socket.on("m", function (message) {
   console.log(message);
   emitter.emit('quote', message);
})

