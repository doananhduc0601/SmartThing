import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductForm from '../../components/product/ProductForm';
import {Colors} from '../../contants/Styles';

function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Device</Text>
      </View>
      <View style={styles.itemDevice}>
        <ProductForm />
      </View>
    </View>
  );
}

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    color: Colors.primary800,
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemDevice: {
    elevation: 4,
  },
});
