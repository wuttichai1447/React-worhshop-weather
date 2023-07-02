import logo from './logo.svg';
import {useEffect,useState} from 'react'
import './App.css';

function App() {
  const name ="Bangkok"
  const apiKey="68b1171a88af60a6e71ac60b943cc15c"
  const [city,setCity] = useState({})
  const [isLoading,setlsLoading] =useState(false)
 

  useEffect(()=>{
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCity(data)
      setlsLoading(true)
    })
  },[name])
  
  const convertTemp=(k)=>{
    return (k-273).toFixed()
}
  return ( isLoading && <div className="App">   
   <section>
 
      <div className="location">
        <h1 className="city">{city? city.name : null}</h1>
        
        {/* <p className="state">{city? city.base : null}</p> */}
       </div>
     <div className="card">
         <div className="weather">
       <h1>{convertTemp(city.main.temp)}&deg;C</h1> 
        <smail>สูงสุด:{convertTemp(city.main.temp_max)}&deg;C,   ต่ำสุด{convertTemp(city.main.temp_min)}&deg;C</smail> 
      </div>
      </div>
      <div className="info">
          <div className="status">{city.weather[0].main}</div>
                  <div className="humidity">ความชื้น = {city.main.humidity}</div>
                  <div className="wind">ความเร็วลม = {city.wind.speed}</div>
       </div>
     
     </section>
   </div>
    
  );
}

export default App;
