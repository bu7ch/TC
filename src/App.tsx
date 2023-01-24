
import './App.css';
import { AppContainer } from './styles';
import { Column } from './components/Column';
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './AppStateContext';

function App() {
  const {state} = useAppState()
  return (
  <AppContainer>
    {state.lists.map((list,i) =>(
      <Column text={list.text} key={list.id} index={i} />
    ))}
    <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log}/>
  </AppContainer>
  );
}

export default App;
