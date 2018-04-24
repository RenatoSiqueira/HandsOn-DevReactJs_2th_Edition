import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { auth } from '../base'

import AdminHeader from './AdminHeader'
import AdminHome from './AdminHome'
import AdminCampanhas from './AdminCampanhas'
import AdminNewCampanha from './AdminNewCampanha'

import Loading from '../Common/Loading'

class Admin extends Component{
    constructor(props){
        super(props)

        this.state = {
            isAuthing: true,
            isLoggedIn: false,
            user: null
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            this.setState({
                isAuthing: false,
                isLoggedIn: !!user,
                user
            })
          })
    }
    
    render(){
        if(this.state.isAuthing){
            return <Loading />
        }
        if(!this.state.isLoggedIn){
            return <Redirect to='/login' />
        } else 
        return(
            <div>
                <AdminHeader />
                <Route exact path={`${this.props.match.url}/`} component={AdminHome} />
                <Route path={`${this.props.match.url}/campanhas`} component={AdminCampanhas} />
                <Route path={`${this.props.match.url}/novacampanha`} component={AdminNewCampanha} />
            </div>
        )
    }
}

export default Admin