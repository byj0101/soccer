// global import
import React from 'react';
import {View, Text} from 'react-native';

const Details: React.FC<{route: any}> = ({route}) => {
  const {data} = route.params;

  console.log('data : ', data);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
    </View>
  );
};

export default Details;
