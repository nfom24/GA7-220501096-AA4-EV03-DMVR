import React, { useState } from 'react';
import EquipmentForm from './components/EquipmentForm';
import EquipmentList from './components/EquipmentList';
import './App.css';

const App = () => {
  const [equipments, setEquipments] = useState([]);

  const addEquipment = (equipment) => {
    setEquipments([...equipments, equipment]);
  };

  const updateEquipment = (updatedEquipment) => {
    setEquipments(equipments.map(equip => equip.id === updatedEquipment.id ? updatedEquipment : equip));
  };

  const deleteEquipment = (id) => {
    setEquipments(equipments.filter(equip => equip.id !== id));
  };

  return (
     
    <div className="App">
      <h1>Bienvenido a SOLILO INVENTORY</h1>
      <p><strong>En este formulario podras agregar un nuevo equipo a tu inventario</strong></p>
      <EquipmentForm addEquipment={addEquipment} />
      <EquipmentList
        equipments={equipments}
        updateEquipment={updateEquipment}
        deleteEquipment={deleteEquipment}
      />
    </div>
  );
};

export default App;

