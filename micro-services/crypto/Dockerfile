FROM node

LABEL maintainer="david@streaml.io"
LABEL usage="docker run --name crypto -p 4019:4019 -d -t crypto /opt/services/crypto/app.js  -s '["5~CCCAGG~BTC~USD", "5~CCCAGG~ETH~USD"]'"

#####################################################################
# Usage: docker run --name crypto -p 4019:4019 -d -t crypto /opt/services/crypto/app.js  -s '["5~CCCAGG~BTC~USD", "5~CCCAGG~ETH~USD"]'
#####################################################################

#####################################################################    
# Install App
#####################################################################
RUN mkdir -p /opt/services/crypto
RUN cd /opt/services/crypto && npm install --save ws && \
    npm install --save socket.io && npm install --save minimist

COPY app.js /opt/services/crypto

#####################################################################    
# Open the websocket port
#####################################################################
EXPOSE 4019

#####################################################################
# Start Node
#####################################################################
CMD ["/opt/services/crypto/app.js", " -s '["5~CCCAGG~BTC~USD", "5~CCCAGG~ETH~USD"]'"]
ENTRYPOINT ["node"]