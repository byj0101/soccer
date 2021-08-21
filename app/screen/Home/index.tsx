// global import
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';

// local import
// import {loadData} from '../../api';
import {dummy} from '../../data/home';
import {defaultStyle} from '../../styles';
import {homeStyle} from '../../styles/home';

const {fwb, fl1, flac, fljc, fldr} = defaultStyle;
const {container, tinyLogo} = homeStyle;

const Item = ({item, navigation}: {item: any; navigation: any}) => {
  return (
    <TouchableOpacity
      style={container}
      onPress={() => navigation.navigate('Details', {data: item})}>
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
        <View style={[fl1, flac, fljc, fldr]}>
          <Text style={fwb}>{item.fixture.status.short}</Text>
        </View>
      </View>
      <View style={[fl1, flac, fljc]}>
        <Image style={tinyLogo} source={{uri: item.teams.away.logo}} />
        <Text> {item.teams.away.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Home: React.FC<{navigation: any}> = ({navigation}) => {
  const [data, setData] = useState<any>(null);

  const renderItem = ({item}: {item: any}) => (
    <Item item={item} navigation={navigation} />
  );

  useEffect(() => {
    // loadData().then(res => setData(res.data.response));
    setData(dummy.response);
  }, []);

  if (!data) {
    return <ActivityIndicator />;
  }

  return (
    <View style={fl1}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_item, index) => String(index)}
      />
    </View>
  );
};

export default Home;
