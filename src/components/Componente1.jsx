import React, {Component} from 'react'

export default class Componente1 extends Component {

    constructor() {
        super()
        this.state = {
            valor: 0,
            valor2: 0
        }
    }

    aumentarValor () {
        this.setState ({
            valor: this.state.valor + 1,
            valor2: this.state.valor2 +2
        })
    }

  render() {
    return (
        <div>
           <h2>Valor Contador Uno: {this.state.valor}</h2>
           <h2>Valor Contador Dos: {this.state.valor2}</h2>
            <button
                onClick={()=>this.aumentarValor()}
            >Aumentar Contadores</button>
        </div> 
    )
  } 
}