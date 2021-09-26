import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(undefined);
  useEffect( () => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-8-30&api_key=DEMO_KEY`)
    .then(response => {
    console.log(response);
    const marsData = response.data.photos;
    setData(marsData);
    })
  }, []);

  console.log('data', data)

  const mostRecentPhotoUrl = data ? data[data.length - 1].img_src : '';

  return (
    <div className="App">
        Mandy React Hello world
        <img src={mostRecentPhotoUrl} alt=""></img>
     </div>
  );
}

export default App;
