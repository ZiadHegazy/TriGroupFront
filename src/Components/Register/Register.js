import { TextField,IconButton,InputAdornment, Button } from "@mui/material"
import trigroup from "../../Images/triIcon.png"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import "../Login/Login.css"
export function Register(){
  const handleRegister=async()=>{
    
  }
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

    return(
        <div className="LoginMainDiv">
            <img style={{width:"40%"}} src={trigroup}/>
            <div className="LoginInputDiv">
                <TextField placeholder="Email" style={{backgroundColor:"white"}} label="Email" variant="outlined"
      fullWidth type="text" InputProps={{
        startAdornment:<i style={{marginRight:"2%"}} className="fa fa-envelope"></i> ,
      }} ></TextField>
      <TextField placeholder="Mobile" style={{backgroundColor:"white"}} label="Mobile" variant="outlined"
      fullWidth type="text" InputProps={{
        startAdornment:<i style={{marginRight:"2%"}} className="fa fa-phone"></i> ,
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
    <TextField
        
        style={{backgroundColor:"white"}}
      variant="outlined"
      type={showPassword ? 'text' : 'password'}
      label="Confirm Password"
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
    <TextField placeholder="Address" style={{backgroundColor:"white"}} label="Address" variant="outlined"
      fullWidth type="text" InputProps={{
        startAdornment:<i style={{marginRight:"2%"}} className="fas fa-map-marker-alt"></i> ,
      }} ></TextField>
      <TextField placeholder="Maps URL" style={{backgroundColor:"white"}} label="Maps URL" variant="outlined"
      fullWidth type="text" InputProps={{
        startAdornment:<i style={{marginRight:"2%"}} className="fas fa-location-arrow"></i> ,
      }} ></TextField>
    <button onClick={handleRegister} className="LoginLoginbtn">Register</button>

            </div>

        </div>

    )
}