//               should be refactored so dom isnt mixed here
import { weather } from "./getWeather"

export interface weatherItem {
    country:string 
    lat:number 
    lon:number
    name:string 
    state?:string
    id?: string
}

let weatherArray:object[] = []

class weatherItems {
//          to create the dom elements for suggestions
    createItems(itemArray:[]) {
        const searchBarBody = document.querySelector('.search-bar-cont')
        itemArray.forEach(item => {
            let weatherobjConvert:weatherItem = item
            weatherobjConvert.id = weatherobjConvert.name + weatherobjConvert.lat + weatherobjConvert.lon

            while(weatherArray.length>=5){
                weatherArray.shift()
            }
            weatherArray.push(weatherobjConvert)
           
           
            let temp = document.createElement('button')
           temp.id = weatherobjConvert.id
            temp.classList.add('sidepanel__button')

           if (weatherobjConvert.state == undefined){
            weatherobjConvert.state = ''
           }

           temp.textContent = weatherobjConvert.name+', ' + weatherobjConvert.country+' ' + weatherobjConvert.state

           //makes sure only 5 options are up at once
           if (document.querySelectorAll('.sidepanel__button').length >= 5){
            document.querySelectorAll('.sidepanel__button')[0].remove()
           }
           searchBarBody.appendChild(temp)
           temp.addEventListener('click', () =>{
             const latLon = weather.getLatLon(weatherArray, temp.id)
             weather.sendData(latLon[0], latLon[1])
           })
        });
    }
}

export const weatherMethods = new weatherItems