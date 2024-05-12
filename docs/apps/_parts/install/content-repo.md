## Установка из репозитория

**{{ $frontmatter?.frontmatter?.name }}** можно установить любым привычным и удобным способом:

<!--@include: @apps/_parts/install/software-repo.md-->

**Установка при помощи терминала**

::: tabs
==apt-get
```shell-vue
su -
apt-get update
apt-get install {{ $frontmatter?.aggregation?.sisyphus.id ?? $frontmatter?.aggregation?.sisyphus }}
```
==epm
```shell-vue
epm -i {{ $frontmatter?.aggregation?.sisyphus.id ?? $frontmatter?.aggregation?.sisyphus }}
```
:::
