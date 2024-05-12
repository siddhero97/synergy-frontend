# Stage 1: Build the React application
FROM node:16-alpine as build
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . ./
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:alpine
COPY --from=build /src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]