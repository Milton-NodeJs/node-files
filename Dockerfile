FROM node:18.1.0-slim
ENV NODE_ENV=production
WORKDIR /strg
COPY ["package.json", "./"]"
RUN npm install --production
COPY . /app
CMD ["node", "server.js"]