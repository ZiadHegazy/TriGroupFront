import "../Home/Home.css"
import trigroup from "../../Images/triIcon.png"
import { useNavigate } from "react-router-dom"
export function Navbar(props){
    const navigate=useNavigate()
    return(
        <div className="HomeNavBar">
                <img className="HomeLogoImage" src={trigroup}/>
                <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button">
                 <i className="fa fa-search"></i>
                </button>
                </div>
                {!props.admin && <button onClick={()=>navigate("/cart")} className="HomeCartButton" disabled={!props.cart} ><i className="fa fa-shopping-cart"></i></button>}                
                <button onClick={()=>navigate("/login")} className="HomeLoginButton"> Login <i class="fa fa-user icons"></i> </button>
                {!props.admin && <button onClick={()=>navigate("/register")} className="HomeLoginButton"> Register <i class="fa fa-user icons"></i> </button>
}
                

            </div>
    )
}