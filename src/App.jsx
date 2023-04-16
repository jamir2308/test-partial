import React, { useState } from 'react';
import './App.css';

function App() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: "Jamir", apellido: "Patiño", telefono: "1234567890", direccion: "Av. Siempreviva 123" },
    { id: 2, nombre: "Emerson", apellido: "Arce", telefono: "0987654321", direccion: "Calle Falsa 123" },
    { id: 2, nombre: "Jean Carlos", apellido: "Blanco", telefono: "0987654321", direccion: "av final 123" }
  ]);
  const [nuevoContacto, setNuevoContacto] = useState({ nombre: "", apellido: "", telefono: "", direccion: "" });

  const crearContacto = (e) => {
    e.preventDefault();

    if(nuevoContacto.id){
      actualizarContacto(nuevoContacto.id)
    } else {
      const id = contactos.length + 1;
      const contacto = { id, ...nuevoContacto };
      setContactos([...contactos, contacto]);
      setNuevoContacto({ nombre: "", apellido: "", telefono: "", direccion: "" });
    }
    
  };

  const actualizarContacto = (id) => {
    const nuevosContactos = contactos.map((contacto) => {
      if (contacto.id === id) {
        return { id, ...nuevoContacto };
      } else {
        return contacto;
      }
    });
    setContactos(nuevosContactos);
    setNuevoContacto({ nombre: "", apellido: "", telefono: "", direccion: "" });
  };

  const eliminarContacto = (id) => {
    const nuevosContactos = contactos.filter((contacto) => contacto.id !== id);
    setContactos(nuevosContactos);
  };

  return (
    <div className="container">
      <h1>Agenda Telefónica</h1>
      <form onSubmit={(e)=>crearContacto(e)}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nuevoContacto.nombre}
            onChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, nombre: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            value={nuevoContacto.apellido}
            onChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, apellido: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            value={nuevoContacto.telefono}
            onChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, telefono: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            value={nuevoContacto.direccion}
            onChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, direccion: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Crear contacto
        </button>
      </form>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => (
            <tr key={contacto.id}>
              <td>{contacto.nombre}</td>
              <td>{contacto.apellido}</td>
              <td>{contacto.telefono}</td>
              <td>{contacto.direccion}</td>
              <td>
                <button className="btn btn-danger m-2" onClick={() => eliminarContacto(contacto.id)}>Eliminar</button>
                <button className="btn btn-secondary" onClick={()=>setNuevoContacto(contacto)}>Actualizar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;