import React, {useEffect, useState, useRef} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Animated,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  fetchCategories,
  updateCategorySwitch,
} from '../../store/categories/categoriesAction';

import Octicons from 'react-native-vector-icons/Octicons';

import GoBack from '../../components/Ui/Button/GoBack';
import ButtonMode from '../../components/Ui/Button/ButtonMode';
import Dashboard from '../../components/Ui/Button/Dashboard';

import {Colors} from '../../contants/Styles';

import ItemFeature from '../../components/Menu/ItemFeature';
import ItemClock from '../../components/Menu/ItemClock';
import IconsButton from '../../components/Ui/Button/IconsButton';

function DetailsProducts({data, iconDescribe}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const idCategories = data.id;

  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 1);
  }, [dispatch, idCategories]);

  function switchHandler(id, newValue) {
    dispatch(updateCategorySwitch(id, newValue));
  }
  function gobackHandler() {
    navigation.goBack();
  }

  const dataDescribe = Object.values(data.describe);
  const dataFeature = Object.keys(data.feature).map(key => ({
    key,
    ...data.feature[key],
  }));
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const Max_Header_Height = 520;
  const Min_Header_Height = 100;
  const Max_ModeSize_Height = 200;
  const Min_ModeSize_Height = 150;
  const Scroll_Distance = Max_Header_Height - Min_Header_Height;
  const Scroll_ModeSize = Max_ModeSize_Height - Min_ModeSize_Height;
  const headerHeight = scrollOffsetY.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Max_Header_Height, Min_Header_Height],
    extrapolate: 'clamp',
  });

  const modeSize = scrollOffsetY.interpolate({
    inputRange: [0, Scroll_ModeSize], // Khi người dùng cuộn đến 300px, icon sẽ thu nhỏ
    outputRange: [Max_ModeSize_Height, Min_ModeSize_Height], // Kích thước icon từ 100px đến 20px
    extrapolate: 'clamp', // Giới hạn giá trị đầu ra trong khoảng inputRange
  });

  function renderItemDescribe(item) {
    return (
      <View style={styles.itemDescribe} key={item.id}>
        <Text style={styles.textDescribe}>{item.name}</Text>
        <Text style={styles.textDescribe}>{item.value}</Text>
      </View>
    );
  }
  function ItemFeatures() {
    if (data.name === 'Security Camera') {
      return (
        <View style={styles.video}>
          <View style={styles.itemVideo}>
            <Octicons name="video" size={40} />
          </View>
        </View>
      );
    } else {
      return (
        <FlatList
          key={item => item.id}
          data={dataFeature}
          numColumns={3}
          keyExtractor={item => item.key}
          renderItem={items => {
            return (
              <ItemFeature
                keyFeature={items.item.key}
                name={items.item.name}
                switchValue={items.item.switch}
                idCategories={idCategories}
              />
            );
          }}
        />
      );
    }
  }
  function ItemClocks() {
    if (data.name === 'Security Camera') {
      return <Dashboard />;
    } else {
      return (
        <ItemClock
          name={data.name}
          clockClose={data.clockClose}
          clockOpened={data.clockOpened}
        />
      );
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <LinearGradient
          style={styles.header}
          colors={[Colors.primary500, Colors.primary600, Colors.primary700]}>
          <View style={styles.title}>
            <GoBack onPress={gobackHandler} />
            <Text style={styles.titleText}>{data.name}</Text>
            <IconsButton onPress={{}} name="appstore-o" />
          </View>
          <ButtonMode
            id={data.id}
            name={data.name}
            isPressed={isPressed}
            onToggle={isEnabled => {
              switchHandler(idCategories, {switch: isEnabled});
            }}
            modeSize={modeSize}
            iconDescribe={iconDescribe}
          />
        </LinearGradient>
        <View style={[styles.bodyItems]}>{ItemFeatures()}</View>
      </Animated.View>
      <ScrollView
        style={[styles.body]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        {ItemClocks()}

        <View style={[styles.describe]}>
          <View style={styles.contentDescribe}>
            <View style={[styles.information]}>
              {dataDescribe.map(item => renderItemDescribe(item))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default DetailsProducts;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary700,
  },
  header: {
    backgroundColor: Colors.primary700,
  },
  title: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    textAlign: 'center',
    color: Colors.pimary100,
    fontSize: 23,
    fontWeight: 'bold',
  },
  //
  pressed: {
    opacity: 0.5,
  },
  //
  //
  body: {
    width: '100%',
    padding: 30,
    backgroundColor: Colors.background,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  bodyItems: {
    // alignItems: 'center',
  },
  video: {
    marginTop: 59,
    backgroundColor: Colors.background,
    width: '100%',
    height: 300,
    borderRadius: 50,
    marginBottom: 10,
  },
  itemVideo: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    height: 150,
    borderRadius: 30,
  },
  titleClock: {
    fontSize: 13,
    color: Colors.pimary400,
    width: 130,
  },
  clock: {
    fontSize: 23,
    fontWeight: 'bold',
    color: Colors.error500,
    lineHeight: 40,
  },
  describe: {
    height: 500,
    marginTop: 100,
  },
  contentDescribe: {
    flex: 1,
    alignItems: 'center',
  },
  information: {
    marginTop: 20,
    justifyContent: 'center',
    width: 300,
  },
  itemDescribe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDescribe: {
    fontSize: 16,
    color: Colors.pimary400,
  },
});