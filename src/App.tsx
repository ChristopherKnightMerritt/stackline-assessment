import './App.css';
import { Provider } from 'react-redux';
import {store } from './redux';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Homepage />
      </Provider>
    </div>
  );
}

export default App;
