import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateForm from './views/CreateForm';
import FormList from './views/FormList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CreateForm />} />
          <Route path="/create-form" element={<CreateForm />} />
          <Route path="/form-list" element={<FormList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
