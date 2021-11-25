import React from 'react'
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import  {useState} from 'react'
import  {Redirect} from 'react'


function App() {

  const [login,setLogin] = useState(false);
  return (
    <BrowserRouter getUserConfirmation>
    <div className="App">
      
     <Header/>
     
     
     <button onClick={()=>setLogin(!login)}> 
     {login? "log out" : "login"}
     </button>
     <Switch>
     <Route path= '/' component={Home } exact />
     <Route path= '/about' component={About}/>
     <Route path= '/profile' >
       <Profile login = {login}/>
       </Route>
     <Route path='/Post/:id' component={Post}/>
     <Route component ={NotFound }  />
     </Switch>
     </div>
    </BrowserRouter>
  
    
  );
}

export default App;
