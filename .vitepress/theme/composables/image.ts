import { isValidUrl } from './link'

export const assetImage = (url: string, path: string) => {
    
    if (!url) return
    if (isValidUrl(url) != false) return url

    return (url[0] === './') ? new URL(`/${path.slice(1) + url.slice(2)}`, import.meta.url).href : url

}

