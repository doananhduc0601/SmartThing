import {Image} from 'react-native';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';
export const Icons = {
  gate_open: <Image source={require('./img/icon_gate_open.png')} />,
  gate_off: <Image source={require('./img/icon_gate_off.png')} />,
  lightBulb_open: <Image source={require('./img/icon_lightBulb_open.png')} />,
  lightBulb_off: <Image source={require('./img/icon_lightBulb_off.png')} />,
  lightBulb_open: <Image source={require('./img/icon_lightBulb_open.png')} />,

  securityCamera_on: (
    <Image source={require('./img/icon_securityCamera_on.png')} />
  ),
  securityCamera_off: (
    <Image source={require('./img/icon_securityCamera_off.png')} />
  ),
  iconsmart_home: (
    <Image
      style={{width: 150, height: 150}}
      source={require('./img/indigo-cloud.png')}
    />
  ),
  //
  iconHome: <Image source={require('./img/icon-home-32.png')} />,
  iconADD: <Image source={require('./img/icon-add-32.png')} />,
  iconNotifi: <Image source={require('./img/icon-notification-32.png')} />,
  iconUser: <Image source={require('./img/icon-user-32-white.png')} />,
};
// export const Ionicons = ({name}) => {
//   return (
//     <Image
//       source={{
//         uri: ``,
//       }}
//     />
//   );
// };
