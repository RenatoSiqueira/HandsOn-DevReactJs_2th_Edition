import React, { Component } from 'react'
import base from '../base'
import styled from 'styled-components'

import Loading from '../Common/Loading'

const Divbottom = styled.div`
    margin-bottom: 0.5rem;
`
const Letteruppercase = styled.button`
    text-transform: uppercase;
`

class AdminCampanhas extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoading: false,
            campanhas: {},
            error: false,
            tipo: ''
        }

        this.renderCampanha = this.renderCampanha.bind(this)
        this.removeCampanha = this.removeCampanha.bind(this)
    }

    componentDidMount(){
        this.setState({ isLoading: true, error: false })
        base.syncState('campanhas', {
            context: this,
            state: 'campanhas',
            asArray: false,
            then(){
                this.setState({ isLoading: false })
            }
        })
    }    
    removeCampanha(key){
        this.setState({ isLoading: true, error: false })
        base.remove('campanhas/'+key, err => {
            this.setState({ isLoading: false, error: true })
        })
    }
    renderCampanha(key, campanha){
        return (
            <Divbottom key={key} className='card'>
                <div className='card-header'>
                    <div className='row'>
                        <div className='col-md-4'>
                            Campanha: <strong className='text-uppercase'>{campanha.nome}</strong><br />
                            <small>Sub Título: <strong>{campanha.subTitulo}</strong></small>
                        </div>
                        <div className='col-md-4 offset-md-4'>
                            <div className='btn-group' role='group'>
                                <Letteruppercase type='button' className={ campanha.tipo === 'doacao'? 'btn btn-success' : 'btn btn-primary' }>{campanha.tipo}</Letteruppercase>
                                { campanha.tipo === 'doacao' && 
                                    <button type='button' className='btn btn-dark'>Meta R$ {campanha.meta}</button>
                                }
                                { campanha.tipo === 'doacao' && 
                                    <button type='button' className='btn btn-info'>Doado R$ {campanha.doado}</button>
                                }
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className='card-body'>
                    <p className='card-text'>{campanha.descricao}</p>
                    <button onClick={ () => this.removeCampanha(key) } className='btn btn-danger'>Remover</button>
                </div>
            </Divbottom>
        )
    }
    render(){
        return(
            <div className='card'>
                { this.state.isLoading && <Loading /> }

                { 
                !this.state.isLoading && 
                <section className='page-section'>
                    <div className='container'>
                        <h2>Campanhas Cadastradas</h2>
                        { Object
                            .keys(this.state.campanhas)
                            .map(
                                key => this.renderCampanha( key, this.state.campanhas[key] )
                            )
                        }
                    </div>
                </section>
                }
            </div>
        )
    }
}

export default AdminCampanhas