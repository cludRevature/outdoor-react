import React from 'react';
import NavBar from './components/navbar/NavBar';
import AppRoutes from './router/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css'

const App: React.FC<unknown> = () => {

  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}

export default App;