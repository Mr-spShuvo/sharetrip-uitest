import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { ListCard } from '../../common';
import { CoinIcon, DiamondIcon, ZapIcon } from '../../assets/icons';
import { BusCard } from './BusCard';

const selectionOption = [
  { id: 1, icon: <DiamondIcon />, title: 'Earliest Buses' },
  { id: 2, icon: <CoinIcon />, title: 'Cheapest Buses' },
  { id: 3, icon: <ZapIcon />, title: 'Available Seats' },
  { id: 4, icon: <ZapIcon />, title: 'Fastest Tips' }
];

export const BusResult = () => {
  const [busList, setBusList] = useState([]);
  const [busTickets, setBusTickets] = useState([]);
  const [selectedOption, setSelectedOption] = useState(selectionOption[1]);

  const handleSelectOption = option => setSelectedOption(option);

  useEffect(() => {
    const busList = require('../../data/bus-list.json');
    const busTickets = require('../../data/buses.json');
    setBusList(busList);
    setBusTickets(busTickets);
  }, []);

  return (
    <div className="bus-result">
      <h2 className="bus-result__title">{48} Available buses</h2>
      <div className="bus-list">
        <div className="bus-list__wrapper">
          <Splide options={{ fixedWidth: '18rem', rewind: true, padding: '5rem' }}>
            {busList.map(item => (
              <SplideSlide>
                <ListCard key={item.id} title={item.busCompany} subtitle={item.busCount + ' Buses'} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <div className="bus-options">
        {selectionOption.map(option => (
          <ListCard key={option.id} icon={option.icon} title={option.title} active={selectedOption.id === option.id} onClick={() => handleSelectOption(option)} />
        ))}
      </div>
      <div className="bus-tickets">
        {busTickets.map(ticket => (
          <BusCard key={ticket.id} busInfo={ticket} />
        ))}
      </div>
    </div>
  );
};
