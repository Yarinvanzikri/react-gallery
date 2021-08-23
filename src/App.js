import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [albums, setAlbum] = useState([]);
    const [images, setImages] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data => setAlbum(data))

    },[albums]);
    const chooseAlbum = (e) => {
        fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${e.target.selectedIndex}`
        )
            .then((res) => res.json())
            .then((data) => setImages(data));
    };


  return (
      <div className="App">
          <h1>Select an album:</h1>
          <select name="albums" id="albums" onChange={chooseAlbum}>
              <option>Select an album:</option>

              {albums.map((album) => (
                  <option value={album.title} key={album.id}>
                      {album.title}
                  </option>
              ))}

          </select>
          <br />
          <br />
          {images.map((pic, i) => (
              <img src={pic.thumbnailUrl} key={i}  alt={pic.title} />
          ))}
      </div>
  );
}

export default App;


