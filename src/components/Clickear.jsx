import { useState } from "react";


export  const Clickear = () =>{


const [counter , setCounter] = useState(0); // se define el estado del componente de esa manera , destructurando porque el useState es un objeto 

const [saludo , setSaludo] =useState(true);




const Click = () => {
    // alert("hola mundo");
    setCounter(counter + 1) // se actualiza el estado del componente .
}


const saludar = () =>{
    setSaludo(!saludo);
}

return (

    <div>

        <button onClick={Click}>Click me  </button>
        <p>Count :{counter}</p>   
        <hr></hr>
        <button onClick={saludar}>Saludar  </button>
        <p>{saludo ? "hola mundo" : "chau mundo "}</p>
    </div>
)

}