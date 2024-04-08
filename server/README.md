### API PizzaFly
<p>Node.js, Express.js, Typescript, TypeORM, MySQL<p>
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
<h3>Переменные окружения (файл .env в корне сервера):</h3>

```bash
SERVER_PORT=*********

DATABASE_HOST=*********
DATABASE_PORT=*********
DATABASE_USER=*********
DATABASE_PASSWORD=*********
DATABASE_NAME=*********
```