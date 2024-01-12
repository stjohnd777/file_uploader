
docker build -t stjohnd007/fileserer:0.1.0 -f dileserver.dockerfile . 

docker login
docker push stjohnd007/fileserver:0.1.0

docker run --rm  -p 3000:3000 -v c:/opt/uploads:/var/wwww/public/uploads   stjohnd007/fileserver:0.5.0
