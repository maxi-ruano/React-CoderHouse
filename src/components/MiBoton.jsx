import React from "react"; 

export const MiBoton = ({children , click})=>{ // esta recibiendo como propiedades a los children y tambien la funcion click 
    return (
        <button onClick={click}>
         {children}
        </button>
    )
}