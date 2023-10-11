import { TextField,IconButton,InputAdornment, Button } from "@mui/material"
import trigroup from "../../Images/triIcon.png"
import "./Login.css"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../API/Auth";
export function Login(){
  const navigate=useNavigate()
  const [error,showError]=useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [mobile,setMobile]=useState("")
  const [password,setPassword]=useState("")
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleMobileChange=(e)=>{
    setMobile(e.target.value)

  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
  }
  const handleLogin=async()=>{
    const result=await login(mobile,password)
    if(result.admin){
      localStorage.setItem("token",result.token)
      localStorage.setItem("login",true)
      localStorage.setItem("admin",true)
      navigate("/admin")
    }
    else if(result=="wrong username or password"){
      showError(true)
    }else{
      localStorage.setItem("token",result)
      localStorage.setItem("login",true)
      navigate("/")
    }
  }

    return(
        <div className="LoginMainDiv">
            <img style={{width:"40%"}} src={trigroup}/>
            <div className="LoginInputDiv">
                <form className="LoginInputDivForm">
                <TextField onChange={handleMobileChange} required placeholder="Email or Mobile" style={{backgroundColor:"white"}} label="Email or Mobile" variant="outlined"
      fullWidth type="text" InputProps={{
        startAdornment:<i style={{marginRight:"2%"}} className="fa fa-envelope"></i> ,
      }} ></TextField>

        <TextField
        onChange={handlePasswordChange}
        required
        style={{backgroundColor:"white"}}
      variant="outlined"
      type={showPassword ? 'text' : 'password'}
      label="Password"
      fullWidth
      InputProps={{
        
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              edge="end"
              aria-label="toggle password visibility"
              color="black"
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    {error && <label style={{color:"red"}}>Wrong Mobile or Password</label>}
    <button onClick={handleLogin} className="LoginLoginbtn">Login</button>
    <button onClick={()=>navigate("/register")} className="LoginLoginbtn">Register</button>
                </form>

            </div>

        </div>

    )
}