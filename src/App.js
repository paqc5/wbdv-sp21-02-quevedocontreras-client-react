import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/header.component.client';
import NavigationBar from './components/navigation.component.client';
import MainContent from './components/main-content.component.client.js';
import Sidebar from './components/sidebar.component.client'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
          <Header/>
        <div className="paqc-container">
            <NavigationBar />
            <MainContent />
            <Sidebar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
