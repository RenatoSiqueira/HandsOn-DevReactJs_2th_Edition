import React, { Component } from 'react'
import base from '../base'
import styled from 'styled-components'

import Loading from '../Common/Loading'

const Divbottom = styled.div`
    margin-bottom: 0.5rem;
`
const Divtop = styled.div`
    margin-top: 0.5rem;
`
const Letteruppercase = styled.button`
    text-transform: uppercase;
`

class AdminCampanhas extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoading: false,
            error: false,
            tipo: ''
        }

        this.handleSave = this.handleSave.bind(this)
    }

    handleSave(){
        const nome = this.nome.value
        const descricao = this.descricao.value
        const subTitulo = this.subTitulo.value
        const tipo = this.state.tipo
        const comoDoar = (this.state.tipo === 'produtos')? this.comoDoar.value : null
        const meta = (this.state.tipo === 'doacao')? this.meta.value : null
        const doado = (this.state.tipo === 'doacao')? this.doado.value : null

        if(this.state.tipo !== ''){
            base.push('campanhas', {
                data: { nome, descricao, subTitulo, tipo, comoDoar, meta, doado },
                then: 
                    err => {
                        if(!err){
                            this.nome.value = ''
                            this.descricao.value = ''
                            this.subTitulo.value = ''

                            this.setState({ tipo: '' })

                            if(this.meta){
                                this.meta.value = ''
                            }
                            if(this.doado){
                                this.doado.value = ''
                            }
                            if(this.comoDoar){
                                this.comoDoar.value = ''
                            }                        
                        }
                    }
                }
            )
        }
    }
    render(){
        return(
            <div className='card'>
                <Divtop className='container'>
                    <h2>Nova Campanha</h2>

                    <div className='form-group'>
                        <label htmlFor='inputCampanha'>Nome da Campanha:</label>
                        <input type='text' className='form-control' id='inputCampanha' placeholder='Qual o Nome da Campanha?' ref={ ref => this.nome = ref } required />
                        <small className='form-text text-muted'>Este é apenas o Título da Campanha.</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='inputCampanha'>Sub Título:</label>
                        <input type='text' className='form-control' id='inputSubTitulo' placeholder='Qual o Sub Título?' ref={ ref => this.subTitulo = ref } required />
                        <small className='form-text text-muted'>Frase de Chamada.</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='inputDescricao'>Descrição:</label>
                        <textarea className='form-control' id='inputCampanha' placeholder='Faça a descrição completa da campanha' rows='3' ref={ ref => this.descricao = ref } required />
                        <small className='form-text text-muted'>Descrição da Campanha; Inclua o máximo de detalhes.</small>
                    </div>                
                    <Divbottom className='form-check form-check-inline'>
                        <input className='form-check-input' type='radio' name='tipo' id='doacao' onClick={ ()=> this.setState({ tipo: 'doacao'}) } />
                        <label className='form-check-label' htmlFor='doacao'>
                            Doação
                        </label>
                    </Divbottom>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' type='radio' name='tipo' id='produtos' onClick={ ()=> this.setState({ tipo: 'produtos'}) } />
                        <label className='form-check-label' htmlFor='produtos'>
                            Produtos
                        </label>
                    </div>
                    { this.state.tipo === 'doacao' &&
                        <div className='card'>
                        <div className='card-header'>
                            Doação
                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <strong>Meta:</strong> <input className='form-control' type='text' ref={ ref => this.meta = ref }/>
                            </li>
                            <li className='list-group-item'>
                                <strong>Doado:</strong> <input className='form-control' type='text' ref={ ref => this.doado = ref } defaultValue={0}/>
                            </li>                    
                        </ul>
                        </div>
                    }

                    { this.state.tipo === 'produtos' &&
                        <div className='card'>
                        <div className='card-header'>
                            Produtos
                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <strong>Como doar:</strong> <input className='form-control' type='text' ref={ ref => this.comoDoar = ref }/>    
                            </li>
                        </ul>
                        </div>
                    }

                    <Divtop className='form-group'>
                        <button onClick={this.handleSave} className='btn btn-primary'>Salvar Nova Campanha</button>
                    </Divtop>
                </Divtop>
            </div>
        )
    }
}

export default AdminCampanhas