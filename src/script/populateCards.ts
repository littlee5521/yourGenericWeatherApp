import { weatherResponseItem } from './interfaces'
import {splitDay} from './weatherDaySplitting'
import {days} from './weatherDaySplitting'
import {cardMaker} from './createCard'
import fromUnixTime from 'date-fns/fromUnixTime'
import { format, addMinutes } from 'date-fns';


class populateCards{
    body = document.querySelector('.forecast-area')
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    index:number = 0
    formatDate(date:Date) {
        return format(addMinutes(date, date.getTimezoneOffset()), 'yyyy-MM-dd HH:mm:ss');
      }
    popCards(){
        splitDay.dayHolder.forEach((item:days)=>{
            const values = getVal.value(item)
            console.log('hello')
           console.log(this.formatDate(fromUnixTime(item.dayPartList[0].dt)))
           console.log(this.tz)
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
        temp.max = Math.trunc(temp.max)
        temp.min = Math.trunc(temp.min)
        return temp
    }
}

const getVal = new getMinMax
export const cards = new populateCards