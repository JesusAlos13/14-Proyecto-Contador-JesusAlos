import React, { useState, useEffect } from "react";

const formatTime = (seconds) => {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${secs}`;
};

const Contador = ({ start = 0, alertTime = 10 }) => {
  const [seconds, setSeconds] = useState(start);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {

    if (!isRunning) return;


    const interval = setInterval(() => {
      setSeconds(prev => {

        if (alertTime && prev + 1 === alertTime) {
          alert(`Has alcanzado el tiempo estimado: ${alertTime} segundos`);
        }
        return prev + 1; //
      });
    }, 1000);


    return () => clearInterval(interval);
  }, [isRunning, alertTime]);

  return (
    <div className="d-flex justify-content-center bg-white text-dark">
      <div className="text-center">
        <p style={{ fontSize: '20rem', fontWeight: 'bold' }}>{formatTime(seconds)}</p>
        <button className="btn btn-primary btn-lg m-1" onClick={() => setIsRunning(true)}>RESUMIR</button>
        <button className="btn btn-danger btn-lg m-1" onClick={() => setIsRunning(false)}>PARAR</button>
        <button className="btn btn-success btn-lg m-1" onClick={() => { setSeconds(start); setIsRunning(false); }}>REINICIAR</button>
      </div>
    </div>
  );

};

export default Contador;