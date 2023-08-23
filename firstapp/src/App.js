import './App.css';
import React, { useState } from 'react'; 
import TextForm from './component/TextForm';
import SMCard from './component/SMCard';
import Select from './component/Select'; 

function App() {
  const [selectValue, setSelectValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const selectOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    
  ];

  return (
    <>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div>
      <div className="container my-2">
        <h1>Card</h1>
        <SMCard id="4" name="ABC" age="34" Active="True" />
      </div>
      {/* Add the Select component */}
      <div className="container my-2">
        <h1>Select Component</h1>
        <Select
          label="Select an option"
          options={selectOptions}
          value={selectValue}
          onChange={handleSelectChange}
        />
      </div>
    </>
  );
}

export default App;


