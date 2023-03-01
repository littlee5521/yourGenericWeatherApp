
//the item returned is a long lsit 
export interface weatherResponse {
    list:[]
}
// each item inside 
export interface weatherResponseItem {
    dt_txt:string
    main:weatherResponseMain
    pop:number
    weather:[]
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
export interface weatherResponseWeather {
    description:string
    main:string
}