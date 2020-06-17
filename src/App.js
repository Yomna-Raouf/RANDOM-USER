import React, {useEffect} from 'react';
import './App.css';

function App() {

  useEffect( async () => {
    // this code runs once when the component loads 
    // Here I'm going to fetch a random user from the random user generator API
    const fetchData = async () => {
      let response = await fetch('https://randomuser.me/api/api');
      if(response.ok) {
        let json = await response.json();
      } else {
        alert('HTTP-Eroor' + response.status);
      }

    } 
  }, [])

  return (
    <div>
      <h1>Random user generator</h1>
    </div>
    
  );
}

export default App;
