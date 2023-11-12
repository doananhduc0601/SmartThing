import * as React from 'react';
import {Text, View, StyleSheet, Animated, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GoBack from './Ui/Button/GoBack';
import ButtonMode from './Ui/Button/ButtonMode';
import {child} from 'firebase/database';
import IconsButton from './Ui/Button/IconsButton';
import Octicons from 'react-native-vector-icons/Octicons';
import {Colors} from '../contants/Styles';

const DynamicHeader = ({
  children,
  animHeaderValue,
  name,
  dataFeature,
  idData,
  goback,
}) => {
  function ItemFeatures() {
    if (name === 'Security Camera') {
      return (
        <View style={styles.video}>
          <View style={styles.itemVideo}>
            <Octicons name="video" size={40} />
          </View>
        </View>
      );
    } else {
      return (
        <FlatList
          data={dataFeature}
          numColumns={3}
          keyExtractor={item => item.key}
          renderItem={items => {
            return (
              <ItemFeatures
                keyFeature={items.item.key}
                name={items.item.name}
                switchValue={items.item.switch}
                idCategories={idData}
              />
            );
          }}
        />
      );
    }
  }
  const Max_Header_Height = 520;
  const Min_Header_Height = 100;
  const Scroll_Distance = Max_Header_Height - Min_Header_Height;
  const headerHeight = animHeaderValue.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Max_Header_Height, Min_Header_Height],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View style={[styles.header, {height: headerHeight}]}>
      <LinearGradient
        style={styles.header}
        colors={[Colors.primary500, Colors.primary600, Colors.primary700]}>
        <View style={styles.title}>
          <GoBack onPress={goback} />
          <Text style={styles.titleText}>{name}</Text>
          <IconsButton onPress={console.log('')} name="appstore-o" />
        </View>
        {/* {children} */}
      </LinearGradient>
      <View style={[styles.bodyItems, idData !== 2 && {marginHorizontal: 20}]}>
        {ItemFeatures()}
      </View>
    </Animated.View>
  );
};

export default DynamicHeader;
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary700,
  },
  title: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    textAlign: 'center',
    color: Colors.pimary100,
    fontSize: 23,
    fontWeight: 'bold',
  },
  //
  pressed: {
    opacity: 0.5,
  },
  video: {
    marginTop: 59,
    backgroundColor: Colors.background,
    width: '100%',
    height: 300,
    borderRadius: 50,
    marginBottom: 10,
  },
  itemVideo: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    height: 150,
    borderRadius: 30,
  },
});
