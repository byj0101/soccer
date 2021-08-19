// global import
import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';

// local import
// import {loadStatistics, loadLineups} from '../../api';
import {dummy} from '../../data/detail';
import {dummy2} from '../../data/lineups';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    justifyContent: 'space-around',
    borderBottomColor: '#dfdfdf',
    borderBottomWidth: 2,
    backgroundColor: 'white',
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

const Item = ({item}: {item: any}) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const Statistics: React.FC<{home: any; away: any}> = ({home, away}) => {
  const {statistics: homeStatistics} = home;
  const {statistics: awayStatistics} = away;

  return (
    <ScrollView>
      {homeStatistics.map((statistic, index) => (
        <View key={index} style={{flex: 1}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{statistic.type}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>{homeStatistics[index].value || '-'}</Text>
            </View>
            <View // TODO: 전체 값에 대한 기준이 필요할 듯 ? 지금은 임의로 넣음
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: '#edb4b4',
                  width: '35%',
                  height: '50%',
                  opacity: 0.5,
                }}
              />
              <View
                style={{
                  backgroundColor: 'red',
                  width: '65%',
                  height: '50%',
                }}
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: 'blue',
                  width: '65%',
                  height: '50%',
                }}
              />
              <View
                style={{
                  backgroundColor: '#aeddf5',
                  width: '35%',
                  height: '50%',
                  opacity: 0.5,
                }}
              />
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>{awayStatistics[index].value || '-'}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const Details: React.FC<{route: any}> = ({route}) => {
  const [detailData, setDetailData] = useState<any>(null);
  const [lineupData, setLineupData] = useState<any>(null);
  const [status, setStatus] = useState<any>('record');
  const {data} = route.params;

  useEffect(() => {
    console.log('data : ', data);

    // loadStatistics(data.fixture.id).then(res =>
    //   setDetailData(res.data.response),
    // );
    // loadLineups(data.fixrue.id)
    setLineupData(dummy2.response);
    setDetailData(dummy.response);
  });

  if (!detailData || !lineupData) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Item item={data} />
      </View>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View>
          <Button title={'라인업'} onPress={() => setStatus('lineup')} />
        </View>
        <View>
          <Button title={'결과'} onPress={() => setStatus('result')} />
        </View>
        <View>
          <Button title={'기록'} onPress={() => setStatus('record')} />
        </View>
      </View>
      <View style={{flex: 5}}>
        {status === 'lineup' && (
          <View>
            <Text> 라인업</Text>
          </View>
        )}
        {status === 'result' && (
          <View>
            <Text> 결과</Text>
          </View>
        )}
        {status === 'record' && (
          <Statistics home={detailData[0]} away={detailData[1]} />
        )}
      </View>
    </View>
  );
};

export default Details;
