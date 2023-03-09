import { todayResponse, weatherResponseItem } from './interfaces'
import {splitDay} from './weatherDaySplitting'
import {days} from './weatherDaySplitting'
import {cardMaker} from './createCard'
import fromUnixTime from 'date-fns/fromUnixTime'
import { format, addMinutes } from 'date-fns';
import {weather} from './getWeather'


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

      // i think this is kind of a crappy fix, because of the order everythings called current day wasnt being defined so now its a async function
  async  popCards(){
        const temp:todayResponse = await weather.currentDay

        

        splitDay.dayHolder.forEach((item:days)=>{
            let time =this.formatDate(fromUnixTime(item.dayPartList[0].dt))


            if(time!=this.formatDate(fromUnixTime(temp.dt))){
                if(item.dayPartList.length==8){
                    const values = getVal.value(item)
                    let card = cardMaker.makeCard(time, values.max, values.min, item.dayPartList[0].weather[0].description, item.dayPartList[0].pop)
                    this.body.appendChild(card)
                }   
            }



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