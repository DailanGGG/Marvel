// import axios from "axios"

// const api = axios.create({
//     baseURL: 'https://restcountries.eu/rest/v2',
//     headers:{
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//     },
// })

// export default{
//     //Metodo para obtener los países
//     getCountries(){
//         return api.get('/all')
//     },
//     //Metodo para obtener detalle de país
//     getDetail(countryCode){
//         return api.get('/alpha/' + countryCode)
//     }
// }

import api from "./marvelApi"

export default {
    //Metodo para obtener los personajes
    getCharacters(offset) {
        return api.get('/characters?offset=' + offset)
    },
    //Metodo para obtener los comics
    getComics() {
        return api.get('/comics')
    }
}