import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../contants/Styles';
export function Title({titleLabel, contentLabel}) {
  return (
    <View style={stylesTitle.textView}>
      <Text style={stylesTitle.titleStyle}>{titleLabel}</Text>
      <Text style={stylesTitle.contentStyle}>{contentLabel}</Text>
    </View>
  );
}
export function Slogan({titleLabel, contentLabel}) {
  return (
    <>
      <Text style={stylesSlogan.titleStyle}>{titleLabel}</Text>
      <Text style={stylesSlogan.contentStyle}>{contentLabel}</Text>
    </>
  );
}
const stylesTitle = StyleSheet.create({
  textView: {
    marginHorizontal: 35,
    width: 300,
  },
  titleStyle: {
    color: '#000',
    fontSize: 30,
  },
  contentStyle: {
    fontSize: 18,
    color: 'gray',
  },
});

const stylesSlogan = StyleSheet.create({
  textView: {
    width: 300,
  },
  titleStyle: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 29,
    color: Colors.primary900,
  },
  contentStyle: {
    fontSize: 14,
    color: 'gray',
  },
});
