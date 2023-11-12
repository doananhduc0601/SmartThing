import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../../contants/Styles';
function Search() {
  const [user, setUser] = useState('');
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.search}
        name="search"
        placeholder="Search"
        placeholderTextColor={Colors.pimary400}
        onChangeText={newUser => setUser(newUser)}
      />
      <Feather style={styles.searchIcon} name="search" size={30} />
    </View>
  );
}
export default Search;
const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: 20,
  },
  search: {
    backgroundColor: '#F2F2F2',
    color: Colors.pimary300,
    height: 52,
    paddingLeft: 60,
    fontSize: 18,
    borderRadius: 25,
  },
  searchIcon: {
    marginHorizontal: 10,
    lineHeight: 50,
    position: 'absolute',
    left: 10,
    color: Colors.pimary400,
  },
});
