sudo apt-get update -y
sudo apt-get install -y docker.io

sudo systemctl start docker
sudo systemctl enable docker

sudo usermod -aG docker $USER
newgrp docker

cd /home/ubuntu/frontend

docker build -t frontend .

docker run -d -p 80:80 frontend