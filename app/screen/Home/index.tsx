// global import
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';

// local import
// import {loadData} from '../../api';
import {dummy} from '../../data/home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdfdf',
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    justifyContent: 'space-around',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const Item = ({item, navigation}: {item: any; navigation: any}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Details', {data: item})}>
      <View style={styles.item}>
        <Image style={styles.tinyLogo} source={{uri: item.teams.home.logo}} />
        <Text> {item.teams.home.name}</Text>
      </View>
      <View>
        <View style={{...styles.item, flexDirection: 'row'}}>
          <Text style={styles.score}> {item.goals.home}</Text>
          <Text style={styles.score}> {':'}</Text>
          <Text style={styles.score}> {item.goals.away}</Text>
        </View>
        <View style={{...styles.item}}>
          <Text style={styles.score}>{item.fixture.status.short}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Image style={styles.tinyLogo} source={{uri: item.teams.away.logo}} />
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
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_item, index) => String(index)}
      />
    </View>
  );
};

export default Home;
