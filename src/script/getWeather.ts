class getWeather {
    async makeRequest() {
        const response = await fetch('api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=30e04d1cd0f37221765842a92fb32405', {mode:'cors'})
        console.log(await response)
    }
}
export const weather = new getWeather