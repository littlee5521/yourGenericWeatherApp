import {weatherItem} from './weatherItems'
import {splitDay} from './weatherDaySplitting'
//                       makes a request to the weather api 
//                         returns a promise 
class getWeather {
    async makeRequest() {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=30e04d1cd0f37221765842a92fb32405", {mode:'cors'})
    }

    async sendData (lat:number, lon:number) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=30e04d1cd0f37221765842a92fb32405&units=imperial`, {mode:"cors"})
        const responseClean = await response.json()
        splitDay.splitDay(responseClean)
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