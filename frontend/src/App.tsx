import { useEffect, useState } from 'react'
import './App.css'

interface Weatherforecast {
  date:string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

function App() {
  const [forecasts, setForecests] = useState<Weatherforecast[]>([])

  useEffect(() => {
    fetch("/api/weatherforecast")
      .then(res => res.json())
      .then(data => setForecests(data))
      .catch(err => console.error("Connection error:", err));
  }, [])

  return (
    <div>
      <h1>Paceify data:</h1>
      {forecasts.map((f, i) => (
        <div key={i}>
          <p>{f.summary} - {f.temperatureC}°C</p>
        </div>
      ))}
    </div>
  )
}

export default App
