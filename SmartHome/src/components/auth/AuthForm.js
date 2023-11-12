import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import Button from '../Ui/Button/Button';
import {InputAuth} from './InputAuth';
import FlatButton from '../Ui/Button/FlatButton';
import {Colors} from '../../contants/Styles';
import {logout} from '../../store/auth/AuthActions';

function AuthForm({
  isLogin,
  isSignup,
  isLogout,
  onSubmits,
  dataEmail,
  dataPass,
}) {
  const [shakeAnimation] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate('Signup');
    } else {
      navigation.navigate('Signin');
    }
  }
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      Email: dataEmail || '',
      Password: dataPass || '',
      ConfirmPassword: '',
    },
  });
  const onSubmit = ({Email, Password, ConfirmPassword}) => {
    onSubmits(Email, Password, ConfirmPassword);
  };

  useEffect(() => {
    if (errors['Email'] || errors['Password'] || errors['Confirm Password']) {
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [errors]);
  const dispatch = useDispatch();
  function IsSignup() {
    if (isSignup) {
      return (
        <>
          <InputAuth
            nameIcon="lock"
            label="Confirm Password"
            control={control}
            errors={errors}
            textInputConfig={{
              placeholder: 'Confirm Password',
            }}
            icon="vpn-key"
          />
          {errors['Confirm Password'] && (
            <Text style={styles.errorText}>
              Mật khẩu xác nhận không trùng khớp với mật khẩu!
            </Text>
          )}
        </>
      );
    }
    return null;
  }
  function IsLogin() {
    if (isLogin && isLogout) {
      return (
        <View
          style={{
            alignItems: 'center',
          }}>
          <Button onPress={() => dispatch(logout())} width={styles.width}>
            <Text>Log out</Text>
          </Button>
        </View>
      );
    } else if (isLogin || isSignup) {
      return (
        <View>
          <View style={styles.forgotPass}>
            <FlatButton>
              {isLogin && (
                <Text style={[styles.forgotPass, styles.fonts]}>
                  Forgot Password?
                </Text>
              )}
            </FlatButton>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Button onPress={handleSubmit(onSubmit)} width={styles.width}>
              {isLogin ? (
                <Text style={styles.fonts}>ĐĂNG NHẬP</Text>
              ) : (
                <Text style={styles.fonts}>ĐĂNG KÝ</Text>
              )}
            </Button>
            {isLogin && (
              <>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginVertical: 8,
                  }}>
                  <View
                    style={{
                      borderWidth: 0.2,
                      width: 100,
                      borderColor: '#333',
                    }}></View>
                  <View>
                    <Text>Hoặc</Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.2,
                      width: 100,
                      borderColor: '#333',
                    }}></View>
                </View>
              </>
            )}
            <FlatButton onPress={switchAuthModeHandler}>
              {isLogin
                ? 'Chưa có tài khoản? Đăng ký'
                : 'Đã có tài khoản? Đăng nhập'}
            </FlatButton>
          </View>
        </View>
      );
    }
  }
  return (
    <View style={styles.form}>
      <Animated.View
        style={[
          styles.formContainer,
          {transform: [{translateX: shakeAnimation}]},
        ]}>
        <View>
          <InputAuth
            nameIcon="mail"
            label="Email"
            control={control}
            errors={errors}
            textInputConfig={{
              placeholder: 'Email',
            }}
            icon="phone-in-talk"
          />
          {errors['Email'] && (
            <Text style={styles.errorText}>Email không hợp lệ!</Text>
          )}
          <InputAuth
            nameIcon="lock"
            label="Password"
            control={control}
            errors={errors}
            textInputConfig={{
              placeholder: 'Password',
            }}
            icon="vpn-key"
          />
          {errors['Password'] && (
            <Text style={styles.errorText}>Mật khẩu không hợp lệ!</Text>
          )}
          <IsSignup />
          <IsLogin />
        </View>
      </Animated.View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  form: {
    // paddingHorizontal: 20,
    alignItems: 'center',
  },
  errorText: {
    textAlign: 'center',
    color: Colors.error500,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  width: {
    width: 300,
  },
  forgotPass: {
    alignItems: 'flex-end',
    fontSize: 16,
    color: Colors.pimary300,
  },
  fonts: {
    fontFamily: 'Poppins-SemiBold',
  },
});
