import {Platform, View, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {register} from '../../store/auth/AuthActions';

import {stylesLog} from '../../contants/Styles';
import AuthForm from '../../components/auth/AuthForm';
import Header_Log from '../../components/Ui/Display/Header_Log';

function Register() {
  const dispatch = useDispatch();

  const handleRegister = (email, password, ConfirmPassword) => {
    dispatch(register(email, password, ConfirmPassword));
  };

  return (
    <KeyboardAvoidingView
      style={stylesLog.containerAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header_Log title="Create your" />
      <View style={stylesLog.form}>
        <AuthForm isSignup onSubmits={handleRegister} />
      </View>
    </KeyboardAvoidingView>
  );
}
export default Register;
