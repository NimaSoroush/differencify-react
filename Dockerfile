FROM nimasoroush/differencify
RUN mkdir ./differencify-react
WORKDIR ./differencify-react
COPY ./package.json ./
RUN npm install
COPY ./src ./src
COPY ./public ./public
CMD npm start