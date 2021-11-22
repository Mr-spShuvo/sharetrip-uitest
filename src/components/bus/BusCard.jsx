import React from 'react';
import { BusMoveOnwardIcon, TripCoinIcon } from '../../assets/icons';
import { Button } from '../../common';

export const BusCard = () => {
  return (
    <div className="bus-card">
      <div className="bus-card__ticket">
        <div className="bus-card__ticket__top">
          <h3 className="bus-card__title">AC</h3>
          <div className="bus-card__busInfo">
            <h3 className="bus-card__title">Hanif Enterprize</h3>
            <p className="bus-card__small">31-DHK-CTG(D)</p>
          </div>
          <h3 className="bus-card__title bus-card__tripcoin">
            <TripCoinIcon /> 55
          </h3>
        </div>
        <div className="bus-card__ticket__body">
          <div className="bus-card__destination">
            <div className="bus-card__destination__form">
              <p className="bus-card__meta">From</p>
              <h2 className="bus-card__title">
                <span>Dhaka</span> 11.30PM
              </h2>
              <p className="bus-card__content">Kolabagan Counter</p>
              <p className="bus-card__meta">22 June 2021</p>
            </div>
          </div>
          <div className="bus-card__seat">
            <div className="bus-card__symbol">
              <span></span>
              <BusMoveOnwardIcon />
              <span></span>
            </div>
            <p className="bus-card__content">{16} Seats Available</p>
            <p className="bus-card__meta">6h 00m</p>
          </div>
          <div className="bus-card__destination ">
            <div className="bus-card__destination__to">
              <p className="bus-card__meta">To</p>
              <h2 className="bus-card__title">
                <span>Chottogram</span> 11.30PM
              </h2>
              <p className="bus-card__content">Kolabagan Counter</p>
              <p className="bus-card__meta">22 June 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bus-card__price">
        <span>Per Person</span>
        <h2>BDT 750</h2>
        <h3>BDT 775</h3>
        <Button text="View Seats" variant="primary" />
      </div>
    </div>
  );
};
