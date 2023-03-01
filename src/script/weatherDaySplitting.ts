import {weatherResponse} from '../script/interfaces'
import {weatherResponseItem} from '../script/interfaces'
import {weatherResponseWeather} from '../script/interfaces'

class days {
    dayID:number
    dayPartList:object[] = []
    constructor(dayID:number){
        this.dayID = dayID
    }
}

class splitDays {
    dayHolder:object[] = []

    splitDay(array:weatherResponse){
        let currentDay:days = undefined
        this.dayHolder = []
        array.list.forEach((item:weatherResponseItem)=>{
            if(currentDay == undefined){
             currentDay = new days(Number(item.dt_txt.slice(0,10).replace(/-/g, '')))
            }
            if(currentDay.dayID<Number(item.dt_txt.slice(0,10).replace(/-/g, ''))){
                this.dayHolder.push(currentDay)
                currentDay = new days(Number(item.dt_txt.slice(0,10).replace(/-/g, '')))
            }
            currentDay.dayPartList.push(item)
            console.log(this.dayHolder)
        })
    }
}

export const splitDay = new splitDays