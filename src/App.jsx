
//  import { Tutores } from './components/Tutores';
// import { Clickear } from './components/Clickear.jsx';
import {  Header } from './components/Header/Header.jsx';
import { ItemListContainer } from './components/itemListContainer/ItemListConteinar.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PokeApi } from './ejemplos/PokeApi.jsx';
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
     <Header/>

     <ItemListContainer/>
      <PokeApi/>
     {/* <Contenedor>

      <Tutores />
      <Clickear /> 
      

     </Contenedor> */}
       
      </div>

    </>
  )
}

export default App
