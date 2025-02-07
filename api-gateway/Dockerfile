# Step 1: Use an official Node.js image as the base image
FROM node:20

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available) to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose the port that the microservice will run on (change this to your app's port)
EXPOSE 3001

# Step 7: Run the application (replace with your app's start script)
CMD ["npm", "start"]
