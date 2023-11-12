import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './AuthTypes';
import {Alert} from 'react-native';

export const register = (email, password) => async dispatch => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    dispatch({type: REGISTER_SUCCESS});
    Alert.alert('Đăng kí thành công!');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('Email này đã được sử dụng!');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('Email không hợp lệ!');
    } else if (error.code === 'auth/weak-password') {
      Alert.alert('Mật khẩu quá yếu!');
    }
    dispatch({type: REGISTER_FAILURE, payload: error.message});
    console.error(error);
  }
};

export const login = (email, password) => async dispatch => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.email;
    const token = await user.getIdToken();
    await AsyncStorage.setItem('userToken', token);
    dispatch(loginSuccess({email}));
    console.log('Đăng nhập thành công!');
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      Alert.alert('Người dùng không tồn tại!');
    } else if (error.code === 'auth/wrong-password') {
      Alert.alert('Mật khẩu không đúng!');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('Email không hợp lệ!');
    }
    dispatch({type: LOGIN_FAILURE, payload: error.message});
    // console.error(error);
  }
};
export const logout = () => async dispatch => {
  try {
    await auth().signOut();
    dispatch({type: LOGOUT});
  } catch (error) {
    Alert.alert('Lỗi đăng xuất:', error);
  }
};
export const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});
