
import { Usuarios } from "./Usuarios";






// export const Tutores = (props) => {  // se le pasa propiedades al componente para recibirlo en el app.jsx y en el app . jsx se definen las propiedades 
    export const Tutores = () => { 
    // console.log(props);

    // const {nombre,rol} = props; // se puede destructurar asi o directamente en la funcion 

    return (

    <div>

<h1>Tutores</h1>

<ul>
      

<li>      <Usuarios nombre= "Lucas " rol = "Tutor1"/> </li> <br></br>
<li>      <Usuarios nombre= "Rodrigo " rol = "Tutor2"/> </li>


</ul>

    </div>
    )
}