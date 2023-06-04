import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { ListaItens } from './models';

function App() {

  async function addTodo(){
    await DataStore.save(
      new ListaItens({
      "name": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet",
      "price": 123.45
    })
  );
  }


  async function deleteData(){
    const modelToDelete = await DataStore.query(ListaItens, "5a9d54ac-9205-424b-ac12-2b7d89a4f8d4");
    DataStore.delete(modelToDelete);
  }
  

  async function showTodos(){
    const models = await DataStore.query(ListaItens);
    console.log(models);
  }
  async function update(){
    const original = await DataStore.query(ListaItens, "5a9d54ac-9205-424b-ac12-2b7d89a4f8d4")
    
    await DataStore.save(ListaItens.copyOf(original, item => {
  // Update the values on {item} variable to update DataStore entry
      item.name = `Name ${Date.now()}`;
}));
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addTodo}>Add</button>
        <button onClick={showTodos}>Show Todos</button>
        <button onClick={update}>Update</button>
        <button onClick={deleteData}>Delete</button>
      </header>
    </div>
  );
}

export default App;
