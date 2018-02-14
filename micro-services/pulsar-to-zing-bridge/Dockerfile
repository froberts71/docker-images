FROM node

LABEL maintainer="david@streaml.io"
LABEL usage="docker run --name pulsar-websocket -p 5218:5218 -d -t crypto /opt/services/pulsar-websocket/app.js <options>"


#####################################################################
# Usage: docker run --name pulsar-bridge -p 5218:5218 -d -t \
#         streamlio/pulsar-to-zing-bridge /opt/services/pulsar-websocket/app.js \
#        --pulsar-host 35.197.123.209 --property cryptodemo \
#        --cluster north-america --namespace quotes --topic BTC_USD \ 
#        --subscription dashboard-subscription 
#        --mapping '{ "Coinbase": "plot0", "Kraken": "plot1", "Poloniex": "plot2" }'
#####################################################################

#####################################################################    
# Install App
#####################################################################
RUN mkdir -p /opt/services/pulsar-websocket
RUN cd /opt/services/pulsar-websocket && npm install --save ws && \
    npm install --save socket.io && npm install --save minimist

COPY app.js /opt/services/pulsar-websocket

#####################################################################    
# Open the websocket port
#####################################################################
EXPOSE 5218

#####################################################################
# Start Node
#####################################################################
CMD ["/opt/services/pulsar-websocket/app.js"]
ENTRYPOINT ["node"]