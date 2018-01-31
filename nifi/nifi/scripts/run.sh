#!/bin/bash
  
###################################################
# Start NiFi
###################################################
export JAVA_HOME=/usr/java/jdk1.8.0_144

nohup /opt/nifi/nifi-1.5.0/bin/nifi.sh start &

######################################################################
# In order to stay in the foreground, run this while loop forever
######################################################################
while [ 1 ]
do
    sleep 60000
done