
//  import { Tutores } from './components/Tutores';
// import { Clickear } from './components/Clickear.jsx';
import { CustomNavbar } from './components/Navbar.jsx';
import { ItemListContainer } from './components/ItemListConteinar.jsx';
// import { Contenedor } from './components/Contenedor.jsx';
//   import { MiBoton } from './components/MiBoton';

function App() {

const saludar = () =>{
  return (
    alert("hola mundo")
  )
}
  return (
    <>
      <div>
      {/* <MiBoton click = {saludar} ><p>Boton Saludar</p> </MiBoton>   */}
      {/* si le paso algo entre los tags de apertura y cierre  del componente  lo recibe como  "children"  */}
     {/* <Navbar/> */}
     <CustomNavbar/>

     <ItemListContainer/>

     {/* <Contenedor>

      <Tutores />
      <Clickear /> 
      

     </Contenedor> */}
       
      </div>

    </>
  )
}

export default App
