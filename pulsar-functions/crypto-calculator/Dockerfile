FROM nimmis/java-centos:oracle-8-jdk

LABEL maintainer="david@streaml.io"

ENV PULSAR_BASE_DIR /opt 

#####################################################################    
# Install App
#####################################################################
COPY lib/pulsar_private.tar.gz /tmp

RUN tar -xvzf /tmp/pulsar_private.tar.gz -C ${PULSAR_BASE_DIR} && \
    rm /tmp/pulsar_private.tar.gz && mkdir -p /opt/services/pulsar-functions/crypto 
    
COPY lib/*.jar /opt/services/pulsar-functions/crypto

#####################################################################
# Start the Pulsar Function
#####################################################################
ADD scripts/run.sh /usr/local/bin/run.sh
RUN chmod a+x /usr/local/bin/run.sh
CMD ["/usr/local/bin/run.sh"]

