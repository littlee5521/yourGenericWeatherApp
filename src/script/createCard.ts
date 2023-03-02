class newCard {
    makeCard(day:string, maxTemp:number, minTemp:number, desc:string, rain:number){
        const cardHolder = document.createElement('div')
        cardHolder.classList.add('card-holder')
            const date = document.querySelector('p')
            date.classList.add('title-date')
            date.textContent = day
        cardHolder.appendChild(date)

            const maxMinCont = document.createElement('div')
            maxMinCont.classList.add('max-min')
                const max = document.createElement('p')
                max.textContent = `Days max: ${maxTemp}`
            maxMinCont.appendChild(max)
                const min = document.createElement('p')
                min.textContent = `days min: ${minTemp}`
            maxMinCont.appendChild(min)
        cardHolder.appendChild(maxMinCont)

            const description = document.createElement('p')
            description.classList.add('description')
            description.textContent = desc
        cardHolder.appendChild(description)

            const chanceForRain = document.createElement('p')
            chanceForRain.classList.add('rain')
            chanceForRain.textContent = `Chance of Rain ${rain*100}`
        cardHolder.appendChild(chanceForRain)
        return cardHolder
    }
}

export const cardMaker = new newCard