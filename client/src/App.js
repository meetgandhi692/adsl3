import "./App.css";
// import Dropdown from "./components/Dropdown";
import Navbarr from "./components/Navbarr";
import {Route, Routes} from 'react-router-dom';
import Read from "./pages/Read";
import Insert from "./pages/Insert";
import Update from "./pages/Update";
import Delete from "./pages/Delete";


function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Routes>
        <Route exact path="/read" element={<Read/>}/>
        <Route exact path="/insert" element={<Insert/>}/>
        <Route exact path="/update" element={<Update/>}/>
        <Route exact path="/delete" element={<Delete/>}/>
      </Routes>
    </div>
  );
}

export default App;
