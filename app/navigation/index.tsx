// global import
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// local import
import HomeStack from '../navigation/HomeStack';

const Tab = createBottomTabNavigator();

const NavigationNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationNavigator;
