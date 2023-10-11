import "./ItemPage.css"
import trigroup from "../../Images/triIcon.png"
import composite from "../../Images/grandinoComposite.png"
import { Navbar } from "../Navbar/Navbar"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getProduct, getProductImage } from "../../API/Product";
import { useLocation } from "react-router-dom";
import { addToCart } from "../../API/Auth";
import { Alert } from "@mui/material";
export function ItemPage(){
    const [successAdd,setSuccessAdd]=useState(false)
    const location=useLocation()
    const id=location.state.id
    const [count,setCount]=useState(1)
    const [image, setImage] = useState(null);
    const [productDetails,setProductDetails]=useState(null)
    const handleCountDown=()=>{
        if(count>1)
           setCount(count-1)
    }
    const handleCountUp=()=>{
        setCount(count+1)
    }
    const handleAddToCart= async()=>{
        const token=await addToCart(count,id)
        localStorage.setItem("token",token)
        setSuccessAdd(true)
        setTimeout(()=>{
            setSuccessAdd(false)
        },3000)
        
    }
    useEffect(() => {
        // Replace 'your_image_id' with the actual image ID you want to display
        async function getProductDetails(){
            const result=await getProductImage(id)
            setImage(result)
            const product=await getProduct(id)
            setProductDetails(product)
        }
        getProductDetails()
        
    }, []);
    return(
        <div className="ItemPageMainDiv">
            <Navbar cart={true}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="ItemPageImageDiv">
                <img style={{width:"70%",height:"90%"}} src={image}/>

            </div>
           {productDetails &&  <div className="ItemPageInfo">
           <h2>Product Details:</h2>
            <label>{productDetails && productDetails.name}</label>
            <label>{"1 "+productDetails.pack}</label>
            <label>EGP</label>
            <label>{productDetails.price}</label>
            {productDetails.info && productDetails.info.length!=0  && <h2>Product Info:</h2>}
            {productDetails.info && productDetails.info.length!=0 &&  <ul>
                {productDetails.info.map((info)=> <li>{info}</li>)}
            </ul>}
            <div className="PlusMinus">
                <button onClick={handleCountDown} className="plusminusBtn">-</button>
                <label>{count}</label>
                <button onClick={handleCountUp} className="plusminusBtn">+</button>
                <button onClick={handleAddToCart} className="AddtoCartBtn">Add To Cart</button>

            </div>
            {successAdd && <Alert severity="success">Item Successfully Added To Cart</Alert>}

            </div>}

        </div>
    )

}