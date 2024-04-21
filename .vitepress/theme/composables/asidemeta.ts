import { isValidUrl } from './link'

export const getLists = (data: {}, labels: {}) => {

    if (!data) return []

    const _data = []

    Object.entries(data).forEach(([key, value]) => {
        _data[key] = typeof value !== 'string'
            ? Object.assign({}, { label: labels[key] }, value)
            : { label: labels[key], link: value }
    })

    return { ..._data }
}

export const getLinks = (data: {}, config: {}) => {

    if (!data) return []

    const _data = []

    Object.entries(data).forEach(([key, value]) => {
        (value && config[key]) ?
            _data[key] = Object.assign({}, { id: value }, config[key])
            : {}
    })

    return { ..._data }
}

export const getLicence = (data: any) => {

    if (!data) return {}

    return {
        metadata_license: data
    }

}