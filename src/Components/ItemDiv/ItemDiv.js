import "./ItemDiv.css"
import trigroup from "../../Images/triIcon.png"
import composite from "../../Images/grandinoComposite.png"
import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
export const ItemDiv=(props)=>{
    const navigate=useNavigate()
    return(
        <div onClick={()=>navigate("/item/1")} className="ItemDiv">
            <img className="ItemImage" style={{width:"80%"}} src={composite}/>
            <div style={{border:"1px solid black"}}></div>
            <label>Composite Crown A2</label>
            <label>1 Pack</label>
            <label>EGP</label>
            <label>405</label>
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