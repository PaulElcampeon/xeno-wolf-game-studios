import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/HomePage';
import Navbar from './components/Navbar';
import ProjectPage from './components/ProjectsPage';
import Admin from './components/AdminPage';
import Dashboard from './components/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/admin" component={Admin} />
          <ProtectedRoute exact path="/admin/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/admin/dashboard/create" component={Dashboard} />
          <ProtectedRoute exact path="/admin/dashboard/security" component={Dashboard} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
