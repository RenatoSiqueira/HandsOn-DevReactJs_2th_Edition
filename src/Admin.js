import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { auth } from './base'

import AdminHome from './AdminHome'
import Loading from './Loading'
import AdminCampanhas from './AdminCampanhas'

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
                <Route path='/' component={AdminHome} />
                <Route path={`${this.props.match.url}/campanhas`} component={AdminCampanhas} />
            </div>
        )
    }
}

export default Admin