
import React, {useEffect, useState} from 'react'
import phones from "../src/data/phones.json"
import './App.css';




function App() {
  const [phonesData, setPhonesData] = useState([phones]);

  
  useEffect(()=> {
fetch("/api").then(
  response => response.json()
  ).then(
    data => {
      setPhonesData(data)
    }
  )
  
  }, [])


  return (
    <div className="App">
    
        {(typeof phonesData.phones === 'undefined') ? (
          
          <p>Loading...</p>
        ):(
          
          <div>
          {phones.map((elem, i) => {
            return (
              <table key={elem.id}  >
          <td width="20px;" height="40px;"><p>{elem.name}</p></td>
          <td width="20px;" height="40px;"><p>{elem.manufacturer}</p></td> 
          <td width="20px;" height="40px;"><p>{elem.description}</p></td> 
          <td width="20px;" height="40px;"><p>{elem.color}</p></td> 
          <td width="20px;" height="40px;"><p>{elem.price}</p></td>
          <td width="20px;" height="40px;"><p>{elem.imageFileName}</p></td>
          <td width="20px;" height="40px;"><p>{elem.processor}</p></td>
          <td width="20px;" height="40px;"><p>{elem.ram}</p></td>    

          </table> 
            
      
          
          
            )
          })}
    </div>)}
        </div>
  );
}

export default App;
