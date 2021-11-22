import React from 'react';
import { BusResult } from './BusResult';

export const BusLayout = () => {
  return (
    <section className="bus-layout">
      <div className="container">
        <div className="bus-layout__filter">{/* TODO: Implement in Future */}</div>
        <div className="bus-layout__body">
          <BusResult />
        </div>
      </div>
      ;
    </section>
  );
};
