import axios from "axios";

const api="http://localhost:8000"

export const getProductImage=async(id)=>{
    const response=await axios.get(`${api}/getProductImage/${id}`,{
            responseType: 'arraybuffer'
          })
          const imageBlob = new Blob([response.data], { type: response.headers['content-type']});
          const imageUrl = URL.createObjectURL(imageBlob);
          return imageUrl

}
export const getProduct=async(id)=>{
    const response=await axios.get(`${api}/getProduct/${id}`)
      return response.data

}