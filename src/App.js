import React, {useEffect, useState} from 'react';
import Spinner from "react-spinkit";
import './App.css';

function App() {

  const [user, setUser] = useState({
    name: {first: "abc", last: "abc", title: "abc"},
    email: "abc",
    gender: "abc",
    phone: "abc",
    picture: { large: "" },
  });

  useEffect( () => {
    // this code runs once when the component loads 
    // Here I'm going to fetch a random user from the random user generator API
    const fetchData = async () => {
      let response = await fetch('https://randomuser.me/api/');
      if(response.ok) {
        let json = await response.json();
        setUser(json.results[0])
      } else {
        alert('HTTP-Eroor' + response.status);
      }
    };

    fetchData();
  }, []);

  console.log(user);

  const {
    name: {first: firstName, last: lastName, title},
    email,
    gender,
    phone,
    picture: { large:profilePicUrl },
  } = user;

  return (
    <div className="app">
      {!profilePicUrl ? (
        <Spinner name="pacman" fadeIn="none" />
      ) : (
        <div className="app_container">
          <div className="app_container_heading">
            <h1>Random user generator</h1>
          </div>
          <div className="app_container_Content"> 
          <img className= "app_container_image" src={profilePicUrl} alt="profile pic"/>
          <h2>
            {title}.  {firstName} {lastName}
          </h2>
          <h3> Email: {email} </h3>
          <h3> phone: {phone} </h3>
          <h4> Gender: {gender} </h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
