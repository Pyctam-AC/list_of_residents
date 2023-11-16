import React, { useState, useEffect } from 'react';
import Street from './Components/Street/Street';
import AddTenantForm from './Components/AddTenantForm/AddTenantForm';
import {getListStreet} from './utils/Api';
import "./App.css"


const App = () => {
  const [streets, setStreets] = useState([]);

  const checkStreet = () => {
    getListStreet()
    .then((res) => {
      setStreets(res);
    })
    .catch(() => {
      console.log(err);
    });
  }

  useEffect(() => {
    checkStreet();
  }, []);

  const handleAddTenant = (tenant) => {
    // Add tenant logic
  };

  const handleDeleteTenant = (id) => {
    // Delete tenant logic
  };

  return (
    <>
        <h1>Список жильцов</h1>
        <div className='main'>
          <div className='list'>
            {streets.map((street) => (
              <Street key={street.id} {...street} />
            ))}
          </div>
        <AddTenantForm onSubmit={handleAddTenant} />
      </div>
    </>
  );
};

export default App;
