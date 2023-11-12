import React, {useEffect} from 'react';
import {View, Animated} from 'react-native';

const BouncingButton = ({children, navigation}) => {
  const translateYValue = new Animated.Value(0);
  const scaleValue = new Animated.Value(1);

  const startBouncing = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateYValue, {
          toValue: -20,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(scaleValue, {
          toValue: 0.9,
          duration: 300,
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.timing(translateYValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.timing(translateYValue, {
          toValue: -20,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(scaleValue, {
          toValue: 0.9,
          duration: 300,
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.timing(translateYValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]),
    ]).start(() => {
      setTimeout(startBouncing, 3000);
    });
  };

  useEffect(() => {
    startBouncing();
  }, []);

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

export default BouncingButton;
