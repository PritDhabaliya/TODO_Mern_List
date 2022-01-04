import Header from './components/Header'
import Addtodo from './components/Addtodo';

import Todos from './components/Todos';
import { Provider } from './context'
function App() {
  return (
    <Provider>
      <div className="container">
      <Header></Header>
      <Addtodo></Addtodo>
      <Todos className="fl"></Todos>
      </div>
      </Provider> 
  );
}

export default App;
