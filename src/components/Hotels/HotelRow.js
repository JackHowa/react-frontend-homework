import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from '../App/ImageContainer';
import CommonString from '../../common/CommonString';

const HotelRow = ({ data }) => (
  <div className="hotel-list-element">
    <ImageContainer
      imageURL={data.hotelStaticContent.mainImage.url}
      fallbackImage={require('../../public/images/photo-error.png')}
      alt="Hotel available to stay at"
    />
    <div className="label-container">
      <h1>{data.hotelStaticContent.name}</h1>
      <p className="label">{data.hotelStaticContent.neighborhoodName}</p>
    </div>
    <div className="label-container">
      <p className="amount">
        {CommonString.convertAsciiToSymbol(data.lowestAveragePrice.symbol)}
        {data.lowestAveragePrice.amount}
      </p>
      <p className="label">Price</p>
    </div>
    <div className="label-container">
      <p className="amount">{data.rewards.miles}</p>
      <p className="label">Miles</p>
    </div>
    <button type="button">Select</button>
  </div>
);

HotelRow.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export default HotelRow;
