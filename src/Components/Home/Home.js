import { useEffect, useState } from "react"
import trigroup from "../../Images/triIcon.png"
import "./Home.css"
import { Navbar } from "../Navbar/Navbar"
import { ItemDiv } from "../ItemDiv/ItemDiv"
export function Home(){
    const[category,setCategory]=useState([])
    useEffect(()=>{
        var arr=[]
        for(var i=0;i<100;i++){
            arr.push(i)
        }
        setCategory(arr)
        
    },[category])
    
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
            <div className="HomeProductsDiv">
                {category.map((category)=><ItemDiv/>)}

            </div>

        </div>
    )

}