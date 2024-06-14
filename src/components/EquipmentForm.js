import React, { useState } from 'react';

const EquipmentForm = ({ addEquipment }) => {
  const [name, setName] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [tipo, setTipo] = useState('');
  const [inventario, setInventario] = useState('');
  const [usuario, setUsuario] = useState('');
  const [description, setDescription] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addEquipment({ id: Date.now(), name, marca, modelo, tipo, inventario, usuario, description, ubicacion });
      setName('');
      setMarca('');
      setModelo('');
      setTipo('');
      setInventario('');
      setUsuario('');
      setDescription('');
      setUbicacion('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del equipo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Marca del equipo"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      />
      <input
        type="text"
        placeholder="Modelo del equipo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tipo del equipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Inventario del equipo"
        value={inventario}
        onChange={(e) => setInventario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Usuario del equipo"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción del equipo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ubicacion del equipo"
        value={ubicacion}
        onChange={(e) => setUbicacion(e.target.value)}
      />
      <button type="submit">Agregar Equipo</button>
    </form>
  );
};

export default EquipmentForm;
