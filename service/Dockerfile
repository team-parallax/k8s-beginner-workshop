FROM node:alpine3.15
RUN npm i -g pnpm
COPY . .
RUN pnpm i --frozen-lockfile
CMD ["pnpm", "start"]