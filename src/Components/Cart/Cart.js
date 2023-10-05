import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { Navbar } from "../Navbar/Navbar"
import "./Cart.css"
import { useState } from "react"
export function Cart(){
    const[items,setItems]=useState([{name:"ziad",price:12,count:1},{name:"ziad",price:12,count:1},{name:"ziad",price:12,count:1},{name:"ziad",price:12,count:1},{name:"ziad",price:12,count:1},{name:"ziad",price:12,count:1},{name:"ziad",price:12,count:1},{name:"ziad",price:12,count:1},{name:"ziad",price:12,count:1},{name:"ziad",price:12,count:1},{name:"ziad",price:12,count:1}])
    const scrollToCheckout=()=>{
        const targetDiv = document.getElementById('checkoutDiv');

        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const handleCheckout=()=>{

    }
    return(
        <div className="CartMainDiv">
            <Navbar cart={false}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {items.length==0 && <h1>You do not have any items yet</h1>}
            {items.length!=0 && 
            <div style={{display:"flex",flexDirection:"column",justifyContent:"start",width:"100%"}}>
            <h1>Your Cart</h1>
            {/* {items.length>7 && <button onClick={scrollToCheckout} className="CartCheckoutBtn">Proceed To Checkout</button>} */}
            <Table style={{width:"80%"}}>
                <TableHead>
                    <TableCell>Item</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                </TableHead>
                <TableBody>
                    {items.map((item)=> 
                    <TableRow>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.count}</TableCell>
                        <TableCell>{item.count*item.price}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
            <br></br>
            <div id="checkoutDiv" style={{display:"flex",flexDirection:"column",rowGap:"1vh",justifyContent:"center",alignItems:"center",marginBottom:"3vh",position:"absolute",top:"30%",left:"80%",width:"20%"}}>
                <label>Total: {100}</label>
                <button onClick={handleCheckout} className="CartCheckoutBtn">Checkout</button>
            </div>

            </div>}

        </div>
    )
}