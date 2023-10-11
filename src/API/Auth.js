import axios from "axios"

const api="http://localhost:8000"
export const getTokenNoLogin= async()=>{
    const token=await axios.get(`${api}/getTokenNoLogin`)
    return token.data


}
export const getTokenLogin= async(username,password)=>{
    const token=await axios.post(`${api}/getTokenNoLogin`,{username:username,password:password})
    return token.data
}
export const validateToken=async()=>{
    const result=await axios.post(`${api}/validateToken`,{token:localStorage.getItem("token")})
    return result.data
}
export const addToCart=async(count,productId,)=>{
    const newToken=await axios.post(`${api}/addToCart`,{token:localStorage.getItem("token"),productId:productId,count:count})
    return newToken.data
}
export const getMyCart=async()=>{
    const cart=await axios.post(`${api}/getMyCart`,{token:localStorage.getItem("token")})
    return cart.data
}
export const login=async(mobile,password)=>{
    const token=await axios.post(`${api}/login`,{token:localStorage.getItem("token"),mobile:mobile,password:password})
    return token.data
}