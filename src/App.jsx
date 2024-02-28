import {useState} from 'react'
import Card from './Card'

function App() {

  const [mascota, setMascota] = useState({
    animal: '',
    nombre: ''
  
  })
const [show, setShow] = useState(false)
const [err, setErr] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault()
    if(mascota.animal.length > 2 && mascota.nombre.length > 5){
        setShow(true)
        setErr(false)
    } else {
        setErr(true)
    }
}

  return (
    <div className="App">
      <h1>Ingresa tu mascota</h1>
    
      {!show && <form onSubmit={handleSubmit}> 
        <label> Ingresa tu Animal Favorito</label>
        <input type="text" onChange={(event) => setMascota({...mascota, animal: event.target.value})}/>
        <label >Ingresa tu Nombre </label>
        <input type="text" onChange={(event) => setMascota({...mascota, nombre: event.target.value})}/>
        <button>Elegir</button>
        </form>}
        {show && <Card mascota={mascota} setMascota={setMascota}/>}
        {err && <p>Por favor chequea que la información sea correcta</p>}
        <hr />
    </div>
    );
}

export default App;
