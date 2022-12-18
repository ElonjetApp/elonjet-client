FROM nginx:latest
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/sites-enabled/default.conf /etc/nginx/sites-enabled/default.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY dist /usr/share/nginx/html


EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
