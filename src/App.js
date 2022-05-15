import logo from './logo.svg';
import './App.css';
import { Button, Badge } from './lib'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Button color="secondary" shadow="true">ok now</Button>
          <Button color="primary">primary</Button>
          <Button color="success">ok now</Button>
          <Button color="warning">ok now</Button>
          <Button color="info">ok now</Button>
          <Button color="error" >ok nowm</Button>
          <br/>
          <Button color="error" outline="true">ok now </Button>
          <Button color="warning" outline="true">ok now</Button>
          <Button color="info" outline="true">ok now</Button>
          <Button color="success" outline="true">ok now</Button>
          <Button color="primary" outline="true">ok now</Button>
          <Button color="secondary" outline="true">ok now</Button>

          <br/>
          <Button color="secondary" outline="true" shadow>ok now</Button>
          <Button color="secondary" >ok now</Button>

        </a>

        <Badge color="error">ERROR</Badge>
        <Badge color="primary">warning</Badge>
        <Badge color="success">warning</Badge>
        <Badge color="warning">warning</Badge>
        <Badge color="info">warning</Badge>
        <Badge color="secondary">warning</Badge>
        <Badge color="secondary" shadow>warning</Badge>

        <br/>
        <Badge color="secondary" outline="true">ERROR</Badge>
        <Badge color="primary" outline="true">ERROR</Badge>
        <Badge color="success" outline="true">ERROR</Badge>
        <Badge color="warning" outline="true">ERROR</Badge>
        <Badge color="info" outline="true">ERROR</Badge>
        <Badge color="error" outline="true">ERROR</Badge>



      </header>
    </div>
  );
}

export default App;
