import { useEffect, useState } from 'react';
import { ArrowMoveOnwardIcon, ArrowMoveReturnIcon, BusMoveOnwardIcon, BusMoveReturnIcon } from '../../assets/icons';
import { Button } from '../../common/Button';

export const BusHeader = () => {
  const [journey, setJourney] = useState([]);
  const [activeJourney, setActiveJourney] = useState('onward');

  useEffect(() => {
    setJourney({
      onwardJourney: {
        type: 'onward',
        destination: 'Dhaka - Chottogram',
        date: '22 June, 2021 (Tuesday)'
      },
      returnJourney: {
        type: 'return',
        destination: 'Chottogram - Dhaka',
        date: '24 June, 2021 (Thursday)'
      }
    });
  }, []);

  const handleDestinationChange = type => setActiveJourney(type);

  return (
    <div className="bus-header">
      <div className="container">
        <div onClick={() => handleDestinationChange('onward')} className={`bus-header__journey bus-header__journey--onward ${activeJourney === 'onward' ? 'active' : ''}`}>
          <BusMoveOnwardIcon />
          <div className="bus-header__journey__info">
            <p>Onward Journey</p>
            <h2>{journey.onwardJourney?.destination}</h2>
            <span>{journey.onwardJourney?.date}</span>
          </div>
        </div>
        <div className="bus-header__direction">
          <button onClick={() => handleDestinationChange('onward')} className={`${activeJourney === 'onward' ? 'active' : ''}`}>
            <ArrowMoveOnwardIcon />
          </button>
          <button onClick={() => handleDestinationChange('return')} className={`${activeJourney === 'return' ? 'active' : ''}`}>
            <ArrowMoveReturnIcon />
          </button>
        </div>
        <div onClick={() => handleDestinationChange('return')} className={`bus-header__journey bus-header__journey--return ${activeJourney === 'return' ? 'active' : ''}`}>
          <BusMoveReturnIcon />
          <div className="bus-header__journey__info">
            <p>Return Journey</p>
            <h2>{journey.returnJourney?.destination}</h2>
            <span>{journey.returnJourney?.date}</span>
          </div>
        </div>
        <Button text="Modify Search" variant="primary" size="lg" />
      </div>
    </div>
  );
};
