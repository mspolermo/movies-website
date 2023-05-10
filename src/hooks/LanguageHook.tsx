export default function LanguageHook (Ru: string , En: string , BrowserLanguage: string) {
    if (BrowserLanguage === 'ru' && (Ru)) {
        return Ru
    }
    if (BrowserLanguage === 'ru' && (!Ru)) {
        return En
    }
    if (BrowserLanguage === 'en' && (En)) {
        return En
    } else {
        return Ru
    }
}