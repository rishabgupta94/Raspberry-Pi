# nodejs-app/Dockerfile
# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3001 to the outside world
EXPOSE 5173

# Command to run the application
CMD ["node", "app.js"]
