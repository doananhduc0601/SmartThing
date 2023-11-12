import React, {useEffect} from 'react';
import {View, Animated} from 'react-native';

const Bouncing = ({children, switchWarningValue}) => {
  const translateYValue = new Animated.Value(0);
  const scaleValue = new Animated.Value(1);

  const startBouncing = () => {
    if (switchWarningValue) {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(translateYValue, {
            toValue: -10,
            duration: 160,
            useNativeDriver: false,
          }),
          Animated.timing(scaleValue, {
            toValue: 0.9,
            duration: 160,
            useNativeDriver: false,
          }),
        ]),
        Animated.parallel([
          Animated.timing(translateYValue, {
            toValue: 0,
            duration: 160,
            useNativeDriver: false,
          }),
          Animated.timing(scaleValue, {
            toValue: 0.9,
            duration: 160,
            useNativeDriver: false,
          }),
        ]),
        Animated.parallel([
          Animated.timing(translateYValue, {
            toValue: -20,
            duration: 160,
            useNativeDriver: false,
          }),
          Animated.timing(scaleValue, {
            toValue: 0.9,
            duration: 160,
            useNativeDriver: false,
          }),
        ]),
        Animated.parallel([
          Animated.timing(translateYValue, {
            toValue: 5,
            duration: 160,
            useNativeDriver: false,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 160,
            useNativeDriver: false,
          }),
        ]),
      ]).start(() => {
        setTimeout(startBouncing, 3000);
      });
    }
  };

  startBouncing();
  useEffect(() => {}, []);

  return (
    <View>
      <Animated.View
        style={{
          transform: [{translateY: translateYValue}, {scale: scaleValue}],
        }}>
        {children}
      </Animated.View>
    </View>
  );
};

export default Bouncing;
