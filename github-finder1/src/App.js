import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
import './App.css';
const App = () =>{
  const [users, setUsers] =useState([]);
  const [user, setUser] =useState({});
  const [loading, setloading] =useState(false);
  const [alert, setalert] =useState(null);


  //  async componentDidMount(){
  //    this.setState({loadind:true});
  //    const res = await axios.get(`https://api.github.com/users?client_id=${
  //      process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //    this.setState({users: res.data,loading: false});
  //  }
   //search github users
   const searchUSers = async text => {
    setloading (true);
    
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setusers(res.data.items),
      setloading(false);

   }
   const getUser = async (username) => {
   setloading(true);
    
    const res = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setusers(res.data),
      setloading(false);
   };

   const clearUsers = () =>  {setusers([]),
   setloading(false);
   }
   setAlert = (msg,type) => {
    setalert({msg,type})
    setTimeout  (() => setalert(null),3000)

   };

    return (
      <Router>
    <div className="App">
     <Navbar/>
      <div className="container"> 
      <Alert alert={alert}/>
      <Switch>
        <Route exact path='/' render={props => (
          <Fragment>
            <Search searchUsers={searchUSers} 
      clearUsers={clearUsers}
      showClear={users.length > 0 ? true : false}
      setAlert={setAlert}
      />
      <Users loading={loading} users={users}/>
          </Fragment>
        )}
        />
        <Route exact path='/about' component={About}/>
        <Route exact path ='/user/:login' render={props =>(
          <User { ...props } 
          getUser={getUser}  
          user={user}
          loading={loading}
          />
        )}
        />
      </Switch>
      
      </div>
    </div>
    </Router>
    );
    }


export default App
