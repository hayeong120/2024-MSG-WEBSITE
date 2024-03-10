# Dockerfile

# 베이스 이미지 설정
FROM nginx:latest

# 작업 디렉토리 설정
WORKDIR /usr/share/nginx/html

# 로컬 프로젝트 파일 복사
COPY . .

# 컨테이너 실행 시 실행될 명령
CMD ["nginx", "-g", "daemon off;"]
