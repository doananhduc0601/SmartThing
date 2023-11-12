import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import React from 'react';
import {Colors} from '../../contants/Styles';
import Entypo from 'react-native-vector-icons/Entypo';
const ItemProduct = ({nameIcon, nameDevice}) => {
  const createTwoButtonAlert = () =>
    Alert.alert('Add device', 'you cannot add devices', [
      {
        text: 'Cancel',
        onPress: () => console.log('you cannot add devices'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <Pressable
      onPress={createTwoButtonAlert}
      android_ripple={{color: '#ccc'}}
      style={({pressed}) => [pressed ? {opacity: 0.4} : null, styles.item]}>
      <View style={styles.itemDevices}>
        <Entypo
          name={nameIcon}
          size={30}
          color={Colors.primary700}
          style={styles.icon}
        />
        <Text style={styles.titleDevice}>{nameDevice}</Text>
      </View>
    </Pressable>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    marginHorizontal: 2,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderColor: Colors.darkLight,
    borderWidth: 1,
    backgroundColor: Colors.background,
  },
  itemDevices: {
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 70,
  },
  icon: {},
  titleDevice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primary700,
  },
});
