/* Documentation can be found here: https://www.cryptocompare.com/api/#-api-web-socket- 
 * The response will have the following format:
 *
 * '{SubscriptionId}~{ExchangeName}~{CurrencySymbol}~{CurrencySymbol}~{Flag}~{TradeId}~{TimeStamp}~{Quantity}~{Price}~{Total}'
 *
 *  See https://github.com/cryptoqween/cryptoqween.github.io/blob/master/streamer/ccc-streamer-utilities.js for details on
 *  the various values for each of the above symbols, and what they mean.
 *
 *  Subscription requests have the following format: {FeedType}~{ExchangeName}~{CurrencySymbol}~{CurrencySymbol}
 */
 
 
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
var subscription = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD']
socket.emit('SubAdd', {subs: subscription})
socket.on("m", function (message) {
   emitter.emit('quote', message);
})
