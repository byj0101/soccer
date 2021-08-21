// global import
import React from 'react';
import {View, ScrollView, Text} from 'react-native';

// local import
import {defaultStyle} from '../../../styles';

const Statistics: React.FC<{home: any; away: any}> = ({home, away}) => {
  const {statistics: homeStatistics} = home;
  const {statistics: awayStatistics} = away;
  const {fl1, fl2, flac, fljc, fldr} = defaultStyle;

  return (
    <ScrollView>
      {homeStatistics.map((statistic, index) => (
        <View key={index} style={fl1}>
          <View style={[fl1, flac, fljc]}>
            <Text>{statistic.type}</Text>
          </View>
          <View style={[fl1, fldr]}>
            <View style={[fl1, flac, fljc]}>
              <Text>{homeStatistics[index].value || '-'}</Text>
            </View>
            <View // TODO: 전체 값에 대한 기준이 필요할 듯 ? 지금은 임의로 넣음
              style={[fl2, flac, fljc, fldr]}>
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
            <View style={[fl2, flac, fljc, fldr]}>
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
            <View style={[fl1, flac, fljc]}>
              <Text>{awayStatistics[index].value || '-'}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Statistics;
