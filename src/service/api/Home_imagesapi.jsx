import axios from 'axios'

export const fetchHomeImages = async()=>{

  try{
    const response = await axios.get()
    return response.data
  }
  catch (error) {
    // console.error('An error occured while fetching the image ', error)
    return[]
  }

}