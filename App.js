/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// General
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './navigation/DrawerContent';

// Screens
import MainTabScreen from './navigation/MainTabScreen';
import SettingsScreen from './screens/drawerScreens/SettingsScreen';
import SupportScreen from './screens/drawerScreens/SupportScreen';
import CreditCardScreen from './screens/drawerScreens/CreditCardScreen';
import RootStackScreen from './screens/login/RootStackScreen';

// Auth Context
import {AuthContext} from './components/context';

// Firebase
import {firebase} from './firebase/config';

// Async Storage
import AsyncStorage from '@react-native-community/async-storage';

import {View, ActivityIndicator} from 'react-native';

const Drawer = createDrawerNavigator();

const App = () => {
  const initialLoginState = {
    isLoading: true,
    userToken: null,
    email: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        let userToken = null;
        try {
          userToken = 'randomGenerated';
          await AsyncStorage.setItem('userToken', userToken);
        } catch (error) {
          throw error;
        }
        dispatch({type: 'LOGIN', id: email, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (error) {
          throw error;
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: async (email) => {
        let userToken = null;
        try {
          userToken = 'randomGenerated';
          await AsyncStorage.setItem('userToken', userToken);
        } catch (error) {
          throw error;
        }
        dispatch({type: 'REGISTER', id: email, token: userToken});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    });
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="CreditCard" component={CreditCardScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
