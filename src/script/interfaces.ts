
//the item returned is a long lsit 
export interface weatherResponse {
    list:[]
}
// each item inside 
export interface weatherResponseItem {
    dt_txt:string
    dt?:number
    main:weatherResponseMain
    pop:number
    weather:weatherResponseWeather[]
    wind:object
}
// a sub obj in the item
interface weatherResponseMain {
    feels_like:number
    grnd_level:number 
    humidity:number 
    pressure:number
    sea_level:number
    temp:number
    temp_max:number
    temp_min:number
}
// another sub item which is nested in a array
interface weatherResponseWeather {
    description:string
    main:string
}

export interface todayResponse{
    weather:todayResponseWeather[]
    main:todayResponseMain
    dt:number
    sys:todayResponseSys
}

interface todayResponseMain{
    temp:number
    feels_like:number
    temp_min:number
    temp_max:number
}

interface todayResponseWeather{
    main:string
    description:string
}
 interface todayResponseSys {
    sunrise:number
    sunset:number
 }