import React from "react";
import './Cars.css'

const Cars = () => {
  return (
    <div className="cars-container">
      <div className="cars-card">
        <h1 className="cars">🚗 Машины</h1>
        <p>Выбери марку и посмотри лучшие авто</p>

        <a
          href="https://www.autocarbridge.com/ru/brands.html"
          target="_blank"
          rel="noreferrer"
          className="cars-btn"
        >
          Смотреть машины
        </a>
      </div>
    </div>
  );
};

export default Cars;