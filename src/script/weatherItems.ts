interface weatherItem {
    country:string 
    lat:number 
    lon:number
    name:string 
    state?:string
    id?: string
}

let weatherArray:object[]

class weatherItems {
//          to create the dom elements for suggestions
    createItems(itemArray:[]) {
        const searchBarBody = document.querySelector('.search-bar-cont')
        itemArray.forEach(item => {
            let weatherobjConvert:weatherItem = item
            console.log(weatherobjConvert)
            weatherobjConvert.id = weatherobjConvert.name + weatherobjConvert.lat + weatherobjConvert.lon
           let temp = document.createElement('button')
           temp.id = weatherobjConvert.id


           if (weatherobjConvert.state == undefined){
            weatherobjConvert.state = ''
           }
           temp.textContent = weatherobjConvert.name+' ' + weatherobjConvert.country+' ' + weatherobjConvert.state
           console.log(temp.id)
           searchBarBody.appendChild(temp)
           temp.addEventListener('click', () =>{
            console.log(temp.id)
           })
        });
    }
}

export const weatherMethods = new weatherItems