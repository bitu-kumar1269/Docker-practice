FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY first.py ./

EXPOSE 4000

CMD ["python", "first.py"]