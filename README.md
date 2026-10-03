<div align="center">
  <a href="https://github.com/OlegShchavelev/ALTKDEWiki">
    <img src="https://i.imgur.com/DA9QSc6.png" alt="Logo" width="256" height="256">
  </a>
  <h1 align="center">ALT KDE Wiki
  <br/>
  <img alt="GitHub License" src="https://img.shields.io/github/license/OlegShchavelev/ALTKDEWiki">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/OlegShchavelev/ALTKDEWiki">
  <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/OlegShchavelev/ALTKDEWiki">
  <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/OlegShchavelev/ALTKDEWiki/github-pages?label=Last%20Deploy">
  </h1>
  <p align="center"> База знаний открытого сообщества пользователей операционной системы ALT Regular KDE.</p>
  <br/>
  <br/>
</div>

## Разработка

Для разработки нужны Git, Node.js 24 и pnpm 10.34.5. Версия pnpm закреплена в
`package.json` в поле `packageManager`; GitHub Actions использует ту же версию.

Установите Node.js 24 подходящим для вашей системы способом. Затем включите
Corepack и активируйте pnpm:

```shell
corepack enable
corepack prepare pnpm@10.34.5 --activate
```

Если Corepack отсутствует в установленной версии Node.js, установите pnpm напрямую:

```shell
npm install --global pnpm@10.34.5
```

Загрузите репозиторий и установите зависимости по зафиксированному lock-файлу:

```shell
git clone https://github.com/OlegShchavelev/ALTKDEWiki.git
cd ALTKDEWiki
pnpm install --frozen-lockfile
```

Для локальной разработки без токена и доступа к GitHub API запустите:

```shell
pnpm run docs:dev
```

`docs:dev` автоматически запускает `history:build --dev` перед VitePress.
Для доступа к dev-серверу с других устройств используйте `pnpm run docs:dev-host`;
эта команда, как в GNOME Wiki, не генерирует данные участников автоматически.

Режим `--dev` создаёт `.vitepress/data/fullteam.json` из списка участников в
`.vitepress/data/team.ts`, без статистики активности. Сгенерированный файл не нужно
добавлять в Git.

## Проверки и сборка

Перед отправкой изменений выполните проверки:

```shell
pnpm run docs:check-types
pnpm run docs:cspell-full
pnpm run docs:yaspeller-full
pnpm run docs:remark-full
```

YaSpeller обращается к сетевому сервису проверки орфографии. Для сборки и просмотра
результата локально:

```shell
pnpm run history:build --dev
pnpm run docs:build
pnpm run docs:preview
```

Полная история Git нужна для корректного отображения истории изменений страниц.
GitHub Actions загружает её через `fetch-depth: 0`.

## Статистика участников

При публикации GitHub Actions запускает `history:build` с `GITHUB_TOKEN` и получает
статистику целевого репозитория KDE. Для локальной генерации статистики передайте
GitHub-токен с доступом на чтение репозитория:

```shell
pnpm run history:build --key="$GITHUB_TOKEN"
```

Задайте `GITHUB_TOKEN` в окружении локально; не добавляйте токен в файлы репозитория.
При необходимости источник можно указать через аргумент
`--repoUrl=https://github.com/OlegShchavelev/ALTKDEWiki`.

## Зеркало

Вся документация из этого репозитория размещается на сайте [alt-kde.wiki](https://alt-kde.wiki/) автоматически.

## Лицензия

MIT Copyright © 2023-present OLEG SHCHAVELEV
