import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import ReduxExample from './src/Redux/Screen/ReduxExample';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Redux Examples: </Text>
        <StatusBar style="auto" />
        <ReduxExample />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 40
  },
});
