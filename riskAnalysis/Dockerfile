FROM java:8-jre
MAINTAINER wyuch@zving.com
COPY ./target/riskAnalysis-0.0.1-SNAPSHOT.war /
EXPOSE 8007
ENV sc="http://192.168.1.12:30100"
COPY ./start.sh /
RUN chmod +x /start.sh
CMD ["/start.sh","/riskAnalysis-0.0.1-SNAPSHOT.war"]