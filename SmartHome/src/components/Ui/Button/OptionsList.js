import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const OptionsList = ({options, onSelect}) => {
  return (
    <View style={styles.container}>
      {/* {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => onSelect(option)}
        >
          <Text>{option.label}</Text>
          {option === "Chỉnh sửa" && (
            <Text>
              <Feather name="edit" size={24} color="black" />
              {option}
            </Text>
          )}
          {option === "Xóa" && (
            <Text>
              <Ionicons name="trash-outline" size={25} color="red" />
              {option}
            </Text>
          )}
        </TouchableOpacity>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 45,
    right: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    elevation: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default OptionsList;
