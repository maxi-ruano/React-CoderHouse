import React from "react";

export const Contenedor = ({children}) =>{   // se pueden recibir como propiedades otros componentes tambien , en este caso se le pasa los componentes tutores y cliclear jsx
    // tambien se les puede pasar funciones 
    console.log(children);
   return (

    <div>
{children}
    </div>
   )
}