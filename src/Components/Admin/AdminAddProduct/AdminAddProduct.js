import "./AdminAddProduct.css"
import trigroup from "../../../Images/triIcon.png"
import { styled } from '@mui/material/styles';
import {TextField} from "@mui/material"
import { useState } from "react";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";
import defaultImage from "../../../Images/folder.png"
import { addProduct } from "../../../API/Product";
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
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [type,setType]=useState("")
    const [info,setInfo]=useState([""])

    const [selectedImage, setSelectedImage] = useState(null);
    const handleNameChange=(event)=>{
        setName(event.target.value)
    }
    const handlePriceChange=(event)=>{
      setPrice(event.target.value)
    }
    const handleDescriptionChange=(event)=>{
      setDescription(event.target.value)
    }
    const handleCategoryChange=(event)=>{
      setCategory(event.target.value)
    }
    const handleTypeChange=(event)=>{
      setType(event.target.value)
    }
    const handleInfoChange=(event)=>{
      console.log(event.target.id)
      var index=Number(event.target.id)
      var newArr=[]
      for(var i=0;i<info.length;i++){
        newArr.push(info[i])
      }
      newArr[index]=event.target.value
      setInfo(newArr)
    }
    const handleAddInfo=(e)=>{
      setInfo([...info,""])
      e.preventDefault()
    }
  
    const handleImageChange = (event) => {
    
    setSelectedImage(event.target.files[0]);
    };
    const handleSubmit = async (e) => {
        const reader = new FileReader();
    
        reader.onload = async (event) => {
          const buffer = new Uint8Array(event.target.result);
        
          const formData={
            image:buffer,
            name:name,
            contentType:selectedImage? selectedImage.type:"false",
            description:description,
            price:price,
            category:category,
            type:type,
            info:info
          }
          await addProduct(formData)
        }
          
          
        reader.readAsArrayBuffer(selectedImage?selectedImage:new File([1], 'folder.png', { type: 'image/png' }));
        e.preventDefault()
        alert("Product Added Successfully")
      };
    return(
        <div className="AdminAddProductMainDiv">
            <img style={{width:"40%"}} src={trigroup}/>
            <div className="AdminAddProductInputsDiv">
            <form className="AdminAddProductsForm">
            <TextField required onChange={handleNameChange} placeholder="Product Name" style={{backgroundColor:"white"}} label="Product Name" variant="outlined"
      fullWidth type="text" ></TextField>
      <TextField required onChange={handleDescriptionChange} placeholder="Product Description" style={{backgroundColor:"white"}} label="Product Description" variant="outlined"
      fullWidth type="text" ></TextField>
      <TextField required onChange={handlePriceChange} placeholder="Product Price" style={{backgroundColor:"white"}} label="Product Price" variant="outlined"
      fullWidth type="text" ></TextField>
      <TextField required onChange={handleCategoryChange} placeholder="Product Category" style={{backgroundColor:"white"}} label="Product Category" variant="outlined"
      fullWidth type="text" ></TextField>
      <TextField required onChange={handleTypeChange} placeholder="Product Type: pack or box or syringe...etc" style={{backgroundColor:"white"}} label="Product Type" variant="outlined"
      fullWidth type="text" ></TextField>
      <div style={{width:"100%",display:"flex",flexDirection:"row"}}><TextField required={true} id="0" onChange={handleInfoChange} placeholder="Product Info" style={{backgroundColor:"white",width:"95%"}} label="Product Info" variant="outlined"
      fullWidth type="text" ></TextField>
      <button onClick={handleAddInfo}  className="AdminAddProductBtn" style={{width:"5%"}}>+</button></div>
      <div style={{width:"100%",display:"flex",flexDirection:"column",rowGap:"1vh"}}>
        {info.slice(1).map((info,i)=> <TextField id={(i+1)+""} onChange={handleInfoChange} placeholder="Product Info" style={{backgroundColor:"white",width:"95%"}} label="Product Info" variant="outlined"
      fullWidth type="text" ></TextField> )}
      
      </div>

      <Button style={{maxWidth:"100%"}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload Image
        <input style={{opacity:0}} onChange={handleImageChange} id="imageInput" type="file" />
        </Button>
        {selectedImage &&<label>{ selectedImage.name}</label>}
        <button onClick={handleSubmit} type="submit" className="AdminAddProductBtn">Add Product</button>
            </form>


            </div>

        </div>
    )
}