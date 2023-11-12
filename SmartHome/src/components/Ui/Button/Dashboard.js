import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {Colors} from '../../../contants/Styles';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dashboard}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.triangleButton]}>
            <Icon name="triangle-up" size={24} color={Colors.gray} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.triangleButton}>
            <Icon name="triangle-left" size={24} color={Colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.centerButton}>
            {/* <Icon name="plus" size={36} color={Colors.gray} /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.triangleButton}>
            <Icon name="triangle-right" size={24} color={Colors.gray} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.triangleButton}>
            <Icon name="triangle-down" size={24} color={Colors.gray} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  dashboard: {
    width: 150,
    height: 150,
    backgroundColor: Colors.secondary,
    borderRadius: 100,
    elevation: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangleButton: {
    // backgroundColor: '#f0f0f0',
    // borderRadius: 50,
    padding: 10,
  },
  centerButton: {
    width: 61,
    height: 61,
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
    elevation: 10,
  },
});

export default Dashboard;
