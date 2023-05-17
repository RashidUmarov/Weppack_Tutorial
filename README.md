# Webpack_Tutorial
Учебный проект по сборке с помощью webpack


1. Установлен webpack-dev-server с двумя конфигурациями запуска:
-  production
```
npm run dev-server
```

- development
```
npm run prod-server
```
2. Добавлена горячая замена модулей (HMR) и source map

3. Установлен json-server
```
json-server --watch database.json
```

5. Установлен пакет eslint, для ручной проверки JS-файла, перейти в /src
```
npx eslint index.js
```
Также проверка добавлена в webpack.config.js и выполняется при каждой сборке 
```
npm run build
```

6. Добавлен pre-commit hook, который вызывает скрипт lint при каждом комите

7. В скриптах index.js и math.js намеренно оставлены ошибки, чтобы срабатывал pre-commit 

8.  Commit с ошибками сделан так:
```
git commit --no-verify -m "..."
```
