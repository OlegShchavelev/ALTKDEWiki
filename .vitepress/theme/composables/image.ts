import { isValidUrl } from './link'

export const assetImage = (url: string, path: any) => {
    
    if (!url) return
    if (isValidUrl(url) != false) return url

    console.log(isValidUrl(url));

    return new URL(`/${path.slice(1) + url.slice(2)}`, import.meta.url).href

}

