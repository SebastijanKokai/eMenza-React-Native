// React
import React from 'react';

// Tab navigator
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// Icon
import Icon from 'react-native-vector-icons/Ionicons';

// Stacks
import {
  HomeStackScreen,
  ProfileStackScreen,
  BuyMealsStackScreen,
  NotificationStackScreen,
} from '../screens/tabScreens/Stacks';
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#f49049',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="BuyMeals"
        component={BuyMealsStackScreen}
        options={{
          tabBarLabel: 'Kupi obroke',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="ios-cash" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: 'Notifikacije',
          tabBarColor: '#e50000',
          tabBarIcon: ({color}) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
