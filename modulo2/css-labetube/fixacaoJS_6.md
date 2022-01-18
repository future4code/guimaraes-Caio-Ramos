```

const apenasAtividadesFeitas = tarefas.filter((tarefa, indice, array) => {
  return tarefa.status === "done"
})
const mapearAtividades = apenasAtividadesFeitas.map((tarefa, indice, array) => {
        return tarefa.titulo
})
return mapearAtividades

```
