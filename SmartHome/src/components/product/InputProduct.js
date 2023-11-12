import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, TextInput, View} from 'react-native';
import {Controller} from 'react-hook-form';

import {Colors} from '../../contants/Styles';

export function InputProduct({
  nameIcon,
  label = '',
  textInputConfig,
  control,
  errors,
}) {
  const inputStyles = [];

  if (errors[label]) {
    inputStyles.push(styles.inputInvalid);
  }
  return (
    <View style={[styles.inputContainer, inputStyles]}>
      <Controller
        control={control}
        defaultValue=""
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.inputs}
            {...textInputConfig}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            invalid={!!errors[label]}
          />
        )}
        name={label}
        rules={{required: true, maxLength: 80}}
      />
      <View style={styles.icons}>
        <MaterialIcons
          name={nameIcon}
          style={[styles.icon, errors[label] && styles.invalidLabel]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.pimary100,
    marginVertical: 10,
    borderWidth: 0.7,
    borderColor: Colors.pimary400,
    borderRadius: 20,
    height: 60,
    width: 340,
  },
  invalidLabel: {
    color: Colors.error500,
  },
  icons: {
    height: 55,
  },
  icon: {
    lineHeight: 60,
    fontSize: 25,
    color: Colors.pimary400,
  },
  inputs: {
    width: 300,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  inputInvalid: {
    borderWidth: 1.5,
    borderColor: Colors.error500,
  },
});
