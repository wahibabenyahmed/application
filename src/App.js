
import './App.css';
import AddTask from './component/Addtask';

import ListTask from './component/ListTask';
import Search from './component/search';

function App() {
  return (
    <div className="App">
      <ListTask/>
      <AddTask/>
      <Search/>
      
    </div>
  );
}

export default App;
