FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD 123  
ENV MYSQL_DATABASE IBMSUM  
ENV MYSQL_USER users_service  
ENV MYSQL_PASSWORD 123

ADD query.sql /docker-entrypoint-initdb.d