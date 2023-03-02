import { weatherResponseItem } from './interfaces'
import {splitDay} from './weatherDaySplitting'
import {days} from './weatherDaySplitting'

class populateCards{
    index:number = 0
    popCards(){
        splitDay.dayHolder.forEach((item:days)=>{
            const values = getVal.value(item)
            console.log(values.min)
            console.log(values.max)
        })
    }
}

class getMinMax{
    value(day:days){
        let temp = {
            min: 400,
            max: 0
        }
        day.dayPartList.forEach((weatherPart:weatherResponseItem)=>{
            if(temp.min>weatherPart.main.temp_min){
                temp.min = weatherPart.main.temp_min
            }
            if(temp.max<weatherPart.main.temp_max){
                temp.max = weatherPart.main.temp_max
            }
        })
        return temp
    }
}

const getVal = new getMinMax
export const cards = new populateCards