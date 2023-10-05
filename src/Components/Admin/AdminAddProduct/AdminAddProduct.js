import "./AdminAddProduct.css"
import trigroup from "../../../Images/triIcon.png"
import { styled } from '@mui/material/styles';
import {TextField} from "@mui/material"
import { useState } from "react";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";
import defaultImage from "../../../Images/folder.png"
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  
export function AdminAddProduct(props){
    const [name,setName]=useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const handleNameChange=(event)=>{
        setName(event.target.value)
    }
    const handleImageChange = (event) => {
    console.log("11")
    console.log(event.target.files)
    setSelectedImage(event.target.files[0]);
    };
    const loadImage = async (url) => {
      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        setImageBlob(new Blob([arrayBuffer], { type: 'image/jpeg' }));  // Adjust type based on your image format
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };
    const handleSubmit = async () => {
        const reader = new FileReader();
    
        reader.onload = async (event) => {
          const buffer = new Uint8Array(event.target.result);
          console.log(selectedImage)
          const formData={
            image:buffer,
            name:name,
            contentType:selectedImage.type
          }
          
          await axios.post('http://localhost:8000/addProduct', formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }})
        };
        console.log(new FileReader(defaultImage))
        reader.readAsArrayBuffer(selectedImage? selectedImage:loadImage(defaultImage.url));
      };
    return(
        <div className="AdminAddProductMainDiv">
            <img style={{width:"40%"}} src={trigroup}/>
            <div className="AdminAddProductInputsDiv">
            <TextField onChange={handleNameChange} placeholder="Product Name" style={{backgroundColor:"white"}} label="Product Name" variant="outlined"
      fullWidth type="text" ></TextField>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload Image
        <input style={{opacity:0}} onChange={handleImageChange} id="imageInput" type="file" />
        </Button>
        {selectedImage &&<label>{ selectedImage.name}</label>}
        <button onClick={handleSubmit} className="AdminAddProductBtn">Add Product</button>


            </div>

        </div>
    )
}