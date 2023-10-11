import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { Navbar } from "../Navbar/Navbar"
import "./Cart.css"
import { useEffect, useState } from "react"
import { getMyCart } from "../../API/Auth"
export function Cart(){
    const[items,setItems]=useState([])
    const[total,setTotal]=useState([])
    const scrollToCheckout=()=>{
        const targetDiv = document.getElementById('checkoutDiv');

        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const handleCheckout=()=>{

    }
    useEffect(()=>{
        async function getCart(){
            const result=await getMyCart()
            setItems(result)
            var total=0
            for(var i=0;i<result.length;i++){
                total+=result[i].count*result[i]._doc.price
            }
            setTotal(total)
        }
        getCart()

    },[])
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
            <Table style={{width:"80%"}}>
                <TableHead>
                    <TableCell>Item</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                </TableHead>
                <TableBody>
                    {items.map((item)=> 
                    <TableRow id={item._doc._id}>
                        <TableCell>{item._doc.name}</TableCell>
                        <TableCell>{item._doc.price}</TableCell>
                        <TableCell>{item.count}</TableCell>
                        <TableCell>{item.count*item._doc.price}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
            <br></br>
            <div id="checkoutDiv" style={{display:"flex",flexDirection:"column",rowGap:"1vh",justifyContent:"center",alignItems:"center",marginBottom:"3vh",position:"absolute",top:"30%",left:"80%",width:"20%"}}>
                <label>Total: {total}</label>
                <button onClick={handleCheckout} className="CartCheckoutBtn">Checkout</button>
            </div>

            </div>}

        </div>
    )
}