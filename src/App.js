import React from 'react';
import './styles/App.scss';
import Home from './HomePage';
import Navbar from './Navbar';
import ProjectPage from './ProjectsPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home /> */}
      <ProjectPage />
    </div>
  );
}

export default App;
