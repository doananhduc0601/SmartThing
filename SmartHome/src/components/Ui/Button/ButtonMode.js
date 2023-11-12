import {StyleSheet, View, Pressable, Animated, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../../../contants/Styles';
import {Icons} from '../../../contants/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from '../../../store/categories/categoriesAction';
import _debounce from 'lodash/debounce';

function ButtonMode({name, modeSize, isPressed, id, onToggle}) {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.categories);
  const product = data.find(category => category.id === id);
  const [isEnabled, setIsEnabled] = useState(product.switch);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onToggle(!isEnabled);
  };
  const debouncedToggleSwitch = _debounce(toggleSwitch);
  let iconMode;
  if (name === 'Gate') {
    iconMode = isEnabled ? Icons.gate_open : Icons.gate_off;
    var iconDescribe = (
      <Image
        style={{width: 120, height: 120}}
        source={require('../../../contants/img/icon_gate_off.png')}
      />
    );
  }
  if (name === 'Light Bulb') {
    iconMode = isEnabled ? Icons.lightBulb_open : Icons.lightBulb_off;
    var iconDescribe = (
      <Image
        style={{width: 120, height: 120}}
        source={require('../../../contants/img/icon_lightBulb_off.png')}
      />
    );
  }
  if (name === 'Security Camera') {
    iconMode = isEnabled ? Icons.securityCamera_on : Icons.securityCamera_off;
    var iconDescribe = (
      <Image
        style={{width: 100, height: 100}}
        source={require('../../../contants/img/icon_securityCamera_off.png')}
      />
    );
  }
  return (
    <View style={[styles.mode]}>
      <Animated.View
        style={[
          {width: modeSize, height: modeSize},
          isEnabled
            ? {backgroundColor: Colors.primary700}
            : {backgroundColor: Colors.primary400},
          styles.switchShadow,
          isPressed ? {opacity: 0.5} : {opacity: 1},
        ]}>
        <Animated.View
          style={[
            styles.switchShadow,
            styles.switchShadow3,
            isEnabled
              ? {backgroundColor: Colors.primary500}
              : {backgroundColor: Colors.primary300},
          ]}>
          <Pressable
            style={({pressed}) => [
              pressed && styles.pressed,
              styles.switchShadow,
              styles.switch,
              isEnabled
                ? {backgroundColor: Colors.primary400}
                : {backgroundColor: Colors.primary200},
            ]}
            onPress={debouncedToggleSwitch}>
            <View>{iconMode}</View>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

export default ButtonMode;

const styles = StyleSheet.create({
  mode: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  switchShadow: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 30,
  },
  switchShadow3: {
    width: 150,
    height: 150,
  },
  switch: {
    width: 100,
    height: 100,
  },
  pressed: {
    opacity: 0.5,
  },
});
