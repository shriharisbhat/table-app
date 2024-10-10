import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [photos, setPhotos]= useState([]);
  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(data => {
      console.log("data",data);
      setPhotos(data)
    })
  },[])

console.log("photos", photos)
  
  return (

    <div className="App">
      <header className="App-header">
        <div className="table-container">
        <div className="row">
            <div className="cell">Name</div>
            <div className="cell">Title</div>
            <div className="cell">Images</div>
        </div> 
      {photos.slice(0,10).map(photo => (
         <div className="row" key={photo.id}>
          <div className="cell">{photo.id}</div>
          <div className="cell">{photo.title}</div>
          <div className="cell"><img src={photo.thumbnailUrl} alt={photo.title}/></div>
        </div>
    ))} 
    </div>

      </header>
    </div>
  );
}

export default App;
