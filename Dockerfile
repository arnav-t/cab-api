FROM node:8

# Set work directory
WORKDIR /usr/src/app

# Copy package.json and package.lock.json
COPY package*.json ./
COPY yarn.lock ./

# Install all dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port 4000
EXPOSE 4000

# Run app
CMD [ "npm", "start" ]