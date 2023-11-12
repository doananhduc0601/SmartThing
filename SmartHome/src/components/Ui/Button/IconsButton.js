import {Pressable, StyleSheet, Image, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Slogan} from '../Display/Title';
import {Colors} from '../../../contants/Styles';

function IconsButton({name, onPress}) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <AntDesign name={name} size={30} color={Colors.pimary100} />
    </Pressable>
  );
}

export default IconsButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
  },
  buttonUser: {
    flexDirection: 'row',
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
  images: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  imageUser: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
    borderRadius: 50,
  },
});
