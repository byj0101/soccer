// global import
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// local import
import HomeScreen from '../screen/Home';
import DetailsScreen from '../screen/Home/Detail';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
