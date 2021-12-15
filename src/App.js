import React, {useEffect} from 'react';
import { useState } from 'react';
import './App.css';
import { auth } from './firebase';
import Home from './Home';
import Login from './Login';


function App() {
  const [user,setUser] = useState(null)
  useEffect(() => {
    console.log(user)
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        setUser(authUser)
      }
      else{
        setUser(null)
      }
    })
  }, [])
  return (
    <div>
      {
        user? <Home user={user}/> : <Login/>
      }
      
    </div>
  );
}

export default App;
