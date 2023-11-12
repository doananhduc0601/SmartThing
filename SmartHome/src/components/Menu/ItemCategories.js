import {
  StyleSheet,
  Text,
  View,
  Switch,
  Platform,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../contants/Styles';
import {Icons} from '../../contants/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from '../../store/categories/categoriesAction';
import Bouncing from '../Ui/Handle/Bouncing';

function ItemCategories({
  name,
  id,
  onItemClick,
  onToggle,
  clockClose,
  clockOpened,
  warningMode,
}) {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.categories);
  const product = data.find(category => category.id === id);
  const [isEnabled, setIsEnabled] = useState(product.switch);
  const switchOnOffValue = product.switch;
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onToggle(!isEnabled);
  };
  if (warningMode && warningMode.switch !== undefined) {
    var switchWarningValue = warningMode.switch;
  }
  let icons;
  let itemStyle;
  let colorStyle;
  let onOff;
  if (!switchWarningValue) {
    OnOff();
  } else {
    itemStyle = [styles.itemWarning, styles.shadows];
    colorStyle = styles.colorWarning;
    if (name === 'Gate') {
      icons = Icons.gate_off;
    } else if (name === 'Light Bulb') {
      icons = Icons.lightBulb_off;
    } else if (name === 'Security Camera') {
      icons = Icons.securityCamera_off;
    }

    onOff = 'Warning';
  }
  function OnOff() {
    itemStyle = switchOnOffValue
      ? [styles.itemOn, styles.shadows]
      : [styles.itemOff];
    colorStyle = switchOnOffValue ? styles.colorOn : styles.colorOff;
    if (name === 'Gate') {
      icons = switchOnOffValue ? Icons.gate_open : Icons.gate_off;
    } else if (name === 'Light Bulb') {
      icons = switchOnOffValue ? Icons.lightBulb_open : Icons.lightBulb_off;
    } else if (name === 'Security Camera') {
      icons = switchOnOffValue
        ? Icons.securityCamera_on
        : Icons.securityCamera_off;
    }

    onOff = switchOnOffValue ? 'On' : 'Off';
  }
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [pressed ? styles.buttonPreseed : null]}
        onPress={onItemClick}>
        <Bouncing switchWarningValue={switchWarningValue}>
          <View style={[itemStyle, styles.item]}>
            <View style={styles.content1}>
              <Text style={[styles.title1, colorStyle]}>{onOff}</Text>
              {!switchWarningValue ? (
                <Switch
                  trackColor={{false: Colors.pimary400, true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor={Colors.pimary400}
                  onValueChange={toggleSwitch}
                  style={{transform: [{scaleX: 1.6}, {scaleY: 1.6}]}}
                  value={product.switch}
                />
              ) : (
                <Ionicons
                  name="warning-outline"
                  size={40}
                  color={Colors.error500}
                />
              )}
            </View>

            <View style={styles.content2}>
              <View>{icons}</View>
              <View style={styles.textContent2}>
                <Text style={[colorStyle, {fontWeight: 'bold'}]}>
                  {clockOpened}
                </Text>
                <Text style={[colorStyle, {fontSize: 12}]}>Opened</Text>
                <Text style={[colorStyle, {marginVertical: -7}]}>
                  -----------
                </Text>
                <Text style={[colorStyle, {fontWeight: 'bold'}]}>
                  {clockClose}
                </Text>
                <Text style={[colorStyle, {fontSize: 12}]}>Close</Text>
              </View>
            </View>
            <View style={styles.content3}>
              <Text style={[styles.title3, colorStyle]}>{name}</Text>
            </View>
          </View>
        </Bouncing>
      </Pressable>
    </View>
  );
}

export default ItemCategories;

const styles = StyleSheet.create({
  container: {},
  item: {
    margin: 7,
    borderWidth: 1,
    padding: 14,
    justifyContent: 'center',
    borderRadius: 20,
  },
  itemOn: {
    backgroundColor: Colors.primary700,
  },
  itemOff: {
    backgroundColor: Colors.primary100,
    borderColor: Colors.gray,
  },
  //
  itemWarning: {
    backgroundColor: Colors.warning100,
    borderColor: Colors.error500,
  },
  colorOn: {
    color: 'white',
  },
  colorOff: {
    color: Colors.pimary400,
  },
  colorWarning: {
    color: Colors.warning800,
  },
  shadows: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 10,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', //ios
  },
  content1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title1: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  content2: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContent2: {
    marginHorizontal: 8,
  },
  title3: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  //
  buttonPreseed: {
    opacity: 0.5,
  },
});
