import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../contants/Styles';
import GoBack from '../Button/GoBack';

function ErrorOverLay({message}) {
  const navigation = useNavigation();
  function gobackHandler() {
    navigation.goBack();
  }
  const handleReloadPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <GoBack onPress={gobackHandler} />
      <TouchableOpacity onPress={handleReloadPress}>
        <Text style={{fontSize: 20, color: 'blue'}}>Reload</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ErrorOverLay;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
    color: Colors.primary900,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primary900,
  },
});
