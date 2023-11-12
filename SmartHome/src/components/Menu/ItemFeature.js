import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {updateFeatureSwitch} from '../../store/categories/categoriesAction';
import {Colors} from '../../contants/Styles';

const ItemFeature = ({name, switchValue, idCategories, keyFeature}) => {
  const [isEnabled, setIsEnabled] = useState(switchValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateFeatureSwitch(idCategories, keyFeature, {switch: isEnabled}),
    );
  }, [isEnabled, dispatch, idCategories, keyFeature]);
  function switchHandler() {
    setIsEnabled(prevValue => !prevValue);
  }
  const parts = name ? name.split(' ') : '';
  const title = name ? parts[0] : '';
  const titleName = name ? title.toUpperCase() : '';
  return (
    <View style={styles.items}>
      <View style={styles.item}>
        <View style={styles.itemText}>
          <Text style={{color: '#E5E1E1', fontSize: 12}}>{name}</Text>
          <Text
            style={[
              styles.text,
              {
                color: isEnabled ? Colors.background : Colors.primary400,
                fontSize: isEnabled ? 22 : 21,
              },
            ]}>
            {titleName}
          </Text>
        </View>
        <Switch
          trackColor={{false: Colors.primary400, true: Colors.primary400}}
          thumbColor={isEnabled ? Colors.primary900 : '#F5F5FA'}
          ios_backgroundColor={Colors.pimary400}
          onValueChange={switchHandler}
          style={{transform: [{scaleX: 1.8}, {scaleY: 1.8}], elevation: 10}}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default ItemFeature;

const styles = StyleSheet.create({
  items: {
    flex: 1,
    marginTop: 90,
    marginBottom: 10,
    paddingBottom: 10,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
