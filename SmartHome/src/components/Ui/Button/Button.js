import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../contants/Styles';

function Button({children, onPress, width, noStyle}) {
  return (
    <Pressable
      style={({pressed}) => [
        !noStyle && styles.button,
        pressed && styles.pressed,
        width,
      ]}
      onPress={onPress}>
      <View>
        <Text style={[!noStyle ? styles.buttonText : styles.noStyle]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 220,
    margin: 10,
    borderRadius: 25,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.pimary400,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 24,
  },
  noStyle: {
    color: '#000',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  pressed: {
    opacity: 0.7,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});
