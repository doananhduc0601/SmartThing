import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Colors, calculateFontSize} from '../../../contants/Styles';

const Header_Log = ({title}) => {
  const {width, height} = Dimensions.get('window');
  const screenDimensions = Dimensions.get('screen');
  const windowDimensions = Dimensions.get('window');
  console.log('====================================');
  console.log(screenDimensions.fontScale);
  console.log('====================================');

  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.contentText,
            {width: (width / 3) * 2, fontSize: calculateFontSize()},
          ]}>
          {title}
        </Text>
        <Text style={[styles.contentText]}>Account</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{width: width / 3, height: width / 3}}
          source={require('../../../contants/img/logo_signin.png')}
        />
      </View>
    </View>
  );
};

export default Header_Log;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary200,
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 33,
    fontWeight: 'bold',
    color: Colors.pimary400,
  },
  imageContainer: {
    flex: 1,
  },

  logoHeader: {
    width: 150,
    height: 150,
  },
});
