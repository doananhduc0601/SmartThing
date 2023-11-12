import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

const TransitionExample = () => {
  const [isToggled, setIsToggled] = useState(false);
  const colorAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(colorAnimation, {
      toValue: isToggled ? 1 : 0,
      duration: 500,
      useNativeDriver: false, // Native driver is not supported for color animation
    }).start();
  }, [isToggled]);

  const backgroundColorInterpolation = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['blue', 'red'],
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          width: 200,
          height: 200,
          backgroundColor: backgroundColorInterpolation,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Animated Transition</Text>
      </Animated.View>
      <TouchableOpacity onPress={() => setIsToggled(!isToggled)}>
        <Text>Toggle Color</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransitionExample;
