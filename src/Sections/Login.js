import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../base'
import styled from 'styled-components'

const Divlogin = styled.div`
width: 100%;
max-width: 330px;
padding: 15px;
margin: 2rem auto;
background-color: #f5f5f5;
`

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
            <Divlogin>
                <div className='login'>
                    <h1 className='h3 mb-3 font-weight-normal'>Login</h1>
                    <div className='conteiner'>
                        { this.state.error && 
                            <p className='alert alert-danger'>{this.state.error}</p>
                        }                    
                        <label htmlFor='inputEmail' className='sr-only'>Email:</label>
                        <input style={{'margin-bottom': '10px'}} type='email' ref={ref => this.email = ref} id='inputEmail' className='form-control' placeholder='Qual seu email?' required autoFocus />
                        <label htmlFor='inputPassword' className='sr-only'>Senha</label>
                        <input style={{'margin-bottom': '10px'}} type='passwd' ref={ref => this.passwd = ref} id='inputPassword' className='form-control' placeholder='Insira sua Senha' required />
                        <button className='btn btn-lg btn-primary btn-block' onClick={this.handleLogin} disabled={this.state.isLogging}>Entrar</button>
                    </div>
                </div>
            </Divlogin>
        )
    }
}

export default Login