import { weatherResponseItem } from './interfaces'
import {splitDay} from './weatherDaySplitting'
import {days} from './weatherDaySplitting'
import {cardMaker} from './createCard'
import fromUnixTime from 'date-fns/fromUnixTime'
import { format, addMinutes } from 'date-fns';


class populateCards{
    body = document.querySelector('.forecast-area')

    deleteCards() {
       const temp = this.body.childElementCount
        let temp2 = 0
        while(temp>temp2){
            this.body.childNodes.forEach((item:Element) =>{
                this.body.removeChild(item)
                temp2++
            })
        }
    }
  //  tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    formatDate(date:Date) {
        return format(addMinutes(date, date.getTimezoneOffset()), 'cccc');
      }
    popCards(){

        console.log(this.body.childNodes)

        splitDay.dayHolder.forEach((item:days)=>{

            const values = getVal.value(item)
            let time =this.formatDate(fromUnixTime(item.dayPartList[0].dt))
           let card = cardMaker.makeCard(time, values.max, values.min, item.dayPartList[0].weather[0].description, item.dayPartList[0].pop)
           this.body.appendChild(card)
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