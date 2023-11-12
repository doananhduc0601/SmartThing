import Ionicons from 'react-native-vector-icons/Ionicons';
import {Pressable, StyleSheet, View} from 'react-native';
import {Colors} from '../../../contants/Styles';

function GoBack({onPress}) {
  return (
    <View>
      <Pressable style={styles.goBack} onPress={onPress}>
        <Ionicons name="arrow-back-sharp" size={30} color={Colors.pimary100} />
      </Pressable>
    </View>
  );
}
export default GoBack;
const styles = StyleSheet.create({
  goBack: {
    marginBottom: 20,
  },
});
