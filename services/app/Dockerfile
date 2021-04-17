FROM node:15-alpine
WORKDIR /app

ENV NODE_ENV=development
ENV PUBLIC_URL=/

COPY package.json yarn.lock ./
RUN yarn install --check-files && yarn cache clean

COPY public  ./public/
COPY src  ./src/

EXPOSE 3000
#EXPOSE 6006

CMD ["yarn","start"]
#CMD ["yarn","storybook"]
