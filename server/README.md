<h1>API ПиццаФлай</h1>
<p>Node.js, Express.js, Typescript, TypeORM, MySQL<p>
<p>API задеплоино на бесплатный сервис Render, при бездействии сервер отключается. Поэтому при первом запуске время загрузки данных может продлиться до 2 минут<p>
<h3>Запуск проекта</h3>
<p>Сначало установить все зависимости<p>

```bash
yarn install
```

<h2>Для запуска нужно два окна консоли</h2>
  
<p>1) Запустить компиляцию из Typescript в Javascript<p>
  
```bash
yarn build:watch
```
<p>2) Запустить проект и наблюдатель nodemon<p>
  
```bash
yarn dev
```

<h3>Подключение к БД (src\config\db.config.ts):</h3>

```bash
local database
const AppDataSource = new DataSource({
   type: 'mysql',
   database: 'mydb',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'root',
   synchronize: true,
   entities: [...entities]
})
```

<h3>Переменные окружения (файл .env в корне сервера):</h3>

```bash
SERVER_PORT=*********

DATABASE_HOST=*********
DATABASE_PORT=*********
DATABASE_USER=*********
DATABASE_PASSWORD=*********
DATABASE_NAME=*********
```