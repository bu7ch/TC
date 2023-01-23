
import './App.css';
import { AppContainer } from './styles';
import { Column } from './components/Column';
import { Card } from './components/Card';

function App() {
  return (
  <AppContainer>
    <Column text='To> Do'>
      <Card text="Learn Typescript"/>
    </Column>
    <Column text='In progress'>
      <Card text="Learn JS"/>
    </Column>
    <Column text='Done'>
      <Card text="begin to use Static typing"/>
    </Column>
  </AppContainer>
  );
}

export default App;
