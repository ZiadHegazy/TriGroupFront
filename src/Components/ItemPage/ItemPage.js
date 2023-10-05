import "./ItemPage.css"
import trigroup from "../../Images/triIcon.png"
import composite from "../../Images/grandinoComposite.png"
import { Navbar } from "../Navbar/Navbar"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getProduct, getProductImage } from "../../API/Product";
export function ItemPage(){
    const [image, setImage] = useState(null);
    const [productDetails,setProductDetails]=useState(null)
    useEffect(() => {
        // Replace 'your_image_id' with the actual image ID you want to display
        async function getProductDetails(){
            const imageId = '651e8c833f8a349e900474a4';
            const result=await getProductImage(imageId)
            setImage(result)
            const product=await getProduct(imageId)
            setProductDetails(product)
        }
        getProductDetails()
        
    }, []);
    return(
        <div className="ItemPageMainDiv">
            <Navbar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="ItemPageImageDiv">
                <img style={{width:"100%",height:"97%"}} src={image}/>

            </div>
            <div className="ItemPageInfo">
            <label>{productDetails && productDetails.name}</label>
            <label>1 Pack</label>
            <label>EGP</label>
            <label>405</label>
            <h2>Product Info:</h2>
            <ul>
                <li>
                    can heal injury
                </li>
                <li>
                    can close wounds
                </li>
            </ul>
            <div className="PlusMinus">
                <button className="plusminusBtn">-</button>
                <label>2</label>
                <button className="plusminusBtn">+</button>
                <button className="AddtoCartBtn">Add To Cart</button>

            </div>

            </div>

        </div>
    )

}