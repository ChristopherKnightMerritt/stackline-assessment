import './App.css';
import { Provider } from 'react-redux';
import {store } from './redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>hi</div>
      </Provider>
    </div>
  );
}

export default App;
