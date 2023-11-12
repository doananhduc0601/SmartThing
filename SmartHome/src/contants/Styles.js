import {Dimensions, StyleSheet} from 'react-native';

export const Colors = {
  pimary000: '#f3f6fc',
  pimary100: '#e6edf8',
  pimary200: '#3683eb',
  pimary300: '#255390',
  pimary400: '#1f416d',
  pimary500: '#040404',

  primary50: '#F3F6FC',
  primary100: '#E6EDF8',
  primary200: '#C7D9F0',
  primary300: '#96B9E3',
  primary400: '#5D96D3',
  primary500: '#3878BF',
  primary600: '#285EA1',
  primary700: '#255390',
  primary800: '#1F416D',
  primary900: '#1F385B',
  primary950: '#15243C',

  error100: '#FFBABA',
  error500: '#9C0006',

  warning50: '#fffcea',
  warning100: '#fff5c5',
  warning200: '#ffeb85',
  warning300: '#ffda46',
  warning400: '#ffc71b',
  warning500: '#ffa500',
  warning600: '#e27c00',
  warning700: '#bb5502',
  warning800: '#984208',
  warning900: '#7c360b',
  warning950: '#481a00',

  background: '#ffffff',

  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
  gray: '#6B7280',
  lightGreen: 'rgba(16,185,129,0.1)',
};
const {width, height} = Dimensions.get('window');
export const calculateFontSize = () => {
  const minFontSize = 20;
  const maxFontSize = 40;

  const fontSize = (width / 360) * 20;
  return Math.min(maxFontSize, Math.max(minFontSize, fontSize));
};

export const stylesLog = StyleSheet.create({
  containerAvoidingView: {
    flex: 1,
    backgroundColor: Colors.primary200,
  },
  form: {
    height: height,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 50,
    elevation: 30,
  },
});

export const stylesTabBar = StyleSheet.create({
  tabBar: {
    marginHorizontal: 40,
    marginVertical: 8,
    height: 60,
    position: 'absolute',
    backgroundColor: Colors.pimary400,
    elevation: 6,
    borderRadius: 30,
  },
  tabBarLabel: {
    textAlign: 'center',
    fontSize: 12,
    bottom: 8,
  },
  icon: {
    // lineHeight: 10,
    // backgroundColor: 'red',
    marginTop: 15,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
  iconFocused: {
    transform: [{scale: 1.2}],
    borderBottomWidth: 1.5,
    borderColor: Colors.pimary000,
  },
  labelFocused: {
    color: Colors.gray,
  },
  // containerIconAdd: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 60,
  //   backgroundColor: Colors.primary800,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // iconAdd: {
  //   color: Colors.primary50,
  // },
  slogan: {
    left: 20,
  },
});
