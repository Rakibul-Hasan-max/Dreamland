import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Properties from './Pages/Properties/Properties/Properties';
import Purchase from './Pages/Properties/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProperties from './Pages/Admin/AddProperties/AddProperties';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/properties">
              <Properties></Properties>
            </Route>
            <PrivateRoute path="/purchase">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/addProperties">
              <AddProperties></AddProperties>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
