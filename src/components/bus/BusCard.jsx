import { Button } from '../../common';
import { BusMoveOnwardIcon, TripCoinIcon } from '../../assets/icons';

export const BusCard = ({ busInfo }) => {
  return (
    <div className="bus-card">
      <div className="bus-card__ticket">
        <div className="bus-card__ticket__top">
          <h3 className="bus-card__title">{busInfo.type}</h3>
          <div className="bus-card__busInfo">
            <h3 className="bus-card__title">{busInfo.name}</h3>
            <p className="bus-card__small">{busInfo.numberPlate}</p>
          </div>
          <h3 className="bus-card__title bus-card__tripcoin">
            <TripCoinIcon /> {busInfo.tripCoin}
          </h3>
        </div>
        <div className="bus-card__ticket__body">
          <div className="bus-card__destination">
            <div className="bus-card__destination__form">
              <p className="bus-card__meta">From</p>
              <h2 className="bus-card__title">
                <span>{busInfo.from?.place}</span> {busInfo.from?.time}
              </h2>
              <p className="bus-card__content">{busInfo.from?.departedPlace}</p>
              <p className="bus-card__meta">{busInfo.from?.date}</p>
            </div>
          </div>
          <div className="bus-card__seat">
            <div className="bus-card__symbol">
              <span></span>
              <BusMoveOnwardIcon />
              <span></span>
            </div>
            <p className="bus-card__content">{busInfo.seats} Seats Available</p>
            <p className="bus-card__meta">{busInfo.estimatedTime}</p>
          </div>
          <div className="bus-card__destination ">
            <div className="bus-card__destination__to">
              <p className="bus-card__meta">To</p>
              <h2 className="bus-card__title">
                <span>{busInfo.to?.place}</span> {busInfo.to?.time}
              </h2>
              <p className="bus-card__content">{busInfo.to?.departedPlace}</p>
              <p className="bus-card__meta">{busInfo.to?.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bus-card__price">
        <span>Per Person</span>
        <h2>BDT {busInfo.price?.offer}</h2>
        <h3>BDT {busInfo.price?.regular}</h3>
        <Button text="View Seats" variant="primary" />
      </div>
    </div>
  );
};
