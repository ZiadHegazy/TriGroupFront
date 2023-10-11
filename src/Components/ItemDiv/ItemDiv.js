import "./ItemDiv.css"
import trigroup from "../../Images/triIcon.png"
import composite from "../../Images/grandinoComposite.png"
import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductImage } from "../../API/Product";
export const ItemDiv=(props)=>{
    const navigate=useNavigate()
    const [image,setImage]=useState(null)
    useEffect(()=>{
        async function getImage(){
            const result=await getProductImage(props.item._id)
            setImage(result)
        }
        getImage()

    },[])
    return(
        <div key={props.item._id+"items"} onClick={()=>navigate(`/item/${props.item._id}`,{state:{id:props.item._id}})} className="ItemDiv">
            <img className="ItemImage"  src={image}/>
            <div style={{border:"1px solid black"}}></div>
            <label>{props.item.name}</label>
            <label>{"1 "+props.item.pack}</label>
            <label>EGP</label>
            <label>{props.item.price}</label>
            {props.admin && <div>
                <IconButton onClick={()=>navigate("/admin/editProduct")}>
                    <EditIcon sx={{color:"green"}}/>
                </IconButton>
                <IconButton>
                    <DeleteIcon sx={{color:"red"}}/>
                </IconButton>
            </div>}


        </div>
    )
}