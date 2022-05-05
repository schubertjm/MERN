import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard lastName={"Schubert"} firstName={"Jason"} age={40} hairColor={"Brown"}></PersonCard>
        <PersonCard lastName={"Schubert"} firstName={"Olivia"} age={10} hairColor={"Blonde"}></PersonCard>
        <PersonCard lastName={"Schubert"} firstName={"Michael"} age={8} hairColor={"Blonde"}></PersonCard>
        <PersonCard lastName={"Schubert"} firstName={"Jacob"} age={5} hairColor={"Blonde"}></PersonCard>
    </div>
  );
}

export default App;
