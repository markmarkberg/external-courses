# Kanban board

# Сборка осуществляется через сборщик модулей Webpack v5

##  Функционал менеджера задач Канбан

- Сортировка задач

- Возможность создавать новые списки задач а также удалять

- Возможность перемещать задачи по листам а также добавлять новые

- Внизу сайта расположены счетчики активных и завершенных списков задач

## Работа с Kanban

- В шапке сайта кнопка "Create new list" создает новые списки задач, после нажатия необходимо ввести название блока

- В шапке сайта в правом углу расположена иконка при нажатии на которую открывается список возможностей работы с аккаунтом

- Кнопка "Add card" в первом блоке добавляет новую задачу, название задачи ввести в появившемся инпуте

- В остальных блоках кнопка "Add card" открывает выпадающий список в котором необходимо выбрать задачу для перемещения

## Для работы с проектом необходимо установить:

```bash
  node.js
```

```bash
  Модули:
```

- `babel`
- `webpack-dev-server`
- `HtmlWebpackPlugin`
- `file-loader`
- `style-loader` и `css-loader`

## Установка

Склонируйте проект в свою папку, а затем установите зависимости:

```bash
npm install
```

Как запустить WebPack dev server:

```bash
npm start
```

Как собрать проект:

```bash
npm run build
```
