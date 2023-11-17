# List of residents
##### приложение для простмотра сиписка улиц, домов, квартир и жильцов

---
приложение работает не полностью, т.к. сервер передаёт пустой список жильцов

---

#### запросы к API:

**Список улиц:**
```js
GET ​
/Request​/streets
```
**Список домов:**
```js
GET
​/Request​/houses​/${id}
```
**Список квартир:**
```js
GET
/Request/house_flats/${id}
```
**Добавить жильца.
возвращает id  жильца (client-a) :**
```js
POST
/HousingStock/client
```

В методе POST параметры Id и BindId не используются

**Удалить жильца :**
```js
DELETE
 /HousingStock /bind_client/{id}
```
**привязка жильца к квартире**
```js
PUT
/HousingStock /bind_client
```

запуск проекта -
```js
npm run dev
```

приложение открывается локально по ссылке
```html
http://localhost:5173/
```

Стэк приложения: ReactJS, Vite
