import React ,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'


import Home from './home'
import Course from './courses'
import Mentor from './mentor'
import Contact from './contact_us'
import Registre from './Register'
import Login from './login'
import Dashbord from './Dashboard'
import PrivateRoute from "./PrivateRoute";
// import ShowDocDetail from './detailsDoc'


class Main extends Component{

    render(){
        return( 
            <div>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route  path='/course' component={Course} />
                    <Route  path='/mentor' component={Mentor} />
                    <Route  path='/contact_us' component={Contact} />
                    <Route  path='/register' component={Registre} />
                    <Route  path='/login' component={Login} />
                    <PrivateRoute path='/logout' component={Dashbord}/>
                    {/* <Route path='/listdocument/:id' component={ShowDocDetail} /> */}
                </Switch>

                

            </div>
        )
    }
}
export default Main;