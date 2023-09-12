import React, { useState } from "react";
import Button from "react-bootstrap/Button";






export const ItemCount = ({stock , updateTotalCount  }) => {
    console.log(stock);

// const stock = 10

const [count , setCount] = useState(0) ;

const [totalCount , setTotalCount] = useState(0);








const Increment = () => {
if (count <  stock ){
    setCount(count + 1)
} else if (stock === 0) {
    setCount(0)
}


}


const Decrement = () =>{
if (count > 0) {
    setCount(count - 1 )
}
    
}




const onAdd = () =>{
   
if (stock <= 10) {
    setTotalCount(totalCount + count);
    
    console.log(totalCount);
} 

   


}




    return (

        <div >
      
            <p>Stock : {stock}</p>
        <p>Cantidad : {count}</p>
        <Button variant="outline-primary" onClick={Decrement}>-</Button>
        <Button variant="outline-primary" onClick={Increment}>+</Button>
        <Button variant="primary" onClick={onAdd} >Agregar al Carrito</Button>{totalCount}
      </div>

    )
}