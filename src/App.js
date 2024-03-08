
import './App.css';
import { Provider } from 'react-redux';
import Body from "./components/Body"
import appStore from './utils/appStore';

function App() {
  return (
   <div>
    <Provider store={appStore}>
   <Body></Body>
   </Provider>
   </div>
  );
}

export default App;
