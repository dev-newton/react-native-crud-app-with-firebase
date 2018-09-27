 import React from 'react';
 import { View, ActivityIndicator } from 'react-native';

 const Spinner1 = ({ size }) => {
   return (
     <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color="blue" />
     </View>
   );
 };

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  }
};
export { Spinner1 };
