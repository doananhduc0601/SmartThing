// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// const PaginationSlider = ({navigation}) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = newPage => {
//     setCurrentPage(newPage);
//     navigation.navigate('Register');
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         disabled={currentPage === 1}
//         onPress={() => handlePageChange('Register')}
//         style={[styles.button, styles.prevButton]}>
//         <Text>Register</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         disabled={currentPage === 2}
//         onPress={() => handlePageChange(2)}
//         style={[styles.button, styles.nextButton]}>
//         <Text>Page 2</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     marginHorizontal: 10,
//   },
//   prevButton: {
//     backgroundColor: 'lightgray',
//   },
//   nextButton: {
//     backgroundColor: 'lightblue',
//   },
// });

// export default PaginationSlider;
