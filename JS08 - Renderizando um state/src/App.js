import React, { Component } from 'react';

class App extends Component {

  state = {
    nome: "Sophia",
    idade: 22,
    comida: "Sanduíche com coleslaw",
    musicas: ["Vi de relance a coroa - Juçara Marçal", "Tempo velho - Douglas Germano", "Fogueira doce - Mateus Aleluia"]
  }

  render() {
    return (
      <>
        <h1>Oi, meu nome é {this.state.nome}</h1>
        <h2>tenho {this.state.idade} anos</h2>
        <h3>e gosto muito de {this.state.comida}</h3>
        <h4>Aqui algumas músicas que me fazem bem:</h4>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
      </>
    )
  }
}

export default App;