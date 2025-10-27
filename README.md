<div class="header" align="center">

[<img src="https://alt-kde.wiki/alt-kde.png" height="256">](https://github.com/OlegShchavelev/ALTKDEWiki)

# ALT KDE Wiki

База знаний открытого сообщества пользователей операционной системы «Альт» с графическим окружением KDE.

![GitHub License](https://img.shields.io/github/license/OlegShchavelev/ALTKDEWiki)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/OlegShchavelev/ALTKDEWiki)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/OlegShchavelev/ALTKDEWiki)
![GitHub deployments](https://img.shields.io/github/deployments/OlegShchavelev/ALTKDEWiki/github-pages?label=Last%20Deploy)
[![Telegram](https://img.shields.io/badge/Group-%235AA9E6?logo=telegram&label=Telegram)](https://t.me/alt_kde)

</div>

## Разработка

### :inbox_tray: Создание форка репозитория

Для контроля качества и безопасности контента проекта ALT KDE Wiki все изменения вносятся в личную копию репозитория (Fork). Процесс создания форка описан в разделе [Внесение изменений](https://alt-gnome.wiki/reference/pages/alteration.html).

### :gear: Локальный запуск проекта

Перед запуском проекта локально убедитесь, что в вашей операционной системе установлены необходимые для запуска приложения: Git, Node.js, npm. Ниже приведен пример установки приложений для операционной системы «Альт»:

```shell
su -
apt-get install node npm git
```

**Клонируем** созданную ранее личную копию репозитория:

```shell
# Клонирование с использованием доступа к репозиторию по HTTPS
git clone https://github.com/{user}/ALTKDEWiki.git
```

# Клонирование с использование доступа к репозиторию по SSH

git clone git@github.com:{user}/ALTKDEWiki.git

````

Теперь на вашем компьютере в папке `ALTKDEWiki`, находится полная копия репозитория.

> [!NOTE]
> Замените `{user}` на ваше имя пользователя на GitHub. Проще всего его найти в cервисе GitHub в самом верху страницы репозитория.

**Перейдите** в папку проекта и для начала работы запустите в режиме разработки (редактирования) склонированный проект ALT KDE Wiki:

```shell
cd ALTKDEWiki
npm i
npm run docs:dev
````

### :pencil: Внесение изменений

Для вашего удобства, все инструкции по созданию и редактированию статей собраны в разделе [«Для авторов»](https://alt-gnome.wiki/reference).

Участники проекта разработали материалы, которые вы можете найти на странице [«Общие правила»](https://alt-gnome.wiki/reference/pages/general-rules.html). Они помогут вам лучше понять, как работает проект, и позволят вам эффективно и просто работать с ALT KDE Wiki в роли участника.

Настоятельно рекомендуется проверить ваши коммиты на орфографические и критические ошибки до отправке PR в основную ветку проекта. Для этого ознакомьтесь со страницей [Проверка текста на ошибки](https://alt-gnome.wiki/reference/tests/speller.html)

> [!TIP]
> Следование вышеперечисленному — залог хорошего будущего проекта.

### :outbox_tray: Отправка изменений

Для того, чтобы изменения стали доступны всем, нужно создать Запрос на слияние (Pull Request). Процесс создания описан в разделе [Внесение изменений](https://alt-gnome.wiki/reference/pages/alteration.html#_3-создаем-pull-request).

## Зеркало

Вся документация из репозитория [ALTKDEWiki](https://github.com/OlegShchavelev/ALTKDEWiki) размещается на cайте [alt-kde.wiki](https://alt-kde.wiki/), обновление происходит автоматически, после переноса изменений в основную ветка проекта.

## Участники проекта ALT KDE Wiki

Список людей внесших вклад в проект:

[![Участники](https://contrib.rocks/image?repo=OlegShchavelev/ALTKDEWiki)](https://github.com/OlegShchavelev/ALTKDEWiki/graphs/contributors)

## Как помочь проекту ALT KDE Wiki

Вы можете поддержать проект несколькими способами:

- Создать задачу с проблемой или предложением по улучшению (Issue);
- Создать запрос на слияние с добавлением/исправлением статьи или функционала;
- Поддержать конкретного автора: все ссылки размещены на странице [Участники](https://alt-kde.wiki/contributions.html);

## Благодарность

Спасибо [команде разработки Nólëbase](https://github.com/nolebase) за создание и поддержку набора плагинов [Nólëbase Integrations](https://github.com/nolebase/integrations) и активное взаимодействие.

## Лицензия

[MIT](https://github.com/OlegShchavelev/ALTKDEWiki/blob/main/LICENSE)

Copyright © 2023-present <OLEG SHCHAVELEV>
