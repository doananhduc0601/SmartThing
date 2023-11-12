import React from 'react';
import {View, KeyboardAvoidingView, Platform, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/auth/AuthActions';

import AuthForm from '../../components/auth/AuthForm';
import {stylesLog} from '../../contants/Styles';
import Header_Log from '../../components/Ui/Display/Header_Log';

function SignIn() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const handleLogin = (email, password) => {
    dispatch(login(email, password));
  };

  return (
    <KeyboardAvoidingView
      style={stylesLog.containerAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header_Log title="Lognin to your" />
      <View style={[stylesLog.form]}>
        <AuthForm isLogin onSubmits={handleLogin} />
        {error && <Text>{error}</Text>}
      </View>
    </KeyboardAvoidingView>
  );
}
export default SignIn;
