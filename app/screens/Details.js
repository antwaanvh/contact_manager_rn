'use strict';
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Actions, Header, Info } from '../components/UserDetails';
import colors from '../config/colors';

class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;

    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...contact} />
        <Actions {...contact} />
        <Info {...contact} />
      </ScrollView>
    );
  }
}

export default Details;
