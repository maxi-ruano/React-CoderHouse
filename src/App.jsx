
import {hola as hello, chau} from './saludo.js'
import { Tutores } from './components/Tutores';

function App() {

hello();
chau();

  return (
    <>
      <div>
     
     
      <Tutores />
      </div>

    </>
  )
}

export default App
