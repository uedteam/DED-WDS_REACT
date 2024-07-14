# 使用 Node.js 來構建應用程式
FROM node:18 as build

# 設定工作目錄
WORKDIR /usr/app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製所有文件
COPY . .

# 構建應用程式
# RUN npm run build

# 使用 Nginx 作為服務器來提供靜態文件
FROM nginx:alpine

# 複製構建出的文件到 Nginx 的靜態文件目錄
# COPY --from=build /usr/app/build/storybook /usr/share/nginx/html
COPY /build/storybook /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]