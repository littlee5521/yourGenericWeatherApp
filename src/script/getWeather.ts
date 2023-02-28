
//                       makes a request to the weather api 
//                         returns a promise 
class getWeather {
    async makeRequest() {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=30e04d1cd0f37221765842a92fb32405", {mode:'cors'})
        console.log(response.json())
    }
}
export const weather = new getWeather