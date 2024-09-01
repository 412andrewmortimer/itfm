# Use a base image with Node.js pre-installed
FROM node:14 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm ci

# Copy the entire application code to the working directory
COPY . .

# Build both applications
RUN npx nx run getandrewmortimer:build --configuration=production \
  && npx nx run empiricalarchetype:build --configuration=production

# Use a lightweight base image for the runtime environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built first application from the builder stage to the nginx default web directory
COPY --from=builder /app/dist/apps/getandrewmortimer /usr/share/nginx/html/getandrewmortimer

# Copy the built second application from the builder stage to a separate nginx web directory
COPY --from=builder /app/dist/apps/empiricalarchetype /usr/share/nginx/html/empiricalarchetype

# Expose port 80 for the first application
EXPOSE 80

# Expose port 81 for the second application
EXPOSE 81

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
