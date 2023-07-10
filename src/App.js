
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Search from './components/Search';

import DetailedPage from './components/DetailedPage';
import BookingForm from './components/BookingForm';

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      
    <Route exact path="/" element={<Search />} />
        <Route path="/hotels/:id" element={<DetailedPage />} />
        <Route path="/BookingForm" element={<BookingForm />} />
      
    </Routes>
    </BrowserRouter>
  
  );
};

export default App;

