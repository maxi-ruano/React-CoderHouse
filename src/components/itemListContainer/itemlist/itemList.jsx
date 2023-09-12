import { ItemCard } from "../../itemCard/itemCard"




export const ItemList = ({productos}) =>{
 return (
     <div className="container">
<br></br>
     <h3>LISTA DE PRODUCTOS: </h3>
     
             <div className="row">
     
                {productos.map((producto) => <ItemCard item={producto} key={producto.id}/>

                    
               )}
     
     
     </div>
     
     
         
     
         
     </div>
 )


 





}