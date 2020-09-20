import React from 'react';
// Screens
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import NotificationScreen from './NotificationScreen';
import BuyMealsScreen from './BuyMealsScreen';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Other
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f49049',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <Icon.Button
              name="md-menu"
              size={25}
              backgroundColor="#f49049"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profil',
          headerLeft: () => (
            <Icon.Button
              name="md-menu"
              size={25}
              backgroundColor="#1f65ff"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const BuyMealsStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="BuyMeals"
        component={BuyMealsScreen}
        options={{
          title: 'Kupi obroke',
          headerLeft: () => (
            <Icon.Button
              name="md-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const NotificationStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#e50000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notifikacije',
          headerLeft: () => (
            <Icon.Button
              name="md-menu"
              size={25}
              backgroundColor="#e50000"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export {
  HomeStackScreen,
  ProfileStackScreen,
  BuyMealsStackScreen,
  NotificationStackScreen,
};
