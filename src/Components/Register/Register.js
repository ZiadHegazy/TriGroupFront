import { TextField,IconButton,InputAdornment, Button, Tooltip, Fade } from "@mui/material"
import trigroup from "../../Images/triIcon.png"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import "../Login/Login.css"
export function Register(){
  const [userLocation, setUserLocation] = useState(null);
  const handleRegister=async()=>{
    
  }
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleGetLocation=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => console.error('Error getting location:', error)
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    console.log(userLocation)
  }
    return(
        <div className="LoginMainDiv">
            <img style={{width:"40%"}} src={trigroup}/>
            <div className="LoginInputDiv">
                <form className="LoginInputDivForm">
                <TextField placeholder="Email" style={{backgroundColor:"white"}} label="Email" variant="outlined"
      fullWidth type="text" InputProps={{
        startAdornment:<i style={{marginRight:"2%"}} className="fa fa-envelope"></i> ,
      }} ></TextField>
      <TextField required placeholder="Mobile" style={{backgroundColor:"white"}} label="Mobile" variant="outlined"
      fullWidth type="text" InputProps={{
        startAdornment:<i style={{marginRight:"2%"}} className="fa fa-phone"></i> ,
      }} ></TextField>

        <TextField
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
    <TextField
        required
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
    <TextField required placeholder="Address" style={{backgroundColor:"white"}} label="Address" variant="outlined"
      fullWidth type="text" InputProps={{
        startAdornment:<i style={{marginRight:"2%"}} className="fas fa-map-marker-alt"></i> ,
      }} ></TextField>
      <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center"}}><TextField required placeholder="Maps URL" style={{backgroundColor:"white",width:"92%"}} label="Maps URL" variant="outlined"
      fullWidth type="text" InputProps={{
        startAdornment:<i style={{marginRight:"2%"}} className="fas fa-location-arrow"></i> ,
      }} ></TextField> 
      <Tooltip style={{width:"5%",height:"100%"}} title="This button gets you your location" TransitionComponent={Fade}> <button onClick={handleGetLocation} className="LoginLoginbtn"><i className="fas fa-location-arrow"></i></button></Tooltip>
      </div>
      
    <button onClick={handleRegister} className="LoginLoginbtn">Register</button>
                </form>

            </div>

        </div>

    )
}