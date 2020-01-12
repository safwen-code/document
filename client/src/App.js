import React ,{Component} from 'react';
import {Link,Router} from 'react-router-dom'
import { Layout, Header, Navigation ,Drawer ,Content,Textfield } from 'react-mdl';
import Main from './components/main'
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./action/authActions";

import PrivateRoute from "./components/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}



class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <div >
     {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content">
            <Layout>
                <Header className="bg-dark" title="visitor" scroll >
                    <Navigation className='container'>
                        <Link to="/">Home</Link>
                        <Link to="/course">Courses</Link>
                        <Link to="/mentor">Mentor</Link>
                        <Link to="/contact_us">Contact_Us</Link>
                        <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search3"
                    expandable
                    expandableIcon="search"
                />
                        <Link to='/login'className="btn-animation mb-2">Login</Link>
                        <Link to="/register" className="btn-animation mb-2">Registre</Link>
                        <Link to="/logout"className="btn-animation mb-2">logout</Link>
                    </Navigation>
                </Header>
                <Drawer title="visitor">
            <Navigation>
                <Link to='/'>Link</Link>
                <Link to='/'>Link</Link>
                <Link to='/'>Link</Link>
                <Link to='/'>Link</Link>
            </Navigation>
        </Drawer>
        <Main />
        <footer className='footer'> copy right</footer>
        <Content>
            <div className="page-content" />
        </Content>
        
            </Layout>

            
        </div>
    </div>
   </Provider>
    );
  }
}
export default App;
