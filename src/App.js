import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Home from './components/HomePage';
import Navbar from './components/Navbar';
import ProjectPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Admin from './components/AdminPage';
import Dashboard from './components/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';
import { getProjects } from './store/actions';

function App() {

  const dispatch = useDispatch();
  dispatch(getProjects());

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => {
            return <Redirect to={"/home"} />
          }} />
          <Route exact path="/home" component={Home} />
          <Route path="/games" component={ProjectPage} />
          {/* <Route path="/contact" component={ContactPage} /> */}
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
