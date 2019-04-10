import React from 'react';
import PropTypes from 'prop-types';

const HotelRow = ({ data }) => (
  <div>
    <img src={data.hotelStaticContent.mainImage.url} className="photo" />
    <div className="details">
      <div>{data.hotelStaticContent.name}</div>
      <div>{data.hotelStaticContent.neighborhoodName}</div>
    </div>
    <div className="price">
      {data.lowestAveragePrice.symbol}
      {data.lowestAveragePrice.amount}
      {data.rewards.miles}
      <button>Select</button>
    </div>
  </div>
);

HotelRow.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export default HotelRow;
