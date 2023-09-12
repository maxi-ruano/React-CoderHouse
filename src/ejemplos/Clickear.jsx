import { useEffect, useRef, useState } from "react";


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



const date = useRef(new Date())  // el useRef se usa para que al renderizar la vista no actualize el estado de dicha variable . Por ejemplo en este caso  la hora , no quiero que todo el tiempo actualize el horario en cada renderizacion , sino que todo el componente se renderize menos esa variable . 

console.log(date.current);

const pRef = useRef() // tambien se puede usar para tener una referencia en el caso que se quiera trabajar con algun elemento en especifico .
// en vez de usar el quereySelector se usa el useRef

const Scrollear = () =>{

    pRef.current.scrollIntoView(); // al tocar el boton de scrollear , scrollea al elemento p que tiene la referencia del useRef.
    pRef.current.innerText = "Nuevo Texto ";

}

 useEffect (()=>{ // funcion y array de dependencias 
    console.log("se ejecuto el useEffect")
 },[counter]) //el arr dependencias sirve para indicar cuando queremos que se ejecute el efecto , por ejemeplo en este caso cuando la variable counter cambia de estado se ejecuta el efecto
// otro ejemplo podria ser si hacemos una peticion a una API y queremos que solo se ejecute en el montaje  (cuando renderiza la pagina por primera vez ) y no en cada cambio de estado de los componentes.

return (

    <div>

        <button onClick={Click}>Click me  </button>
        <br></br>
        <p>Count :{counter}</p>   
        <hr></hr>
        <p>HORARIO : {date.current.toLocaleDateString()}</p>
        <hr></hr>

        {/* El current es un objeto y por ende no se puede pasar a la vista .. hay que convertirlo en string con el toLocalDateString() */}
        <button onClick={Scrollear}>Scrollear</button>

        <hr></hr>
        <button onClick={saludar}>Saludar  </button>
        <p>{saludo ? "hola mundo" : "chau mundo "}</p>
        <hr></hr>
        <p ref = {pRef}>Lorem ipsum,
           dolor sit amet consectetur
           adipisicing elit. Hic maxime mollitia tenetur,
           quas architecto corrupti quia in culpa cum? 
           Veritatis voluptate ab nisi eum sunt sequi provident et, harum at?</p>
    </div>
)

}