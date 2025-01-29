import React from 'react';
import './App.css';
import ListComponent from './Components/ListComponent';

function App() {
  const enquiries = [
    { name: 'Enquiry 1', details: 'Details of enquiry 1' },
    { name: 'Enquiry 2', details: 'Details of enquiry 2' },
    { name: 'Enquiry 3', details: 'Details of enquiry 3' },
    { name: 'Enquiry 4', details: 'Details of enquiry 4' },
    { name: 'Enquiry 5', details: 'Details of enquiry 5' },
    { name: 'Enquiry 6', details: 'Details of enquiry 6' },
    { name: 'Enquiry 7', details: 'Details of enquiry 7' },
    { name: 'Enquiry 8', details: 'Details of enquiry 8' },
  ];

  return (
    <div className="App">
      <ListComponent enquiries={enquiries} />
    </div>
  );
}

export default App;
