import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../contants/Styles';

const ItemClock = ({clockClose, clockOpened, name}) => {
  return (
    <View style={styles.bodyItems}>
      <View style={styles.items}>
        <View style={styles.item}>
          <FontAwesome6
            name="clock-rotate-left"
            color={Colors.pimary400}
            size={44}
          />
          <Text style={styles.clock}>{clockClose}</Text>
        </View>
        <Text style={styles.titleClock}>Close the {name}</Text>
      </View>
      <View style={styles.items}>
        <View style={styles.item}>
          <Entypo name="clock" color={Colors.pimary400} size={47} />
          <Text style={styles.clock}>{clockOpened}</Text>
        </View>
        <Text style={styles.titleClock}>Opened the {name}</Text>
      </View>
    </View>
  );
};

export default ItemClock;

const styles = StyleSheet.create({
  bodyItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  items: {
    width: 150,
    height: 150,
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: Colors.secondary,
    padding: 20,
    marginTop: 20,
    borderRadius: 30,
    elevation: 4,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  titleClock: {
    fontSize: 13,
    color: Colors.pimary400,
  },
  clock: {
    fontSize: 23,
    fontWeight: 'bold',
    color: Colors.error500,
    lineHeight: 40,
  },
});
