import axios from 'axios'

export const fetch = async(movie_name) => {
    try {
        const response=await axios.post('http://127.0.0.1:5000/recommend',movie_name)
     return response.data
    } catch (error) {
        console.log(error)
    }
  

}
