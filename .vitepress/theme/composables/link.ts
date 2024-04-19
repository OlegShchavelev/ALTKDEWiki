export const isValidUrl = (urlString: string) => {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+
   '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
   '((\\d{1,3}\\.){3}\\d{1,3}))'+
   '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
   '(\\?[;&a-z\\d%_.~+=-]*)?'+
   '(\\#[-a-z\\d_]*)?$','i');
 return !!urlPattern.test(urlString);
 }
 

export const getDomainName = (url: { match: (arg0: RegExp) => any[]; }) => url.match(/^https?:\/\/([^\/]+)\.[^\/]+/)[1];