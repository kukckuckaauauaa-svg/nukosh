import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Cars from './boby/Cars'
import Layout from './boby/Layout';



function App() {
  return (
    <div style={{
      textAlign: 'center'
    }}>
      <Layout/>
   <Routes>
      <Route path='cars' element={<Cars/>}/>
   </Routes>
    </div> 
  );
}

export default App;
