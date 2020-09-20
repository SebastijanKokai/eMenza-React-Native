import React, {useState, useRef} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SlidingUpPanel from 'rn-sliding-up-panel';

const CreditCardScreen = () => {
  // Width and height of phone window
  const {width, height} = Dimensions.get('window');

  // Sliding panel
  const [dragRange, setDragRange] = useState({
    top: height - 80,
    bottom: 160,
  });
  const _draggedValue = new Animated.Value(180);
  const modalRef = useRef(null);

  // Carousel data
  const images = [
    {image: require('../../assets/cards/card1.png')},
    {image: require('../../assets/cards/card2.png')},
    {image: require('../../assets/cards/card3.png')},
    {image: require('../../assets/cards/card4.png')},
  ];

  // Carousel
  const carouselRef = useRef(null);
  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          source={item.image}
          style={{width: 360, height: 240, borderRadius: 10}}
        />
      </TouchableWithoutFeedback>
    );
  };

  // Transaction history
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

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 50, paddingHorizontal: 14}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 26, color: '#000'}}>
              Your credit cards,
            </Text>
            <Text style={{fontSize: 26, color: '#000', opacity: 0.6}}>
              Sebastijan Kokai
            </Text>
          </View>
          <View>
            <Image
              source={require('../../assets/profile/picture_cropped.png')}
              style={styles.profileImage}
            />
          </View>
        </View>

        <View>
          <Carousel
            layout={'tinder'}
            ref={carouselRef}
            data={images}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width - 10}
            swipeThreshold={100}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{overflow: 'visible', marginVertical: 30}}
            contentContainerCustomStyle={{paddingTop: 14}}
          />
        </View>
        <View style={{flex: 1, borderColor: '0c0c0c'}}>
          <SlidingUpPanel
            ref={modalRef}
            animatedValue={_draggedValue}
            backdropOpacity={0}
            snappingPoints={[360]}
            height={height + 20}
            friction={0.9}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                borderRadius: 24,
                padding: 14,
              }}>
              <View style={styles.panelHandle}></View>
              <View style={{marginVertical: 30}}>
                <Text style={{marginVertical: 16, color: '#000'}}>
                  Recent Transactions
                </Text>
              </View>
              <View style={{height: 500, paddingBottom: 10}}>
                <FlatList
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
                                <Text>Breakfast: {item.breakfast}</Text>
                              </View>
                            )}

                            {item.lunch > 0 && (
                              <View style={styles.mealButton}>
                                <Text>Lunch: {item.lunch}</Text>
                              </View>
                            )}
                            {item.dinner > 0 && (
                              <View style={styles.mealButton}>
                                <Text>Dinner: {item.dinner}</Text>
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
            </View>
          </SlidingUpPanel>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  panelHandle: {
    height: 5,
    width: 50,
    backgroundColor: '#666',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
  },
  panelItemContainer: {
    borderWidth: 0.8,
    borderColor: '#0c0c0c',
    padding: 14,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  panelImage: {
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 40,
  },
  mealButton: {
    marginHorizontal: 5,
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#52575D',
  },
});

export default CreditCardScreen;
