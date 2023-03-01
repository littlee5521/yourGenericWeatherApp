import { weatherMethods } from "../script/weatherItems";


//                  this is to get the value from input and 
//                   submit a request

class suggestLocation {
    searchBar:HTMLInputElement = document.querySelector('.search-bar__input')
    weatherSuggestion:[] = []
    
    async requestGeoLocation(city:string) {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=30e04d1cd0f37221765842a92fb32405`, {mode:'cors'})
        const responseClean = await response.json();
        this.weatherSuggestion = await responseClean
        weatherMethods.createItems(this.weatherSuggestion)
    }
//                      event listener to grab value
    getSuggestions() {
        this.searchBar.addEventListener('input', () =>{
 //       domutils.removeChildren('.sidepanel__button')
        if (this.searchBar.value!=''){
            this.requestGeoLocation(this.searchBar.value)
        }

        } )
    }
}

export const grabLocation = new suggestLocation