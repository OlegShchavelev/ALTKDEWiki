---
title: Junction
aggregation:
  flatpak: re.sonny.Junction
  sisyphus: junction
appstream:
  id: junction
  name: Junction
  icon: ./img/logo.svg
  summary: Несколько приложений по умолчанию.
  developer:
    name: Sonny Piers
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://github.com/sonnyp/Junction
    bugtracker: https://github.com/sonnyp/Junction/issues
---

# Junction

![Скриншот программы 1](./img/screenshot.png)

**Junction** — приложение, которое вы устанавливаете в качестве приложения по умолчанию для браузеров или других типов файлов. Например, при открытии ссылки вас будет встречать окно программы, где вы сможете выбрать браузер.

⚙️ И не забудьте настроить:

1. Откройте «_Параметры системы_»
2. Перейдите в «_Приложения по умолчанию_»
3. Установите по умолчанию приложение **Junction** для тех вещей, где вам нужен выбор.

<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-flatpak.md-->

---

💡 Советы и хитрости:

— Используйте стрелки для навигации;

— Установите индивидуальные параметры окна для **Junction**, чтобы программа всегда открывалась поверх всех окон;

-- Нажмите **Ctrl+?** и ознакомьтесь с горячими клавишами;

— Если нужно открыть несколько приложений, используйте щелчок средней кнопкой мыши или сочетание клавиш **Ctrl+ЛКМ**, **Ctrl+Enter** или **Ctrl+Пробел**;

— Если вы используете **xdg-open**, то вы можете создать подобный алилас и для **Junction**:

```shell
alias open="flatpak run re.sonny.Junction"
```

Тогда вы можете использовать: `open "URL или ссылка"`.
