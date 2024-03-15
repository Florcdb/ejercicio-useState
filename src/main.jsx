import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { useState } from 'react';
function App(){
  const [name, newName] = useState('Sofía')
  const setNameData = ()=> {
    newName('Data')
  }

  const setNameReyes = () => {
    newName('Reyes')
  }

  const setNameYolanda = () => {
    newName('Yolanda')
  }
  return (
    <div>
      <h2>Teacher Name: {name} </h2>
        <ul>
        <li onClick={setNameData}>Data</li>
        <li onClick={setNameReyes}>Reyes</li>
        <li onClick={setNameYolanda}>Yolanda</li>
        </ul> 

        <button></button>
    </div>
  )
}
/*

import { useState } from 'react';
function App(){
  const [name, newName] = useState('Sofía')
  const changeName = () => {
    newName('')
  }




  return (
    <div>
      <h2>Teacher Name: {name} </h2>
        <form onSubmit={handleSubmit}>
        <input 
         type="text"
         value={newName} 
         onChange={changeName}
         placeholder="Add a name"/>
        <button className='buttonform' type='submit' placeholder> Add</button>
        </form> 
    </div>
    )
}

*/
export default App 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
