import { useEffect, useState } from "react"
import trigroup from "../../Images/triIcon.png"
import "./Home.css"
import { Navbar } from "../Navbar/Navbar"
import { ItemDiv } from "../ItemDiv/ItemDiv"
import { getAllProducts } from "../../API/Product"
import { getTokenNoLogin, validateToken } from "../../API/Auth"
import { CircularProgress } from "@mui/material"
export function Home(){
    const [loading,setLoading]=useState(true)
    const[allProducts,setAllProducts]=useState([])
    useEffect(()=>{
        async function getProducts(){
            setAllProducts(await getAllProducts())
        }
        async function getToken(){
            if(!localStorage.getItem("token")){
                const token=await getTokenNoLogin()
                localStorage.setItem("token",token)
            }

        }
        async function validateTokenHome(){
            if(localStorage.getItem("token")){
                const result=await validateToken()
                if(result !="goodToken"){
                    localStorage.setItem("token",result)
                }
            }
        }
        setLoading(true)
        getProducts()
        getToken()
        validateTokenHome()
        setLoading(false)
    },[])
    
    return(
        <div className="HomeMainDiv">
            <Navbar cart={true}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            
            {/* <div className="HomeCategoryDiv">
                {category.map((category)=><button>ziad</button>)}

            </div> */}
            <h1>Our Products</h1>
            {loading && <CircularProgress style={{alignSelf:"center"}}/>}
            <div className="HomeProductsDiv">
                {allProducts.map((product)=><ItemDiv  item={product}/>)}

            </div>
        </div>
    )

}