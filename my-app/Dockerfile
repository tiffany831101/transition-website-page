# Use a base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the built static files
FROM nginx:alpine

# Copy the built app from the previous stage to the NGINX HTML directory
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX and serve the app
CMD ["nginx", "-g", "daemon off;"]
