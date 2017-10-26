FROM 192.168.1.11:5000/java
MAINTAINER wyuch@zving.com
COPY ./baseData-0.0.1-SNAPSHOT.war /
EXPOSE 8014
ENV sc="http://192.168.1.12:30100"
COPY ./start.sh /
RUN chmod +x /start.sh
CMD ["/start.sh","/baseData-0.0.1-SNAPSHOT.war"]