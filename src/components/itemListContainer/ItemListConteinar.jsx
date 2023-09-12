import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount";
import { Description } from "@mui/icons-material";
import { pedirDatos } from "../helpers/pedirDatos";
import { ItemList } from "./itemlist/itemList";


//Query Params

    //Protocolo   / API    / Endpoint
//URL : https://fakestoreapi.com/products 

// GET:
// https://fakestoreapi.com/products ?id=1 limits = 10 le estas pasando con el ? y limits parametros a la url . En este casso le estarias pidiendo la informacion del producto con el id 1

//QUERY SEGMENTS
// GET:
// https://fakestoreapi.com/products/{id} - Se pone asi cuando el parametro es dinamico . Entonces si pones diferentes ids te trae la info del que buscas y eso lo hace dinamico 


// useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//    .then((res) => res.json())
//    .then((data) => {
//     console.log(data.id);
//    })
// }, [])











export const ItemListContainer = () =>{

const [productos , setProductos] = useState([]);

console.log(productos);

useEffect(()=> {

    pedirDatos()
    .then((res) => {
        setProductos(res)
    }).catch((error) => {
        console.log(error)
    })
},[])





    return (
        <div>
            
<ItemList productos={productos}/>                
              
          
               
        
            

   

       

        </div>
    )
}