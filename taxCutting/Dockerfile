FROM java:8-jre
MAINTAINER wyuch@zving.com
COPY ./target/taxCutting-0.0.1-SNAPSHOT.war /
EXPOSE 8005
ENV sc="http://192.168.1.12:30100"
COPY ./start.sh /
RUN chmod +x /start.sh
CMD ["/start.sh","/taxCutting-0.0.1-SNAPSHOT.war"]