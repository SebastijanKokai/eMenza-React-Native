import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, {fontSize: 24}]}>12</Text>
            <Text style={[styles.text, styles.subText]}>Dorucak</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: '#DFD8C8',
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}>
            <Text style={[styles.text, {fontSize: 24}]}>7</Text>
            <Text style={[styles.text, styles.subText]}>Rucak</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, {fontSize: 24}]}>8</Text>
            <Text style={[styles.text, styles.subText]}>Vecera</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 32}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 150}}>
          <View style={styles.mediaImageContainer}>
            <Image
              source={require('../../assets/meals/spaghetti_resized.jpg')}></Image>
          </View>
          <View style={styles.mediaImageContainer}>
            <Image
              source={require('../../assets/meals/eggs_resized.jpg')}></Image>
          </View>
          <View style={styles.mediaImageContainer}>
            <Image
              source={require('../../assets/meals/pancakes_resized.jpg')}></Image>
          </View>
          <View style={styles.mediaImageContainer}>
            <Image
              source={require('../../assets/meals/pudding_resized.jpg')}></Image>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
  },
  subText: {
    fontSize: 14,
    color: '#AEB5BC',
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  mediaImageContainer: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 16,
  },
});

export default HomeScreen;
