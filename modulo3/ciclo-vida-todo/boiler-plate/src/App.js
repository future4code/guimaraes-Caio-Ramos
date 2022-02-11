import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      { id: Date.now(), texto: "Estudar Ciclo da Vida", completa: false },

      { id: Date.now(), texto: "Solicitar seguro-desemprego", completa: true },
    ],

    inputValue: "",

    filtro: "pendentes",
  };

  componentDidMount() {
    const persistTasks = localStorage.getItem("tarefas");
    if (persistTasks) {
      this.setState({ tarefas: JSON.parse(persistTasks) });
    }

    /* const tasksLS = JSON.parse(localStorage.getItem("Tarefas"));
    this.setState({ tarefas: tasksLS }); */
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
    }

    /*  const allTasks = JSON.stringify([...this.state.tarefas]);
    localStorage.setItem("Tarefas", allTasks); */
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const stateCopy = [...this.state.tarefas, novaTarefa];

    this.setState({ tarefas: stateCopy });
  };

  selectTarefa = (id) => {
    const newTaskList = this.state.tarefas.map((tasks) => {
      if (id === tasks.id) {
        const novaTask = {
          ...tasks,
          completa: !tasks.completa,
        };
        return novaTask;
      } else {
        return tasks;
      }
    });
    this.setState({ tarefas: newTaskList });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
