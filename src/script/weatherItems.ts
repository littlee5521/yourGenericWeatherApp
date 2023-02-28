interface weatherItem {
    country:string 
    lat:number 
    lon:number
    name:string 
    state?:string
}

let weatherArray:object[]

class weatherItems {

    createItems(itemArray:[]) {
        itemArray.forEach(item => {
           let weatherObj:weatherItem = item
            weatherArray.push(weatherObj)
        });
    }
}

export const weatherMethods = new weatherItems