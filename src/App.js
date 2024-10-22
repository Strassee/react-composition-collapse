import './App.css';

import Collapse from './components/Collapse';

function App() {
  return (
    <div className="App">
      <Collapse collapse>
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </Collapse>
      <br/>
      <Collapse>
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </Collapse>
    </div>
  );
}

export default App;
