FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGO_URL = mongodb+srv://pavan:pavan@shapeai.ujqaw.mongodb.net/zomato?retryWrites=true&w=majority

ENV GOOGLE_CLIENT_ID = 314673450846-ps9j1poul1e2t6fcbna03t2rfottmnu0.apps.googleusercontent.com

ENV GOOGLE_CLIENT_SECRET = Rp5gzdCL5y-M3AMt_t5BE2OH

ENV AWS_S3_ACCESS_KEY = AKIA3DRBCA5KQYW3GKVA

ENV AWS_S3_SECRET_KEY = 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

ENV RZR_PAY_ID = rzp_test_5NPrw4MPxtH0uf

ENV RZR_PAY_SECRET = f5SE6ad9pDq9LjdWWe9T5tPk


RUN npm run build


CMD ["npm", "run", "start"]