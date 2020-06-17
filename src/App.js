import React, {useEffect, useState} from 'react';
import Spinner from "react-spinkit";
import './App.css';
import spinner from 'react-spinkit';

function App() {

  const [user, setUser] = useState({
    name: {first: "abc", last: "abc", title: "abc"},
    email: "abc",
    gender: "abc",
    phone: "abc",
    picture: { meduim: "" },
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
    picture: { meduim:profilePicUrl },
  } = user;

  return (
    <div className="app">
      {!profilePicUrl ? (
        <Spinner name="pacman" fadeIn="none" />
      ) : (
        <div className="app_container">
           <h1>Random user generator</h1>
          <img src={profilePicUrl} alt="profile picture"/>
          <h2>
            {firstName} {lastName}
          </h2>
          <h3> Email: {email}</h3>
          <h3> phone: {phone}</h3>
          <h4> Gender: {gender}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
