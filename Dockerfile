# Stage 1: Build the React frontend (Vite)
FROM node:20 AS frontend-build
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the frontend files and build
COPY . .
RUN npm run build

# Stage 2: Serve frontend using Nginx
FROM nginx:alpine AS frontend
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy built frontend from the previous stage
COPY --from=frontend-build /app/dist ./

# Expose the web server port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
