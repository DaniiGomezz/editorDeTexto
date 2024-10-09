// src/App.jsx

import {TextEditor} from './components/EditText';


function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Mi Editor de Texto</h1>
      <TextEditor />
    </div>
  );
}

export default App;
