import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
import AuthContext from '../../AuthContext';
import PropTypes from 'prop-types';

function HomeScreen({navigation}) {
  const { signOut } = React.useContext(AuthContext);

  return (
      <View style={styles.container}>
        <Text>This is the HomeScreen.</Text>
        <Button
        title="Go to Details"
        onPress={() => signOut()}
      />
      </View>
    );
}

export default HomeScreen;
