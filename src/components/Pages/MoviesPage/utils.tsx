import {Item} from "../../../types/filtersTypes";

export function languageFilters(filters: string[], allFilters: Item[], language: string) {
    let filtersBy: Item[] = []
    for (let filter of filters){
        let genreId = allFilters.find(all => all.nameEn === filter)
        if (genreId){
            filtersBy.push(genreId)
        }
    }

    let filtersByLang = []
    for (let filter of filtersBy){
        if(language === 'en'){
            filtersByLang.push(filter.nameEn)
        } else {
            filtersByLang.push(filter.nameRu)
        }
    }
    let filtersCharUp = []
    for (let filter of filtersByLang){
        filtersCharUp.push(firstCharUp(filter))
    }
    return filtersCharUp
}

export function firstCharUp(str:any) {
    return str.slice(0,1).toUpperCase() + str.slice(1)
}