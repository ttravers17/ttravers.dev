# Use the official Deno image
FROM denoland/deno:latest

# Set the working directory
WORKDIR /app

# Copy your Deno project files into the container
COPY . .

# Expose the port your application will run on (optional)
EXPOSE 8080
