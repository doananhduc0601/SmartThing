import React, {useEffect, useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../store/auth/AuthActions';
import AuthForm from '../../components/auth/AuthForm';
import auth from '@react-native-firebase/auth';
const Account = () => {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user);
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
  const password = '********';
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 150, height: 150, borderRadius: 100}}
        source={require('../../contants/img/User.png')}
      />
      {user && (
        <AuthForm isLogin isLogout dataEmail={user.email} dataPass={password} />
      )}
    </View>
  );
};

export default Account;
