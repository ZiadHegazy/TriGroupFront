import { Navbar } from "../../Navbar/Navbar"
import toothAdd from "../../../Images/tooth.png"
import products from "../../../Images/in-stock.png"
import users from "../../../Images/account.png"
import "./AdminHome.css"
import { useNavigate } from "react-router-dom"
export function AdminHome(props){
    const navigate=useNavigate()
    return(
        <div className="AdminHomeMainDiv">
            <Navbar admin={true}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="AdminOptionsDiv">
                <button onClick={()=>navigate("/admin/addProduct")} className="AdminOptionsBtn" > 
                <img style={{width:"100%",height:"100%"}} src={toothAdd}/>
                <label style={{fontSize:"1.2rem"}} >Add New Product</label> 
                </button>
                <button onClick={()=>navigate("/admin/allProducts")} className="AdminOptionsBtn" > 
                <img style={{width:"100%",height:"100%"}} src={products}/>
                <label style={{fontSize:"1.2rem"}} >Show All Products</label> 
                </button>
                <button onClick={()=>navigate("/admin/allUsers")} className="AdminOptionsBtn" > 
                <img style={{width:"100%",height:"100%"}} src={users}/>
                <label style={{fontSize:"1.2rem"}} >Show All Users</label> 
                </button>


            </div>


        </div>
    )
}