FROM node:12.14.1 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

RUN npm run build:prod -- --output-path=dist

FROM nginx:1.17.8-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]