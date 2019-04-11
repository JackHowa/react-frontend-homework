import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

class HotelsContainer extends Component {
  filterHotelRows = () => {
    const { hotels, hotelNameFilter } = this.props;

    const lowerHotelNameFilter = hotelNameFilter.toLowerCase();
    return hotels.filter(hotelObject =>
      hotelObject.hotelStaticContent.name
        .toLowerCase()
        .includes(lowerHotelNameFilter)
    );
  };

  sortRowsByPrice = hotels =>
    hotels.sort(
      (a, b) => a.lowestAveragePrice.amount - b.lowestAveragePrice.amount
    );

  rowDisplayHandler = () => {
    const filteredRows = this.filterHotelRows();
    const { ascendingSort } = this.props;

    if (ascendingSort) {
      return this.sortRowsByPrice(filteredRows);
    }

    return filteredRows;
  };

  render() {
    const filteredHotels = this.rowDisplayHandler();
    return (
      <div className="hotel-list">
        {filteredHotels.map(hotelData => (
          <HotelRow key={hotelData.id} data={hotelData} />
        ))}
      </div>
    );
  }
}

HotelsContainer.propTypes = {
  hotels: PropTypes.instanceOf(Array).isRequired,
  hotelNameFilter: PropTypes.string.isRequired,
  ascendingSort: PropTypes.bool.isRequired
};

export default HotelsContainer;
