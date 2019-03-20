import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';
import PropTypes from 'prop-types';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({tabs: tabData, cards:cardData});
    
  }
  

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({selected:tab});
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    let filtered = [];
    if(this.state.selected === 'all'){
      filtered = cardData;
    }else {
      filtered = cardData.filter(card => card.tab === this.state.selected ? filtered.push(card): null);
      
    }
    return filtered;
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}

Tabs.propTypes= {
  tabData: PropTypes.array,
  selectedTab: PropTypes.string,
};

Cards.propTypes = {
  cards: PropTypes.array,
}

// Pokemon.propTypes = {
//   pokemon: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       img: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       type: PropTypes.arrayOf(
//         PropTypes.oneOf([
//           'Grass',
//           'Poison',
//           'Fire',
//           'Flying',
//           'Water',
//           'Bug',
//           'Normal',
//           'Electric',
//           'Psychic',
//           'Ground',
//           'Fighting',
//           'Rock',
//           'Ice',
//           'Ghost',
//           'Dragon'
//         ])
//       ),
//       next_evolution: PropTypes.arrayOf(
//         PropTypes.shape({
//           num: PropTypes.string,
//           name: PropTypes.string
//         })
//       )
//     })
//   )
// };