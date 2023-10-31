FROM node:18-alpine

WORKDIR /app_img

COPY . .

RUN npm install --force

EXPOSE 3000/tcp

CMD ["npm", "run", "dev"]
