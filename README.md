![React](https://img.shields.io/badge/React-18.2.0-blue)
![Redux](https://img.shields.io/badge/Redux-4.2.1-purple)
![Next-i18next](https://img.shields.io/badge/Next--i18next-13.2.2-orange)
![Axios](https://img.shields.io/badge/Axios-1.4.0-red)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
![Sass](https://img.shields.io/badge/Sass-1.62.0-pink)
![Storybook](https://img.shields.io/badge/Storybook-7.0.5-lightgray)
![Node](https://img.shields.io/badge/Node-16.18.0-green)

#  🎥 Movies-website
Упрощенная версия портала фильмов. В качестве дизайна за основу взят сайт ivi.ru

<div style="display: flex; flex-wrap: wrap; gap: 16px;">
  <a href="./public/screenshots/Main.png" target="_blank">
    <img src="./public/screenshots/Main.png" alt="Главная страница" style="width: 240px; border-radius: 8px;" />
  </a>
  <a href="./public/screenshots/Login.png" target="_blank">
    <img src="./public/screenshots/Login.png" alt="Регистрация" style="width: 240px; border-radius: 8px;" />
  </a>
  <a href="./public/screenshots/Find.png" target="_blank">
    <img src="./public/screenshots/Find.png" alt="Поиск" style="width: 240px; border-radius: 8px;" />
  </a>
</div>

## 📃 Описание
Написано с помощью TypeScript, React (redux, axios, i18n, storybook), SCSS. Покрытие тестами - react testing library. 

## 📝 Функционал и внешний вид портала
- Главная страница
- Страница списка фильмов (/films/)
  - Функциональные фильтры
    - По странам/жанрам/годам
    - По рейтингу - возможность вводить конкретное значение ползунком с точностью до десятых 
    - По количеству оценок - возможность вводить конкретное значение ползунком
    - По режиссеру/ по актеру. Поле ввода ведет себя как автосаджест (подсказывает по первым буквам подходящих режиссеров)
    - Все фильтры разом доступны на странице /movies/ и сразу при выборе пользователя применяются без перезагрузки страницы
    - Выбор жанров влияет на хлебные крошки
  - Сортировка
    - По количеству оценок
    - По рейтингу 
    - По дате выхода (сначала свежие) 
    - По алфавиту 
  - Список карточек со всеми эффектами верстки (но по функционалу только переход к конкретному фильму)
- Страница конкретного фильма (/film/:id)
  - Трейлер
  - Описание фильма с реальными данными
  - Создание отзывов и комментариев к фильму
- Страница актера (/person/:id)
- Страница авторизации (/auth/)
  - Авторизация по почте/паролю, аккаунту google, аккаунту Vk 
- Страница администратора (/admin)
  - Доступ только у администратора (проверка на бэкенде, ссылка появляется в шапке при наличии роли)
  - Возможность редактировать названия фильма (для фильмов) и название жанра (для жанров) на русском и английском языке.
- Поиск
- Функционал перевода сайта на английский язык (переключатель в шапке)

## 🛠️ Инструкция по запуску проекта

### 🔐 Бэкенд

-	Клонируем репозиторий (master ветка) на ПК c https://github.com/Blazac97/ivi-clone-backend-app.git
-	Запускаем Docker (если он не установлен на ПК, то нужно скачать с офф сайта и установить).
-	Открываем в терминале папку с репозиторием.
-	Выполняем “npm i” для установки зависимостей.
-	Для запуска выполняем “ docker compose up -d“. 
-	Ожидаем запуск контейнеров, особенно необходимо подождать пока «поднимется» приложение внутри контейнера “kino-db-1”. Необходимо подождать примерно 1.5-2 минуты, пока внутри контейнера в консоль не будет выведено следующее (это нужно делать, поскольку этот сервис запускается дольше всех внутри контейнера).

![image](https://github.com/mspolermo/movies-website/assets/108793771/2239713b-4fa8-4732-886a-b6013f76f855)

![image](https://github.com/mspolermo/movies-website/assets/108793771/57eb7bc5-b0fc-4120-ad38-ba20220183f6)

![image](https://github.com/mspolermo/movies-website/assets/108793771/bf0f6e96-09e4-4ddd-aade-60fe2f426fce)

-	Запуск тестов осуществляется командой “npm run test:watch”.
-	После того как все контейнеры будут развернуты, переходим к запуску фронт-части.

### 🖥️ Фронтенд

-	Клонируем репозиторий на ПК c https://github.com/mspolermo/movies-website.git
-	Открываем в терминале папку с репозиторием.
-	Выполняем “git checkout master”.
-	Выполняем “npm i”.
-	Для запуска сайта выполняем “npm start”. Сайт будет доступен по адресу: http://localhost:3000/movies-website/
-	Для запуска storybook выполняем “npm run storybook”. По умолчанию storybook будет доступен по адресу:  http://localhost:6006/
-	В случае, если storybook при первоначальной загрузке выдаст ошибку – страницу storybook в браузере следует обновить.
-	Для запуска тестов выполняем “npm run test”.


### 🪪 Дополнительная информация

-	Статичные комментарии добавлены в БД только к фильму "Форрест Гамп" (/movies-website/film/134). После авторизации на сайте можно создавать отзывы/комментарии к любому фильму.
-	Для завершения работы бэкенд-части необходимо в терминале, в папке с бэкенд-репозиторием выполнить “docker compose down”
-	Для остановки виртуальной машины на ПК (windows) необходимо выполнить команду в командной строке “wsl —shutdown” (чтобы убить процесс vmmem) 
-	Все вышеперечисленные команды для терминала следует выполнять без кавычек

#### 🪛 Добавление роли администратора к учетной записи пользователя
Поскольку юзерам при регистрации по умолчанию выдаётся роль “USER”, чтобы выдать пользователю роль “ADMIN” необходимо выполнить следующие действия:
  
  1.	Открыть сайт (http://localhost:3000/movies-website/) и перейти в раздел авторизации.

 ![image](https://github.com/mspolermo/movies-website/assets/108793771/1cda1ccc-4e55-4d07-808c-381229fae712)


  2.	Нажать на кнопку «Еще не зарегистрированы?»

 ![image](https://github.com/mspolermo/movies-website/assets/108793771/a6b11c60-2596-4497-aeb9-60d0285bc66b)


  3.	В поле «E-mail» ввести почту, в поле «Придумайте пароль» ввести пароль, состоящий минимум из 4 латинских букв. Нажать на кнопку «Зарегистрироваться».

 ![image](https://github.com/mspolermo/movies-website/assets/108793771/b00f129a-9195-4e2d-adbd-8bf2a0af0405)


  4.	Открыть страницу входа в pgAdmin. Актуальная ссылка для входа находится в Docker-е.

 ![image](https://github.com/mspolermo/movies-website/assets/108793771/167a00b2-825d-4324-95f6-d7269668d1c7)


  5.	Авторизироваться с помощью логина: root@root.com и пароля: «root» (без кавычек). 

 ![image](https://github.com/mspolermo/movies-website/assets/108793771/aa9160aa-7a84-41eb-9633-6eec8db23afb)


  6.	Подключить сервер, нажав на кнопку «Add New Server»

 ![image](https://github.com/mspolermo/movies-website/assets/108793771/2a87d5ef-13a8-4d6c-8cf6-1f9ae88db7fc)


  7.	В открывшемся окне, во вкладке «General», ввести в поле «Name» имя сервера – любое, на ваше усмотрение. 

 ![image](https://github.com/mspolermo/movies-website/assets/108793771/0eff2c66-c91e-4304-8b49-e3beb794ef14)


  8.	Во вкладке «Connection» в поле «Host name/address» ввести «db2» (без кавычек), в поле «Password» ввести «root» (без кавычек). Нажать кнопку «Save».

![image](https://github.com/mspolermo/movies-website/assets/108793771/2a76278a-e59e-4300-8cde-6b870f3277e2)


  9.	Сервер подключен. Необходимо проверить наличие зарегистрированного аккаунта (пункт 3) в БД. Данная информация находится в таблице «users».

  ![image](https://github.com/mspolermo/movies-website/assets/108793771/d2a1e24d-a98a-47a3-a5d7-e6ca1a63c6ce)


  10.	Открыть таблицу «user_roles»:

 ![image](https://github.com/mspolermo/movies-website/assets/108793771/6eb4ee83-880c-4475-9000-8bfa3246b68e)


  11.	Если регистрация пользователя была произведена корректно – в таблице существует запись, где «roleId» – id роли (примечание: 1 – “ADMIN”, 2 – “USER”), «userId» – id юзера. 

    Вариант 1.

Изменить существующую запись (изменив значение «roleId» - 2 на «roleId» - 1) и сохранить изменения в БД. Для этого нужно кликнуть два раза на значение, которое нужно изменить, внести корректировку и сохранить изменения в БД, используя кнопку «Save Data Changes»:

 ![image](https://github.com/mspolermo/movies-website/assets/108793771/f2907e7d-7643-4b55-8a31-07a209e0d825)


    Вариант 2.

С помощью кнопки «Add row» добавить запись (строку, где «roleId» – 1 , «userId» – 1) и сохранить изменения в БД, используя кнопку «Save Data Changes»:

 ![image](https://github.com/mspolermo/movies-website/assets/108793771/7a22978f-893c-4b0b-a4f8-658ae72a04ce)


12.	После выполнения вышеперечисленных действий нужно обновить страницу (http://localhost:3000/movies-website/) и залогиниться заново под учетной записью с ролью администратора. Если действия выполнены правильно – в шапке появится линк на страницу администратора.
