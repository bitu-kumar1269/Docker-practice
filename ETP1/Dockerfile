# Use an official lightweight Python runtime as a parent image
FROM python:3.11-slim

# Set a working directory
WORKDIR /app

# Copy only the application file into the container
COPY requirements.txt .

RUN pip install -r requirements.txt
COPY test.py . 

# If you later add dependencies, uncomment the next lines and provide requirements.txt
# COPY requirements.txt /app/
# RUN pip install --no-cache-dir -r requirements.txt

# Default command to run the script
CMD ["python", "test.py"]
