import React from 'react';
import HotelRow from './HotelRow';

const HotelsContainer = ({ hotels }) => (
  <div className="hotel-list">
    {hotels.map(hotelData => (
      <HotelRow key={hotelData.id} data={hotelData} />
    ))}
  </div>
);

export default HotelsContainer;
