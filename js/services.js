const API_KEY = '4bc1a1eb2717dd75924158f766f12e16'
const BASE_URL = 'https://api.themoviedb.org/3/'
const LANGUAGE = '&language=ru-RU'

const getData = url => fetch(url)
        .then(response => {
            if(response.ok){
                return response.json()
            }
            throw `Что-то пошло не так, ошибка ${response.status}`
        }) 
        .catch(err => console.error(err))

export const getTrends = async (type = "all", period = "week", page = 1) =>{ 
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`
    return await getData(url) 

}


// trending/all/day?api_key=<<api_key>>