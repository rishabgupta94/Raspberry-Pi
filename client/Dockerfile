# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# # Install serve to serve the static files
RUN npm install -g serve

# Copy the rest of the application code to the container
COPY . .

# # Build the React application
RUN npm run build

# Command to run the application
CMD ["serve", "-s", "dist"]
