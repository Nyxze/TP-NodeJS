import './App.css';
import Home from './routes/Home'
import Register from './routes/Register';
import FoldersList from './routes/Folders'
import PhotoUpload from './routes/Photo/Upload'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />}/>


        <Route path="/folders" element={<FoldersList />} />
        <Route path="/photo/upload" element={<PhotoUpload />} />


      </Routes>
    </div>
  );
}

export default App;
