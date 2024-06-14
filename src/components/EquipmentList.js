import React from 'react';
import EquipmentItem from './EquipmentItem';

const EquipmentList = ({ equipments, updateEquipment, deleteEquipment }) => {
  return (
    <div>
      {equipments.map(equipment => (
        <EquipmentItem
          key={equipment.id}
          equipment={equipment}
          updateEquipment={updateEquipment}
          deleteEquipment={deleteEquipment}
        />
      ))}
    </div>
  );
};

export default EquipmentList;
