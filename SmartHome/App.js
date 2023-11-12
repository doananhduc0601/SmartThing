import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Provider, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

import {store} from './src/store/store';
import LoadingOverlay from './src/components/Ui/Handle/LoadingOverLay';
import {Colors, stylesTabBar} from './src/contants/Styles';
import Feather from 'react-native-vector-icons/Feather';

import Signin from './src/screen/log/Signin';
import Signup from './src/screen/log/Singup';
import Home from './src/screen/menu/Home';
import Account from './src/screen/menu/Account';
import DetailsProducts from './src/screen/menu/DetailsProducts';
import Add from './src/screen/menu/Add';
import Notification from './src/screen/menu/Notification';
import {Icons} from './src/contants/Icons';
import OverView from './src/screen/menu/OverView';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function AuthenticatedStack({navigation, route}) {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconStyle = [stylesTabBar.icon];
          let labelStyle = [stylesTabBar.label];
          if (focused) {
            iconStyle.push(stylesTabBar.iconFocused);
            labelStyle.push(stylesTabBar.labelFocused);
          }
          if (route.name === 'Home') {
            return <View style={iconStyle}>{Icons.iconHome}</View>;
          } else if (route.name === 'Add') {
            return <View style={iconStyle}>{Icons.iconADD}</View>;
          } else if (route.name === 'Notification') {
            return <View style={iconStyle}>{Icons.iconNotifi}</View>;
          } else if (route.name === 'Account') {
            return <View style={iconStyle}>{Icons.iconUser}</View>;
          }
        },
        contentStyle: {backgroundColor: 'white'},
        headerShadowVisible: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        tabBarLabelStyle: {
          ...stylesTabBar.tabBarLabel,
        },
        tabBarActiveTintColor: Colors.pimary400,
        tabBarStyle: [
          {
            ...stylesTabBar.tabBar,
          },
          null,
        ],
        tabBarVisible: false,

        headerRight: () => (
          <IconButton
            isImage
            source={require('./src/contants/img/logo.png')}
            icon="person-circle-outline"
            color="white"
            size={30}
            onPress={() => navigation.navigate('Account')}
          />
        ),
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Tab.Navigator>
  );
}
function AuthenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthenticatedStack"
        component={AuthenticatedStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="OverView"
        component={OverView}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="DetailsProducts"
        component={DetailsProducts}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}
// function Navigation() {
//   const token = useSelector(state => state.auth.token);

//   return (
//     <NavigationContainer>
//       {!token ? <AuthStack /> : <AuthenStack />}
//     </NavigationContainer>
//   );
// }
function Root() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return <LoadingOverlay />;
  }
  if (!user) {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <AuthenStack />
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  );
}
