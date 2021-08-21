// global import
import React, {useEffect, useState} from 'react';
import {View, Text, Button, ActivityIndicator, Image} from 'react-native';

// local import
// import {loadStatistics, loadLineups} from '../../api';
import Header from './Header';
import Lineup from './Lineup';
import Result from './Result';
import Statistics from './Statistics';
import {dummy} from '../../../data/detail';
import {dummy2} from '../../../data/lineups';
import {defaultStyle} from '../../../styles';

const Details: React.FC<{route: any}> = ({route}) => {
  const [statisticData, setStatisticData] = useState<any>(null);
  const [lineupData, setLineupData] = useState<any>(null);
  const [status, setStatus] = useState<any>('record');
  const {data} = route.params;
  const {fl05, fl1, flac, fldr, fljcsa} = defaultStyle;

  useEffect(() => {
    console.log('data : ', data);

    // loadStatistics(data.fixture.id).then(res =>
    //   setDetailData(res.data.response),
    // );
    // loadLineups(data.fixrue.id)
    setLineupData(dummy2.response);
    setStatisticData(dummy.response);
  });

  if (!statisticData || !lineupData) {
    return <ActivityIndicator />;
  }

  return (
    <View style={fl1}>
      <View style={fl1}>
        <Header item={data} />
      </View>
      <View style={[fl05, fldr, fljcsa, flac]}>
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
        {status === 'lineup' && <Lineup />}
        {status === 'result' && <Result />}
        {status === 'record' && (
          <Statistics home={statisticData[0]} away={statisticData[1]} />
        )}
      </View>
    </View>
  );
};

export default Details;
