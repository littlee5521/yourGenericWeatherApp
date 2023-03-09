import {weatherResponse} from '../script/interfaces'
import {weatherResponseItem} from '../script/interfaces'
// class to hold a day, parts refers to the objects returned in 3 hour steps
export class days {
    dayID:number
    dayPartList:weatherResponseItem[] = []
    constructor(dayID:number){
        this.dayID = dayID
    }
}

class splitDays {
    dayHolder:object[] = []
// takes the array of information and uses their timestamp to split into days
    splitDay(array:weatherResponse){
        let currentDay:days = undefined
        this.dayHolder = []
        array.list.forEach((item:weatherResponseItem)=>{
            /*console.log( fromUnixTime(item.dt))
            if(isSameDay(fromUnixTime(item.dt), fromUnixTime(1678147200))){
                console.log('hello')
            }*/
            if(currentDay == undefined){
             currentDay = new days(Number(item.dt_txt.slice(0,10).replace(/-/g, '')))
            }
            if(currentDay.dayID<Number(item.dt_txt.slice(0,10).replace(/-/g, ''))){
                this.dayHolder.push(currentDay)
                currentDay = new days(Number(item.dt_txt.slice(0,10).replace(/-/g, '')))
            }
            currentDay.dayPartList.push(item)
        })
        this.dayHolder.push(currentDay)
    }
}

export const splitDay = new splitDays