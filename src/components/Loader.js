import React from 'react';

const loaderStyle = {
  width: '100%',
  height: "100vh",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: '#fff',
  zIndex: "999",
  position: "absolute",
  top: "0"
}

const Loader = () => {
  
  return(
      <div style={loaderStyle}>
        <p>Cargando...</p>
      </div>
    )
}

export default Loader;
