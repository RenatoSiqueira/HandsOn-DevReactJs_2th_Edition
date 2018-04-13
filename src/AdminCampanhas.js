import React, { Component } from 'react'
import base from './base'

class AdminCampanhas extends Component{
    constructor(props){
        super(props)

        this.state = {
            campanhas: {}
        }

        this.renderCampanha = this.renderCampanha.bind(this)
        this.removeCampanha = this.removeCampanha.bind(this)
    }

    componentDidMount(){
        base.syncState('campanhas', {
            context: this,
            state: 'campanhas',
            asArray: false
        })
    }    
    removeCampanha(key){
        console.log(key)
        /* base.remove('campanhas/'+key, err => {
            console.log(err)
        }) */
    }
    renderCampanha(key, campanha){
        return (
            <li key={key}>
                {campanha.nome}
                &nbsp;
                <button onClick={ () => 1 }>Editar</button>
                <button onClick={ () => this.removeCampanha(campanha.key) }>Remover</button>
            </li>
        )
    }
    render(){
        return(
            <div>
                <h1>Campanhas</h1>
                <ul>
                    { Object
                        .keys(this.state.campanhas)
                        .map(
                            key => this.renderCampanha( key, this.state.campanhas[key] )
                        ) 
                    }
                </ul>
            </div>
        )
    }
}

export default AdminCampanhas