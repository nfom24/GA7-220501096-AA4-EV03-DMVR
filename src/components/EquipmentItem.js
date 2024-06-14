import React, { useState } from 'react';

const EquipmentItem = ({ equipment, updateEquipment, deleteEquipment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(equipment.name);
  const [marca, setMarca] = useState(equipment.marca);
  const [modelo, setModelo] = useState(equipment.modelo);
  const [tipo, setTipo] = useState(equipment.tipo);
  const [inventario, setInventario] = useState(equipment.inventario);
  const [usuario, setUsuario] = useState(equipment.usuario);
  const [description, setDescription] = useState(equipment.description);
  const [ubicacion, setUbicacion] = useState(equipment.ubicacion);

  const handleUpdate = () => {
    updateEquipment({ ...equipment, name, marca, modelo, tipo, inventario, usuario, description, ubicacion });
    setIsEditing(false);
  };

  return (
    <div className="equipment-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
          <input
            type="text"
            value={inventario}
            onChange={(e) => setInventario(e.target.value)}
          />
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
          />
          <button onClick={handleUpdate} className="edit-button">Actualizar</button>
        </div>
      ) : (
        <div>
          <h3>{equipment.name}</h3>
          <p>{equipment.marca}</p>
          <p>{equipment.modelo}</p>
          <p>{equipment.tipo}</p>
          <p>{equipment.inventario}</p>
          <p>{equipment.usuario}</p>
          <p>{equipment.description}</p>
          <p>{equipment.ubicacion}</p>
          <button onClick={() => setIsEditing(true)} className="edit-button">Editar</button>
          <button onClick={() => deleteEquipment(equipment.id)}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default EquipmentItem;

