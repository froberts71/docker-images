#!/bin/bash
  

export JAVA_HOME=/usr/java/jdk1.8.0_144

/opt/pulsar_private/pulsar-functions/bin/pulsar-functions functions create \
 --className com.steamlio.pulsar.function.crypto.CryptoCurrencyCalculator \
 --inputs persistent://cryptodemo/north-america/quotes/BTC_USD  \
 --jar /opt/pulsar-functions/crypto/crypto-functions-0.0.1-jar-with-dependencies.jar \
 --output persistent://cryptodemo/north-america/quotes/BTC_USD_Calculated


######################################################################
# In order to stay in the foreground, run this while loop forever
######################################################################
while [ 1 ]
do
    sleep 60000
done