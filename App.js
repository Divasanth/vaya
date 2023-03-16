import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  return (
    <>
    <View style={styles.container}></View>
    <WebView source={{uri: "https://vaya.in/"}} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height:45
  },
});
