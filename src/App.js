import React, { useState } from "react";
import data from './data.js';
import Cars from './Component/Cars';

const App = () => {
  const [cars, setCars] = useState(data);
  
  function removeCar(id) {
    const newCars = cars.filter(car => car.id !== id);
    setCars(newCars);
  }

  if (cars.length === 0) {
    return (
      <div className="refresh">
        <h2>No Cars Left</h2>
        <button className="btnWhite" onClick={() => setCars(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Cars cars={cars} removeCar={removeCar}></Cars> 
    </div>
  )

};

export default App;
