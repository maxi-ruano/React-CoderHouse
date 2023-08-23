import React, { useState } from "react";
import Button from "react-bootstrap/Button";






export const ItemCount = () => {

const stock = 10

const [count , setCount] = useState(0) ;

const [totalCount , setTotalCount] = useState(0);








const Increment = () => {
if (count <  stock ){
    setCount(count + 1)
} 


}


const Decrement = () =>{
if (count > 0) {
    setCount(count - 1 )
}
    
}




const onAdd = () =>{
   

setTotalCount(totalCount + count)
console.log(totalCount);
   


}




    return (

        <div>
        <p>Cantidad de camisas: {count}</p>
        <Button variant="outline-primary" onClick={Decrement}>-</Button>
        <Button variant="outline-primary" onClick={Increment}>+</Button>
        <Button variant="primary" onClick={onAdd} >Agregar al Carrito</Button>{totalCount}
      </div>

    )
}