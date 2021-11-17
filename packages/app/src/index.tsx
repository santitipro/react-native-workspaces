import React from 'react';
import { Image, Platform, SafeAreaView, Text, View } from 'react-native';
import LogoSrc from './logo.png';
import styles from './styles';

function App(): React.ReactElement {
  return (
    <SafeAreaView style={styles.root}>
      <Image style={styles.logo} source={LogoSrc} />
      <Text style={styles.text}>Hello from React Native!</Text>
      <View style={styles.platformRow}>
        <Text style={styles.text}>Platform: </Text>
        <View style={styles.platformBackground}>
          <Text style={styles.platformValue}>{Platform.OS}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
