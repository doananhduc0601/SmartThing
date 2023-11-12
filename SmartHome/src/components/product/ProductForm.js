import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../../contants/Styles';
import Entypo from 'react-native-vector-icons/Entypo';
import ItemProduct from './ItemProduct';

function ProductForm() {
  return (
    <View style={styles.item}>
      <View style={styles.itemDevices}>
        <Text style={styles.titleDevice}>Living room</Text>
        <ScrollView horizontal={true} style={styles.devices}>
          <ItemProduct nameIcon="light-bulb" nameDevice="light bulb" />
          <ItemProduct nameIcon="signal" nameDevice="wifi" />
          <ItemProduct nameIcon="thermometer" nameDevice="thermometer" />
          <ItemProduct nameIcon="air" nameDevice="Air conditioning" />
          <ItemProduct nameIcon="game-controller" nameDevice="game" />
        </ScrollView>
      </View>
      <View style={styles.itemDevices}>
        <Text style={styles.titleDevice}>Bedroom</Text>
        <ScrollView horizontal={true} style={styles.devices}>
          <ItemProduct nameIcon="beamed-note" nameDevice="music" />
          <ItemProduct nameIcon="radio" nameDevice="radio" />
          <ItemProduct nameIcon="game-controller" nameDevice="game" />
          <ItemProduct nameIcon="light-bulb" nameDevice="light bulb" />
          <ItemProduct nameIcon="signal" nameDevice="wifi" />
          <ItemProduct nameIcon="thermometer" nameDevice="thermometer" />
          <ItemProduct nameIcon="air" nameDevice="Air conditioning" />
        </ScrollView>
      </View>
      <View style={styles.itemDevices}>
        <Text style={styles.titleDevice}>Kitchen</Text>
        <ScrollView horizontal={true} style={styles.devices}>
          <ItemProduct nameIcon="light-bulb" nameDevice="light bulb" />
          <ItemProduct nameIcon="thermometer" nameDevice="thermometer" />
          <ItemProduct nameIcon="air" nameDevice="Air conditioning" />
        </ScrollView>
      </View>
      <View style={styles.itemDevices}>
        <Text style={styles.titleDevice}>Garden</Text>
        <ScrollView horizontal={true} style={styles.devices}>
          <ItemProduct nameIcon="light-bulb" nameDevice="light bulb" />
          <ItemProduct nameIcon="water" nameDevice="water tree" />
        </ScrollView>
      </View>
    </View>
  );
}

export default ProductForm;

const styles = StyleSheet.create({
  itemDevices: {
    marginVertical: 10,
  },
  devices: {},
  icon: {
    lineHeight: 60,
  },
  titleDevice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary900,
    lineHeight: 60,
  },
});
