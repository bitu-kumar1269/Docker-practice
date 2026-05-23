FROM python:3.13-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py ./

EXPOSE 4000

CMD ["python", "app.py"]


#docker build -t myapp . -> -t use fir Tag
#docker images -> to see all images create on docker
# docker run -p 4000:3000 myapp . -> -p use for port number
#curl http:loclalhost:4000 -> to check docker is runing or not

