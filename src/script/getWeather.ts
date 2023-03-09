import {weatherItem} from './weatherItems'
import {splitDay} from './weatherDaySplitting'
import {weatherResponseItem} from './interfaces'
import {cards} from './populateCards'
import fromUnixTime from 'date-fns/fromUnixTime'
//                       makes a request to the weather api 
//                         returns a promise 
class getWeather {
    currentDay:weatherResponseItem
    
    async makeRequest(lat:number, lon:number) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=30e04d1cd0f37221765842a92fb32405&units=imperial`, {mode:'cors'})
        const responseClean:weatherResponseItem = await response.json()
        this.currentDay = responseClean
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