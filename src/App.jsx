
import './App.css'
import {hola as hello, chau} from './saludo.js'

function App() {

hello();
chau();

  return (
    <>
      <div>
      <h1>Hello Vite + React</h1>
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>

    </>
  )
}

export default App
