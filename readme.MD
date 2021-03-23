# Express
## Setup Grapqh

1. Clone this repo to your computer
2. install all dependencies
   ```shell
   npm install
   ``` 
3. copy the .envexample and input it with database credentials
4. create database `npx sequelize-cli db:create`
5. migrate table on your database `npx sequelize db:migrate`
6. data dummy on your table `npx sequelize-cli db:seed:all` edit seed file in seeders folder
7. hot reload `npm run dev`
8. node `npm start`

