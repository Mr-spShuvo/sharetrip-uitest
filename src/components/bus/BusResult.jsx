import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import { ListCard } from '../../common';
import { CoinIcon, DiamondIcon, ZapIcon } from '../../assets/icons';

const selectionOption = [
  { id: 1, icon: <DiamondIcon />, title: 'Earliest Buses' },
  { id: 2, icon: <CoinIcon />, title: 'Cheapest Buses' },
  { id: 3, icon: <ZapIcon />, title: 'Available Seats' },
  { id: 4, icon: <ZapIcon />, title: 'Fastest Tips' }
];

export const BusResult = () => {
  const [busList, setBusList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(selectionOption[1]);

  const handleSelectOption = option => setSelectedOption(option);

  useEffect(() => {
    const busList = require('../../data/bus-list.json');
    setBusList(busList);
  }, []);

  return (
    <div className="bus-result">
      <h2 className="bus-result__title">{48} Available buses</h2>
      <div className="bus-list">
        <button className="bus-list__pagination bus-list__pagination--prev">
          <Icon path={mdiChevronLeft} size={2} />
        </button>
        <div className="bus-list__wrapper">
          {busList.map(item => (
            <ListCard key={item.id} title={item.busCompany} subtitle={item.busCount + ' Buses'} />
          ))}
        </div>
        <button className="bus-list__pagination bus-list__pagination--next">
          <Icon path={mdiChevronRight} size={2} />
        </button>
      </div>
      <div className="bus-options">
        {selectionOption.map(option => (
          <ListCard key={option.id} icon={option.icon} title={option.title} active={selectedOption.id === option.id} onClick={() => handleSelectOption(option)} />
        ))}
      </div>
    </div>
  );
};
