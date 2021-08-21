// global import
import React from 'react';
import {View, Image, Text} from 'react-native';

// local import
import {defaultStyle} from '../../../styles';
import {homeStyle} from '../../../styles/home';

const Header = ({item}: {item: any}) => {
  const {fwb, fl1, flac, fljc, fldr} = defaultStyle;
  const {container, tinyLogo} = homeStyle;

  return (
    <View
      style={[
        container,
        {
          borderBottomColor: '#dfdfdf',
          borderBottomWidth: 2,
          backgroundColor: 'white',
        },
      ]}>
      <View style={[fl1, flac, fljc]}>
        <Image style={tinyLogo} source={{uri: item.teams.home.logo}} />
        <Text> {item.teams.home.name}</Text>
      </View>
      <View>
        <View style={[fl1, flac, fljc, fldr]}>
          <Text style={fwb}> {item.goals.home}</Text>
          <Text style={fwb}> {':'}</Text>
          <Text style={fwb}> {item.goals.away}</Text>
        </View>
        <View style={[fl1, flac, fljc]}>
          <Text style={fwb}>{item.fixture.status.short}</Text>
        </View>
      </View>
      <View style={[fl1, flac, fljc]}>
        <Image style={tinyLogo} source={{uri: item.teams.away.logo}} />
        <Text> {item.teams.away.name}</Text>
      </View>
    </View>
  );
};

export default Header;
