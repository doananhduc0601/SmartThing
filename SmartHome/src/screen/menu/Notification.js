import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../contants/Styles';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../contants/img/notification.png')} />
      <Text style={styles.context}>You have no notice</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  context: {
    color: Colors.pimary400,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
