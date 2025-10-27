## Установка из репозитория

::: code-group

```shell-vue[apt-get]
su -
apt-get update
apt-get install {{ $frontmatter?.aggregation?.sisyphus?.id ?? $frontmatter?.aggregation?.sisyphus }}
```

```shell-vue[epm]
epm -i {{ $frontmatter?.aggregation?.sisyphus?.id ?? $frontmatter?.aggregation?.sisyphus }}
```

:::

::: warning ... не забывай
Расширения, установленные таким способом, появляются только после перезагрузки компьютера.
:::
