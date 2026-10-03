type MetadataEntry = Record<string, unknown>
type LinkId = string | number | { id: string | number }

export const getLists = (data: Record<string, string | MetadataEntry>, labels: Record<string, string>) => {
  if (!data) return []

  const _data: Record<string, MetadataEntry> = {}

  Object.entries(data).forEach(([key, value]) => {
    _data[key] =
      typeof value !== 'string'
        ? Object.assign({}, { label: labels[key] }, value)
        : { label: labels[key], link: value }
  })

  return { ..._data }
}

export const getLinks = (data: Record<string, LinkId>, config: Record<string, MetadataEntry>) => {
  if (!data) return

  const _data: Record<string, MetadataEntry> = {}

  Object.entries(data).forEach(([key, value]) => {
    value && config[key] ? (_data[key] = Object.assign({}, { id: typeof value === 'object' ? value.id : value }, config[key])) : {}
  })

  return Object.assign({}, _data)
}

export const getKeywords = (data: Record<string, string>, config: Record<string, any>) => {
  if (!data) return

  const _data: Record<string, any> = {}

  Object.values(data).forEach((value: string) => {
    if (value && config[value]) {
      _data[value] = config[value]
    }
  })

  return _data
}

export const getLicence = (data: any) => {
  if (!data) return {}

  return {
    metadata_license: data
  }
}
