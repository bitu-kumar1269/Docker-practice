# Step 1: Use an official Python base image
FROM python:3.11-slim

# Step 2: Install Git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Step 3: Set working directory inside the container
WORKDIR /app

# Step 4: Copy dependency file first
COPY requirements.txt .

# Step 5: Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Step 6: Copy project files
COPY . .

# Step 7: Default command
CMD ["python", "app.py"]


#Pull and Run:
#docker build -t task2 .
# docker run -it your-username/devops-lab-env:v1.0
# docker push bitukumar/devops-lab-env:v1.0
# docker pull bitukumar/devops-lab-env:v1.0

# Tak=2
# Implementation SummaryStepCommandPurpose
# Build docker build -t <name> .Creates the image from the Dockerfile locally.
# Tag docker tag <name> <user>/<name>:<tag>Prepares the image with a registry-compatible name.
# Push docker push <user>/<name>:<tag>Uploads the image to Docker Hub for sharing.
# Pull docker pull <user>/<name>:<tag>Downloads the standardized setup on a new machine.