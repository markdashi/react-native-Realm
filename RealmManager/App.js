/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {TabNavigator,StackNavigator} from 'react-navigation'

import Home from 'Home'
import RealmPage from 'RealmPage'

const TabBar = TabNavigator({
  Home:{
    screen:Home,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'首页',
      tabBarIcon:({ focused ,tintColor}) => (
          focused?<Image source={require('./Images/m.png')} style={styles.iconStyle} />:
              <Image source={require('./Images/m_default.png')} style={styles.iconStyle} />
      )
    })
  },
  RealmPage:{
    screen:RealmPage,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'Realm',
      tabBarIcon:({ focused ,tintColor}) => (
          focused?<Image source={require('./Images/message.png')} style={styles.iconStyle} />:
              <Image source={require('./Images/message_default.png')} style={styles.iconStyle} />
      )
    })
  }
});

const styles = StyleSheet.create({
  iconStyle:{
    width:28,
    height:28
  }
});

const App = StackNavigator({
  TabBar:{screen:TabBar}
});

export default App
