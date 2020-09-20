import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <View style={styles.profileImage}>
          <Image
            source={require('../../assets/profile/picture_cropped.png')}
            style={styles.image}
            resizeMode="center"></Image>
        </View>
        <View style={styles.dm}>
          <Icon name="chat" size={18} color="#DFD8C8"></Icon>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, {fontWeight: '200', fontSize: 24}]}>
            Sebastijan Kokai
          </Text>
          <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
            Fakultet tehnickih nauka
          </Text>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            email@gmail.com
          </Text>
        </View>
        <View style={styles.row}>
          <FontAwesome5 name="graduation-cap" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            Univerzitet u Novom Sadu
          </Text>
        </View>
        <View style={styles.row}>
          <FontAwesome5 name="hashtag" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>IT30/2017</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome5 name="birthday-cake" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>3.8.1998.</Text>
        </View>
        <View style={styles.row}>
          <Icon name="calendar-today" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            23.10.2019 - 31.10.2021
          </Text>
        </View>
        <View style={styles.row}>
          <FontAwesome5 name="arrow-right" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>212003483</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 16,
  },
  dm: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  userInfoSection: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default ProfileScreen;
