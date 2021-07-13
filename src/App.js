import Login from "./login/Login";
import { useEffect, useState } from "react";
import Home from "./home/Home";
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute";
import { useDispatch, useSelector } from "react-redux"

// Client ID a7f31de2b2004729b36dbda8471013d0
// Client Secret 3a244dbc4fb24c959657470516658395

function App() {

  const temp = window.location.hash;
  const [token, setToken] = useState("");

  useEffect(()=> {
    if (temp !== "")
      {
        const stringa = temp.split("=")[1].split("&")[0]
        sessionStorage.setItem("token", stringa)
        setToken(stringa)
      }
  }, [temp])

  const situation = useSelector((state) => state)
  
  useEffect(()=> {
    console.log(situation);
  }, [situation])


  return (
    <Switch>
      <Route exact path="/" render={(props)=> <Login {...props} />} />
      { token && <PrivateRoute path="/home" component={Home} hash={token} /> }
    </Switch>
  );
}

export default App;
