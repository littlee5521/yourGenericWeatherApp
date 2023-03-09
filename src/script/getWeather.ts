import {weatherItem} from './weatherItems'
import {splitDay} from './weatherDaySplitting'
import {todayResponse, weatherResponseItem} from './interfaces'
import {cards} from './populateCards'
import {cardMaker} from './createCard'
//                       makes a request to the weather api 
//                         returns a promise 
class getWeather {
    currentDay:todayResponse
    todaysWeatherCont = document.getElementById('todaysWeather')
    
    async makeRequest(lat:number, lon:number) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=30e04d1cd0f37221765842a92fb32405&units=imperial`, {mode:'cors'})
        const responseClean:todayResponse = await response.json()
        this.currentDay = responseClean
        const day = cardMaker.makeCard('Today', this.currentDay.main.temp_max, this.currentDay.main.temp_min, this.currentDay.weather[0].description)
        this.todaysWeatherCont.childNodes[0].remove()
        this.todaysWeatherCont.appendChild(day)
    }

    async sendData (lat:number, lon:number) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=30e04d1cd0f37221765842a92fb32405&units=imperial`, {mode:"cors"})
        const responseClean = await response.json()
        splitDay.splitDay(responseClean)
        cards.popCards()
    }

    getLatLon(arrayTocheck:object[], id:string){
        const cords:number[] = []
        arrayTocheck.forEach((item:weatherItem) =>{
            if(id==item.id){
                cords.push(item.lat)
                cords.push(item.lon)
            }
            
        })
        return cords
    }
}
export const weather = new getWeather