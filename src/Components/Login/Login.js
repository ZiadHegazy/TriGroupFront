import { TextField,IconButton,InputAdornment, Button } from "@mui/material"
import trigroup from "../../Images/triIcon.png"
import "./Login.css"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Login(){
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleLogin=async()=>{
    
  }

    return(
        <div className="LoginMainDiv">
            <img style={{width:"40%"}} src={trigroup}/>
            <div className="LoginInputDiv">
                <TextField placeholder="Email or Mobile" style={{backgroundColor:"white"}} label="Email or Mobile" variant="outlined"
      fullWidth type="text" InputProps={{
        startAdornment:<i style={{marginRight:"2%"}} className="fa fa-envelope"></i> ,
      }} ></TextField>

        <TextField
        
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
    <button onClick={handleLogin} className="LoginLoginbtn">Login</button>
    <button onClick={()=>navigate("/register")} className="LoginLoginbtn">Register</button>

            </div>

        </div>

    )
}