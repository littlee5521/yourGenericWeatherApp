class suggestLocation {
    searchBar:HTMLInputElement = document.querySelector('.search-bar__input')

    async requestGeolocation(city:string) {
        const responnse = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=30e04d1cd0f37221765842a92fb32405`)
        const responseClean = (await responnse).json()
        return responseClean
    }

    getSuggestions() {
        this.searchBar.addEventListener('input', () =>{
            console.log(this.requestGeolocation(this.searchBar.value))
        } )
    }
}

export const grabLocation = new suggestLocation