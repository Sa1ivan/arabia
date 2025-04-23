import {IItemsPriceData} from "../models/items.model";

export function priceMapper(item: string): IItemsPriceData[] {
    const desc = item.slice(item.indexOf('hasOfferCatalog'), item.indexOf('review')).split("{");
    const priceData: IItemsPriceData[] = [];
    let allPricesName: string[] = [];
    const allPricesNumber: string[] = [];

    desc.forEach((price, i) => {
        if(price.indexOf("price") > 0) {
            allPricesNumber.push(price.slice(price.indexOf("ice") + 6, price.indexOf(',"priceCurrency')-1));
        }

        if(price.indexOf("name") > 0 && price.indexOf("OfferCatalog") < 0) {
            allPricesName.push(price.slice(price.indexOf("name") + 7, price.indexOf('"}')).toUpperCase());
        }
    });

    allPricesNumber.forEach((price, i) => {
        priceData.push({
            number: price,
            name: allPricesName[i]
        })
    })

    return priceData;
}