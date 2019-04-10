import React, { Component } from 'react';
import './style.less';
import HotelRow from '../Hotels/HotelRow';
import HotelsContainer from '../Hotels/HotelsContainer';

const RATES_ROUTE_URI =
  'https://homework-app.rocketmiles.com/fe-homework/rates';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      hotels: [],
      isError: false,
      hotelNameFilter: '',
      ascendingSort: false
    };
  }

  componentDidMount() {
    this.getRatesHandler();
  }

  getRatesHandler = () =>
    this.getRates()
      .then(() => {})
      .catch(() => this.getRates());

  getRates = () =>
    fetch(RATES_ROUTE_URI)
      .then(response => {
        if (response.status !== 200) {
          throw Error();
          return;
        }
        return response.json();
      })
      .then(jsonResponse => {
        this.setState({
          hotels: jsonResponse.results.hotels,
          isLoaded: true,
          isError: false
        });
      });

  handleNameFilter = event =>
    this.setState({ hotelNameFilter: event.target.value });

  filterHotelRows = () =>
    this.state.hotels.filter(hotelObject =>
      hotelObject.hotelStaticContent.name
        .toLowerCase()
        .includes(this.state.hotelNameFilter.toLowerCase())
    );

  sortRowsByPrice = hotels =>
    hotels.sort(
      (a, b) => a.lowestAveragePrice.amount - b.lowestAveragePrice.amount
    );

  rowDisplayHandler = () => {
    const filteredRows = this.filterHotelRows();

    if (this.state.ascendingSort) {
      return this.sortRowsByPrice(filteredRows);
    }

    return filteredRows;
  };

  handlePriceSort = () => this.setState({ ascendingSort: true });

  render() {
    const { hotelNameFilter } = this.state;

    const filteredHotels = this.rowDisplayHandler();

    return (
      <div className="app-container">
        <div className="content">
          <div className="filters">
            Hotel name
            <input
              value={hotelNameFilter}
              onChange={this.handleNameFilter}
              type="text"
            />
            Price
            <button onClick={this.handlePriceSort}>sort</button>
          </div>
          <HotelsContainer hotels={filteredHotels} />
        </div>
      </div>
    );
  }
}

export default App;
