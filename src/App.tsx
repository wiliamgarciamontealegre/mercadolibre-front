
import './App.css';
import { Routes, Route } from "react-router-dom";
import SearchView from './Components/Search';

import { routers } from './Routers';

function App() {
  return (
    <div className="App">
      <SearchView />
      <Routes>
        {routers.map((item, key) =>{
          return         <Route path={item.path} element={<item.component/>} key={key}/>

        })}
  
      </Routes>
    </div>
  );
}

export default App;
