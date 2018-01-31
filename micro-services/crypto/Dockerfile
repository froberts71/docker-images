FROM node

#####################################################################    
# Install App
#####################################################################
RUN mkdir -p /opt/services/crypto
RUN cd /opt/services/crypto && npm install --save ws && \
    npm install --save socket.io

COPY app.js /opt/services/crypto

#####################################################################    
# Open the websocket port
#####################################################################
EXPOSE 4019

#####################################################################
# Start Node
#####################################################################
CMD ["/opt/services/crypto/app.js"]
ENTRYPOINT ["node"]