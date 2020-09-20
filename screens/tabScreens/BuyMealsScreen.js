import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Alert,
  ScrollView,
  TouchableHighlight,
  Animated,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

const BuyMealsScreen = () => {
  const [breakfast, setBreakfast] = useState(0);
  const [lunch, setLunch] = useState(0);
  const [dinner, setDinner] = useState(0);
  const [breakfastPrice, setBreakfastPrice] = useState(0);
  const [lunchPrice, setLunchPrice] = useState(0);
  const [dinnerPrice, setDinnerPrice] = useState(0);
  const [fullPrice, setFullPrice] = useState(0);
  const [balance, setBalance] = useState(1000);

  // const [bounceValue, setBounceValue] = useState({new Animated.Value(100)});

  // const toggleSubView = () => {

  // }

  const windowDimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  };

  const numbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];

  const transactions = [
    {
      id: 1,
      transactionDate: '10/04/2020',
      breakfast: 2,
      lunch: 0,
      dinner: 5,
      price: 330,
    },
    {
      id: 2,
      transactionDate: '22/03/2020',
      breakfast: 0,
      lunch: 0,
      dinner: 5,
      price: 250,
    },
    {
      id: 3,
      transactionDate: '21/03/2020',
      breakfast: 2,
      lunch: 10,
      dinner: 0,
      price: 820,
    },
    {
      id: 4,
      transactionDate: '15/02/2020',
      breakfast: 2,
      lunch: 5,
      dinner: 5,
      price: 850,
    },
  ];

  useEffect(() => {
    const temporaryPrice = breakfast * 39 + lunch * 72 + dinner * 60;
    if (temporaryPrice <= balance) {
      setBreakfastPrice(breakfast * 39);
      setLunchPrice(lunch * 72);
      setDinnerPrice(dinner * 60);
      setFullPrice(breakfastPrice + lunchPrice + dinnerPrice);
    }
  });

  const checkPrice = () => {
    const temporaryPrice = breakfast * 39 + lunch * 72 + dinner * 60;
    return temporaryPrice <= balance;
  };

  const confirmAlert = () => {
    Alert.alert(
      'Potvrda',
      'Da li ste sigurni?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'OK', onPress: () => buyMeals()},
      ],
      {cancelable: false},
    );
  };

  const sendToColleagueAlert = () => {
    Alert.alert(
      'Potvrda',
      'Posalji kolegi?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'OK', onPress: () => sendToColleague()},
      ],
      {cancelable: false},
    );
  };

  const buyMeals = () => {
    console.log('Buying meals...');
    // Code for transaction
  };

  const sendToColleague = () => {
    console.log('Sending to colleague...');
    // Code for transaction
  };

  return (
    <View style={styles.container}>
      {/* Upper part */}
      <View style={styles.upperComponents}>
        <View style={styles.upperComponent}>
          {/* BREAKFAST */}
          {/* ----------------- */}
          <View>
            <Text style={[styles.text, {marginRight: 'auto'}]}>Dorucak</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (breakfast - 1 >= 0 && breakfast - 1 <= 30)
                  setBreakfast(breakfast - 1);
              }}>
              <Text style={{fontSize: 18}}>-</Text>
            </TouchableOpacity>
            <Picker
              selectedValue={breakfast.toString()}
              style={{height: 30, width: 100}}
              onValueChange={(itemValue, itemIndex) => {
                const temporaryPrice =
                  itemValue * 39 + lunch * 72 + dinner * 60;
                const balanceAfter = balance - temporaryPrice;
                if (balanceAfter >= 0) {
                  setBreakfast(parseInt(itemValue));
                }
              }}>
              {numbers.map((item) => (
                <Picker.Item
                  label={item.toString()}
                  value={item.toString()}
                  key={item}
                />
              ))}
            </Picker>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (breakfast + 1 >= 0 && breakfast + 1 <= 30) {
                  const temporaryPrice =
                    (breakfast + 1) * 39 + lunch * 72 + dinner * 60;
                  const balanceAfter = balance - temporaryPrice;
                  if (balanceAfter >= 0) {
                    setBreakfast(breakfast + 1);
                  }
                }
              }}>
              <Text style={{fontSize: 18}}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', width: 80}}>
            <Text style={styles.text}> = {breakfastPrice}</Text>
          </View>
        </View>
        {/* LUNCH */}
        {/* ---------------------- */}
        <View style={styles.upperComponent}>
          <View>
            <Text style={[styles.text, {marginRight: 'auto'}]}>Rucak</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setLunch(lunch - 1);
              }}>
              <Text style={{fontSize: 18}}>-</Text>
            </TouchableOpacity>
            <Picker
              selectedValue={lunch.toString()}
              style={{height: 30, width: 100}}
              onValueChange={(itemValue, itemIndex) => {
                const temporaryPrice =
                  breakfast * 39 + itemValue * 72 + dinner * 60;
                const balanceAfter = balance - temporaryPrice;
                if (balanceAfter >= 0) {
                  setLunch(parseInt(itemValue));
                }
              }}>
              {numbers.map((item) => (
                <Picker.Item
                  label={item.toString()}
                  value={item.toString()}
                  key={item}
                />
              ))}
            </Picker>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                const temporaryPrice =
                  breakfast * 39 + (lunch + 1) * 72 + dinner * 60;
                const balanceAfter = balance - temporaryPrice;
                if (balanceAfter >= 0) {
                  setLunch(lunch + 1);
                }
              }}>
              <Text style={{fontSize: 18}}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', width: 80}}>
            <Text style={styles.text}> = {lunchPrice}</Text>
          </View>
        </View>
        {/* DINNER */}
        {/* ----------------- */}
        <View style={styles.upperComponent}>
          <View>
            <Text style={[styles.text, {marginRight: 'auto'}]}>Vecera</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setDinner(dinner - 1);
              }}>
              <Text style={{fontSize: 18}}>-</Text>
            </TouchableOpacity>
            <Picker
              selectedValue={dinner.toString()}
              style={{height: 30, width: 100}}
              onValueChange={(itemValue, itemIndex) => {
                const temporaryPrice =
                  breakfast * 39 + lunch * 72 + itemValue * 60;
                const balanceAfter = balance - temporaryPrice;
                if (balanceAfter >= 0) {
                  setDinner(parseInt(itemValue));
                }
              }}>
              {numbers.map((item) => (
                <Picker.Item
                  label={item.toString()}
                  value={item.toString()}
                  key={item}
                />
              ))}
            </Picker>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                const temporaryPrice =
                  breakfast * 39 + lunch * 72 + (dinner + 1) * 60;
                const balanceAfter = balance - temporaryPrice;
                if (balanceAfter >= 0) {
                  setDinner(dinner + 1);
                }
              }}>
              <Text style={{fontSize: 18}}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', width: 80}}>
            <Text style={styles.text}> = {dinnerPrice}</Text>
          </View>
        </View>
        {/* Labels */}
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View
            style={{
              width: Dimensions.get('window').width / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[styles.text, {marginRight: 0}]}>
              Stanje = {balance}
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[styles.text, {marginRight: 0}]}>
              Cena = {fullPrice}
            </Text>
          </View>
        </View>

        {/* Button confirm and button send */}
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            style={[styles.btnConfirm, {marginLeft: 'auto'}]}
            onPress={() => {
              confirmAlert();
            }}>
            <Text style={{fontSize: 18}}>Kupi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnSend, {marginRight: 'auto'}]}
            onPress={() => {
              sendToColleagueAlert();
            }}>
            <Text style={{fontSize: 14}}>Posalji kolegi</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* TRANSACTION HISTORY */}
      {/* ------------------- */}
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#009387',
          borderRadius: 24,
          padding: 14,
          marginVertical: 15,
        }}>
        <View
          style={{
            marginVertical: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24}}>Istorija transakcija</Text>
        </View>
        <View style={{paddingBottom: 10}}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={transactions}
            renderItem={({item}) => {
              return (
                <View style={styles.panelItemContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      {item.breakfast > 0 && (
                        <View style={styles.mealButton}>
                          <Text>Dorucak: {item.breakfast}</Text>
                        </View>
                      )}

                      {item.lunch > 0 && (
                        <View style={styles.mealButton}>
                          <Text>Rucak: {item.lunch}</Text>
                        </View>
                      )}
                      {item.dinner > 0 && (
                        <View style={styles.mealButton}>
                          <Text>Vecera: {item.dinner}</Text>
                        </View>
                      )}
                    </View>
                  </View>
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#0c0c0c',
                        marginHorizontal: 2,
                      }}>
                      {item.price}rsd
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#0c0c0c',
                        marginHorizontal: 2,
                      }}>
                      {item.transactionDate}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>

      {/* Testing */}
      {/* <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
          marginTop: 66,
        }}>
        <TouchableHighlight style={{padding: 8}} onPress={() => {}}>
          <Text style={styles.buttonText}>Some text</Text>
        </TouchableHighlight>
        <Animated.View
          style={[styles.subView, {transform: [{translateY: bounceValue}]}]}>
          <Text>This is a sub view</Text>
        </Animated.View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperComponents: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  upperComponent: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: Dimensions.get('window').width / 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '200',
    marginRight: 'auto',
  },
  btn: {
    width: 25,
    backgroundColor: '#009387',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnConfirm: {
    width: Dimensions.get('window').width / 2,
    height: 50,
    backgroundColor: '#009387',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  btnSend: {
    width: 120,
    height: 50,
    backgroundColor: '#009387',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  mealButton: {
    marginHorizontal: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#000',
  },
  panelItemContainer: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 14,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  panelHandle: {
    height: 5,
    width: 50,
    backgroundColor: '#666',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
  },
  // testing
  buttonText: {
    fontSize: 17,
    color: '#007AFF',
  },
  subView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    height: 100,
  },
});

export default BuyMealsScreen;
