# ใช้ Node official image
FROM node:18

# set working dir
WORKDIR /app

# copy and install
COPY package*.json ./
RUN npm install

# copy source
COPY . .

# start
CMD ["node", "index.js"]
