import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import CATEGORIES from '../src/config/CATEGORIES';
import COLORS from '../src/config/COLORS';
import ADVANTURES from '../src/config/ADVANTURES';
import SPACING from '../src/config/SPACING';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-ionicons';

const wd = Dimensions.get('screen').width;

const Index = () => {
  const navigation = useNavigation();

  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <SafeAreaView>
      <View style={{padding: SPACING * 2}}>
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
          <Text
              style={{
                fontSize: SPACING * 3,
                fontWeight: 'bold',
                color: COLORS.dark,
              }}>
            Discover
          </Text>
          <Image
              style={{
                height: SPACING * 5,
                width: SPACING * 5,
                borderRadius: SPACING * 5,
              }}
              source={require('../src/assets/images/Avatar.png')}
          />
        </View>
        <ScrollView style={{marginVertical: SPACING * 2}} horizontal>
          {CATEGORIES.map((category, index) => (
              <TouchableOpacity
                  onPress={() => setActiveCategory(index)}
                  style={{marginRight: SPACING}}
                  key={category.id}>
                <Text
                    style={[
                      {fontSize: SPACING * 2, color: COLORS.dark},
                      activeCategory === index && {color: COLORS.primary},
                    ]}>
                  {category.title}
                </Text>
              </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={{fontSize: SPACING * 1.7, color: COLORS.dark}}>
          {CATEGORIES[activeCategory].tours.length + ''}
          {CATEGORIES[activeCategory].title}
        </Text>
        <ScrollView
            horizontal
            showHorizontalScrollIndicator={false}
            snapToInterval={wd * 0.7}
            decelarationRate="fast"
            pagingEnabled
            style={{marginVertical: SPACING * 2}}>
          {CATEGORIES[activeCategory].tours.map((tour, index) => (
              <TouchableOpacity
                  onPress={() => navigation.navigate('Detail', { tour: tour })}
                  style={{
                    width: wd * 0.7,
                    height: wd * 0.9,
                    overflow: 'hidden',
                    borderRadius: SPACING * 2,
                    marginRight: SPACING * 2,
                  }}
                  key={index}>
                <View
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      height: '100%',
                      width: '100%',
                      backgroundColor: COLORS.transparent,
                      justifyContent: 'space-between',
                      padding: SPACING,
                    }}>
                  <TouchableOpacity
                      style={{
                        alignSelf: 'flex-end',
                        padding: SPACING / 1.2,
                        backgroundColor: COLORS.white,
                        borderRadius: SPACING * 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                    <Icon
                        name="heart"
                        color={COLORS.primary}
                        size={SPACING * 3}
                    />
                  </TouchableOpacity>
                  <Text
                      style={{
                        fontSize: SPACING * 2,
                        color: COLORS.white,
                        fontWeight: '700',
                        marginLeft: SPACING,
                      }}>
                    {tour.title}
                  </Text>
                </View>
                <Image
                    style={{width: '100%', height: '100%'}}
                    source={tour.image}
                />
              </TouchableOpacity>
          ))}
        </ScrollView>

        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
          <Text
              style={{
                fontSize: SPACING * 2,
                fontWeight: 'bold',
                color: COLORS.dark,
              }}>
            Feeling Adventurous?
          </Text>
          <TouchableOpacity>
            <Text
                style={{
                  fontSize: SPACING * 1.4,
                  fontWeight: '500',
                  color: COLORS.primary,
                }}>
              Show All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
            horizontal
            pagingEnabled
            style={{marginVertical: SPACING * 2}}
            showsHorizontalScrollIndicator={false}>
          {ADVANTURES.map(adventure => (
              <TouchableOpacity
                  key={adventure.id}
                  style={{
                    marginRight: SPACING * 3,
                    padding: SPACING,
                    alignItems: 'center',
                  }}>
                <View style={{width: SPACING * 3, height: SPACING * 3}}>
                  <Image
                      source={adventure.image}
                      resizeMode="contain"
                      style={{width: '100%', height: '100%'}}
                  />
                </View>
                <Text
                    style={{
                      textTransform: 'uppercase',
                      fontSize: SPACING,
                      marginTop: SPACING,
                    }}>
                  {adventure.title}
                </Text>
              </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
