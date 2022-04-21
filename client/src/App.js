import './App.css';
import axios from 'axios';
import Home from './routes/Home'
import Register from './routes/Register';
import Folders from './routes/Folders'
import Gallery from './routes/Gallery'
import PhotoUpload from './routes/Photo/Upload'
import { Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App row justify-content-center">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/folders" element={<Folders />} />
        <Route path="photo" element={<Gallery />}>
        </Route>
        <Route path="/photo/upload" element={<PhotoUpload />} />


      </Routes>
    </div>
  );
}

export default App;
