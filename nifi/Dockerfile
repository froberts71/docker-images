
FROM nimmis/java-centos:oracle-8-jdk

ARG UID=1000
ARG GID=1000
ARG NIFI_VERSION=1.5.0
ARG MIRROR=https://archive.apache.org/dist

ENV NIFI_BASE_DIR /opt/nifi 
ENV NIFI_HOME=$NIFI_BASE_DIR/nifi-$NIFI_VERSION 
ENV NIFI_BINARY_URL=/nifi/${NIFI_VERSION}/nifi-${NIFI_VERSION}-bin.tar.gz

#####################################################################
# Setup NiFi user
#####################################################################
RUN groupadd -g $GID nifi || groupmod -n nifi `getent group $GID | cut -d: -f1` \
    && useradd --shell /bin/bash -u $UID -g $GID -m nifi \
    && mkdir -p $NIFI_HOME/conf/templates \
    && chown -R nifi:nifi $NIFI_BASE_DIR

#####################################################################
# Download, validate, and expand Apache NiFi binary.
#####################################################################
RUN curl -fSL ${MIRROR}/${NIFI_BINARY_URL} -o ${NIFI_BASE_DIR}/nifi-${NIFI_VERSION}-bin.tar.gz \
    && echo "$(curl https://archive.apache.org/dist/${NIFI_BINARY_URL}.sha256) *${NIFI_BASE_DIR}/nifi-${NIFI_VERSION}-bin.tar.gz" | sha256sum -c - \
    && tar -xvzf ${NIFI_BASE_DIR}/nifi-${NIFI_VERSION}-bin.tar.gz -C ${NIFI_BASE_DIR} \
    && rm ${NIFI_BASE_DIR}/nifi-${NIFI_VERSION}-bin.tar.gz \
    && chown -R nifi:nifi ${NIFI_HOME}


#####################################################################
# Add the Pulsar Processors
#####################################################################
COPY custom-nars/*.nar $NIFI_HOME/lib/

#####################################################################
# Change NiFi's UI port to avoid conflict with Pulsar Admin, 
# increase NiFi heap size, and change logging level for processors
#####################################################################
COPY conf/*.* $NIFI_HOME/conf/


# Web HTTP Port & Remote Site-to-Site Ports
EXPOSE 9090 8181

#####################################################################
# Start NiFi
#####################################################################
ADD scripts/run.sh /usr/local/bin/run.sh
RUN chmod a+x /usr/local/bin/run.sh
CMD ["/usr/local/bin/run.sh"]
