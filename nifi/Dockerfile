
FROM nimmis/java-centos:oracle-8-jdk

ARG UID=1000
ARG GID=1000
ARG NIFI_VERSION=1.5.0

ENV NIFI_BASE_DIR /opt/nifi 
ENV NIFI_HOME=$NIFI_BASE_DIR/nifi-$NIFI_VERSION 

# Setup NiFi user
RUN groupadd -g $GID nifi || groupmod -n nifi `getent group $GID | cut -d: -f1` \
    && useradd --shell /bin/bash -u $UID -g $GID -m nifi \
    && mkdir -p $NIFI_HOME/conf/templates \
    && chown -R nifi:nifi $NIFI_BASE_DIR

#####################################################################    
# Install NiFi
#####################################################################
COPY distros/nifi-$NIFI_VERSION-bin.tar.gz $NIFI_BASE_DIR 
RUN tar -xzvf $NIFI_BASE_DIR/nifi-$NIFI_VERSION-bin.tar.gz -C $NIFI_BASE_DIR


#####################################################################
# Add the Pulsar Processors
#####################################################################
COPY custom-nars/*.nar $NIFI_HOME/lib/

#####################################################################
# Change NiFi's UI port to avoid conflict with Pulsar Admin
#####################################################################
COPY conf/nifi.properties $NIFI_HOME/conf/nifi.properties

RUN chown -R nifi:nifi $NIFI_HOME

# Web HTTP Port & Remote Site-to-Site Ports
EXPOSE 9090 8181

#####################################################################
# Start NiFi
#####################################################################
ADD scripts/run.sh /usr/local/bin/run.sh
RUN chmod a+x /usr/local/bin/run.sh
CMD ["/usr/local/bin/run.sh"]
