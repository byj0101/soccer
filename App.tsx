/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// global import
import React from 'react';
import {useColorScheme} from 'react-native';
import {RecoilRoot} from 'recoil';

// local import
import NavigationNavigator from './app/navigation';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('isDarkMode :', isDarkMode);

  return (
    <RecoilRoot>
      <NavigationNavigator />
    </RecoilRoot>
  );
};

export default App;
