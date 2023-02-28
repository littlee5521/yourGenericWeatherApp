class domUtils {
    removeChildren(selector:string){
    let  temp =   document.querySelectorAll(`${selector}`)
        temp.forEach(item =>{
            item.remove()
        })
    }
}

export const domutils = new domUtils