import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{user}, dispatch] = useStateValue();

  //useEffect <<<<<< POWERFUL
  //Piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {

        dispatch ({
          type: "SET_USER",
          user:authUser,
        })
      } else {
        dispatch ({
          type: "SET_USER",
          user:null,
        })
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

  console.log("user is >>>",user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
     </div>
    </Router>
    
  );
}

export default App;
