import React, { Component } from 'react';
import './style.less';
import SearchInput from '../UserControls/SearchInput';
import HotelsContainer from '../Hotels/HotelsContainer';

const RATES_ROUTE_URI =
  'https://homework-app.rocketmiles.com/fe-homework/rates';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      hotelNameFilter: '',
      ascendingSort: false
    };
  }

  componentDidMount() {
    this.getRatesHandler();
  }

  getRatesHandler = () => this.getRates().catch(() => this.getRates());

  getRates = () =>
    fetch(RATES_ROUTE_URI)
      .then(response => {
        if (response.status !== 200) {
          throw Error();
        }
        return response.json();
      })
      .then(jsonResponse => {
        this.setState({
          hotels: jsonResponse.results.hotels
        });
      });

  handleNameFilter = event =>
    this.setState({ hotelNameFilter: event.target.value });

  handlePriceSort = () => this.setState({ ascendingSort: true });

  render() {
    const { hotelNameFilter, hotels, ascendingSort } = this.state;

    return (
      <div className="app-container">
        <div className="content">
          <div className="filters">
            <div className="filter-element">
              <SearchInput
                placeholder="Hotel name"
                value={hotelNameFilter}
                onChangeFunction={this.handleNameFilter}
                labelText="Find hotel by name"
                id="hotel-search"
              />
            </div>
            <div className="filter-element">
              <div className="filter-element-content">
                Price
                <button type="button" onClick={this.handlePriceSort}>
                  Lowest to highest
                </button>
              </div>
            </div>
          </div>
          <HotelsContainer
            hotels={hotels}
            hotelNameFilter={hotelNameFilter}
            ascendingSort={ascendingSort}
          />
        </div>
      </div>
    );
  }
}

export default App;
