import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCategories,
  updateCategorySwitch,
} from '../../store/categories/categoriesAction';
import auth from '@react-native-firebase/auth';

import {Colors} from '../../contants/Styles';
import ErrorOverLay from '../../components/Ui/Handle/ErrorOverLay';
import LoadingOverlay from '../../components/Ui/Handle/LoadingOverLay';

import ItemCategories from '../../components/Menu/ItemCategories';
import Search from '../../components/Ui/Display/Seacrch';
function Home({navigation}) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [dispatch]);
  if (error) {
    return <ErrorOverLay message={error} />;
  }
  if (loading) {
    return <LoadingOverlay />;
  }
  const handleToggleSwitch = (id, newValue) => {
    dispatch(updateCategorySwitch(id, newValue));
  };

  function renderItemCategories(itemData) {
    function pressHandler(id) {
      navigation.navigate('OverView', {
        idCategories: id,
      });
    }
    return (
      <ItemCategories
        name={itemData.item.name}
        id={itemData.item.id}
        clockClose={itemData.item.clockClose}
        clockOpened={itemData.item.clockOpened}
        warningMode={itemData.item.feature.warning}
        onItemClick={() => {
          pressHandler(itemData.item.id);
        }}
        onToggle={isEnabled => {
          handleToggleSwitch(itemData.item.id, {switch: isEnabled});
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userHeader}>
          {user && <Text style={styles.title}>Hi {user.email}! </Text>}
          <Text style={styles.content}>Good day</Text>
        </View>
        <Search />
        <Pressable
          onPress={() => {
            navigation.navigate('Account');
          }}
          android_ripple={{color: '#ccc'}}
          style={({pressed}) => [
            pressed ? {opacity: 0.4} : null,
            styles.wellcomeHeader,
          ]}>
          <View style={styles.text}>
            <Text style={styles.textTitle}>Wellcome!</Text>
            <Text style={styles.textContent}>Let's schedule your projects</Text>
          </View>
          <View style={styles.image}>
            <Image
              style={styles.logo}
              source={require('../../contants/img/logo_Home.png')}
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.textTitle}>Ongoing devices</Text>
          <Pressable style={({pressed}) => [pressed ? {opacity: 0.4} : null]}>
            <Text style={styles.textContent}>View all</Text>
          </Pressable>
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={data}
            key={item => item.id}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItemCategories}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  userHeader: {},
  title: {
    color: Colors.pimary400,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
  content: {
    color: Colors.gray,
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  wellcomeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.pimary400,
    borderWidth: 2,
    borderRadius: 25,
  },
  textContent: {color: 'black'},
  text: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  textTitle: {
    color: Colors.pimary400,
    fontWeight: 'bold',
    fontSize: 18,
  },
  flatList: {
    alignItems: 'center',
  },

  image: {
    fontWeight: '900',
  },
  logo: {
    width: 190,
    height: 100,
    borderRadius: 25,
  },

  body: {
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: Colors.background,
  },
  bodyHeader: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
