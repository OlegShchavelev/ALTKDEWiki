import { isValidUrl } from './link'

export const getThumb = (data: any, alt: string,) => {

    if (typeof data === 'object' && data.src) {
        return data
    } else if (typeof data === 'string') {
        return {
            src: data,
            alt: alt
        }
    } else {
        return {}
    }
}