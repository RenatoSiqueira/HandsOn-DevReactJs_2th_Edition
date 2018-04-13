import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from './base'

class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false,
            isLogging: false,
            error: null
        }

        this.email = null
        this.passwd = null

        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin(){
        this.setState({ 
            isLogging: true,
            error: null 
        })
        auth
        .signInWithEmailAndPassword(this.email.value, this.passwd.value)
        .then( (user) => {
            this.setState({
                isLoggedIn: true
            })
        })
        .catch( error => {
            this.setState({
                error: error.message,
                isLogging: false
            })
        })
    }
    render(){
        if(this.state.isLoggedIn){
            return <Redirect to='/admin' />
        }
        return(
            <div>
                <input type='email' ref={ref => this.email = ref} />
                <input type='passwd' ref={ref => this.passwd = ref} />
                <button onClick={this.handleLogin} disabled={this.state.isLogging}>Entrar</button>
                <div>
                    { this.state.error && 
                        <p className='alert alert-danger'>{this.state.error}</p>
                    }
                </div>
            </div>
        )
    }
}

export default Login