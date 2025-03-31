Документація з фронтенд-розробки

1. Загальна інформація про проект  
**Використовувані технології:** React, TypeScript, Zustand, Tailwind CSS.  

**Дизайн-система:** Tailwind CSS.  

2. Структура коду  
src/
├── assets/
├── components/
├── pages/
├── store/
├── types/
└── app.tsx

Конвенції щодо іменування:  
- **Компоненти** – `PascalCase`, назва файлу = назві компонента.  
  - `src/components/Button.tsx`, `src/components/UserCard.tsx`  
- **Файли:**  
  - `camelCase` для утиліт і хуків: `formatDate.ts`, `useFetch.ts`  
  - `kebab-case` або `ComponentName.module.css` для стилів: `global.css`, `Button.module.css`  
- **Стан (Zustand)** – `camelCase`: `userStore.ts`, `themeStore.ts`  
- **Типи (TypeScript)** – `T` для типів, `I` для інтерфейсів: `TUser`, `IApiResponse`  
- **Функції та змінні:**  
  - `camelCase`: `formatDate()`, `fetchData()`  
  - `SCREAMING_SNAKE_CASE` для констант: `API_BASE_URL`  
- **Навігація (React Router)** – `kebab-case`: `/user-profile`, `/settings`  

**Навігація у додатку:** React Router.  

3. Стан та управління даними  
- Використовується **Zustand** для управління станом.  
- Передача даних між компонентами: `Props`, `Context API`.  
- Організація API-запитів: `Axios`.  

4. API та інтеграції  
- Взаємодія з бекендом: через `REST API` і `WebSocket`.  
- **Специфікація API:** в процесі розробки.  
- **Обробка помилок:** middleware в Zustand.  
- **Авторизація:** Не використовується.  

5. Робота з формами та валідацією  
- **Бібліотеки для форм:** не використовується.  
- **Валідація:** власні функції.  

6. Тестування  
**Поки що тести не реалізовані.**  

Потенційні варіанти:  
- **Jest** – для unit-тестів.  
- **React Testing Library** – для тестування компонентів.  
- **Cypress** – для e2e-тестів.  

7. Деплой та CI/CD  
- **Хостинг:** Vercel.  
- **Docker:** не використовується.  
- **CI/CD:** GitHub.  

8. Гайдлайн для роботи  
- Використання `Pull Requests (PR)` для внесення змін.  
- `Code Review` перед злиттям у головну гілку.  
- Дотримання єдиного стилю кодування.  
- **Стратегія merge:** squash.  

9. Code Style & Linting
Використання ESLint, Prettier для підтримки єдиного стилю коду.
Конфігурація форматування коду:
- Використання `.eslintrc.json` для налаштування ESLint.
- Використання `.prettierrc` для налаштування Prettier.
- Автоматичне форматування при коміті через `husky` та `lint-staged`.