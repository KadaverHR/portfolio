# Vite + Nunjucks Starter

🚀 Стартовый шаблон для быстрой разработки статических сайтов с использованием:
- Vite (сборка)
- Nunjucks (шаблонизация)
- Sass (стили)

## Особенности

- 📦 Готовая конфигурация Vite с плагином Nunjucks
- 🧩 Поддержка компонентного подхода через Nunjucks-шаблоны
- 💅 Автоматическая компиляция Sass в CSS
- ⚡ Горячая перезагрузка (HMR) в режиме разработки

## Структура проекта
project/
├── src/
│ ├── assets/
│ │ ├── js/ # JavaScript-файлы
│ │ └── styles/ # Sass-стили
│ ├── data/ # Данные для шаблонов (JSON)
│ ├── html/ # Шаблоны Nunjucks
│ │ ├── partials/ # Частичные шаблоны
│ │ └── base.njk # Базовый шаблон
│ └── index.njk # Главная страница
├── .gitignore
├── package.json
├── README.md
└── vite.config.js


## Быстрый старт

Установите зависимости:

npm install

Запустите сервер для разработки:

npm run dev
Соберите проект для production:

npm run build