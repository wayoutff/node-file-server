## commands
```
yarn start
```

## Api usage
```
/api/upload - form-data with key 'file'
/api/files - list of uploaded files
/api/files/:name - get one file by name
```

## config.js
```js
{
  PORT: 3000,                     // порт на котором запускается сервер
  PATH_TO_UPLOADS: "/uploads/",   // путь сохранения
  MAX_SIZE: 2 * 1024 * 1024       // максимальный размер файла
}
```
