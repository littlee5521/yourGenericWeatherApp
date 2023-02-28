import {weatherMethods} from '../script/weatherItems'


class suggestLocation {
    searchBar:HTMLInputElement = document.querySelector('.search-bar__input')
    
    async requestGeoLocation(city:string) {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=30e04d1cd0f37221765842a92fb32405`, {mode:'cors'})
        const responseClean = await response.json();
        return Promise.resolve(responseClean)
    }

    getSuggestions() {
        this.searchBar.addEventListener('input', () =>{
        this.requestGeoLocation(this.searchBar.value).then(console.log)

        } )
    }
}

export const grabLocation = new suggestLocation