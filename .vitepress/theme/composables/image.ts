import { isValidUrl } from './link'

export const assetImage = (url: string, path: string) => {
    
    if (!url) return
    if (isValidUrl(url) != false) return url

    return new URL(`${path + url.slice(2)}`, import.meta.url).href

}

