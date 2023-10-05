import { useEffect, useState } from "react"
import { ItemDiv } from "../../ItemDiv/ItemDiv"
import { Navbar } from "../../Navbar/Navbar"

export function AdminAllProducts(props){
    const [allProducts,setAllProducts]=useState([])
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
            <Navbar admin={true}/>
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
                {category.map((category)=><ItemDiv admin={true}/>)}

            </div>

        </div>


    )
}