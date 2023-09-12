

export const Usuarios = ({nombre,rol}) =>{ //se le pasa propiedades al componente para recibirlo en el app.jsx y en el app . jsx se definen las propiedades 



 // console.log(props);

    // const {nombre,rol} = props; // se puede destructurar asi o directamente en la funcion 



return (

    <div>

  <ul>

<li> Nombre : {nombre} </li>
<li> Rol : {rol} </li>


  </ul>


    </div>
)

}