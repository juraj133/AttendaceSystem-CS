import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Registration from './components/registration';
import Welcome from './components/welcome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Login/>
    // </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: '3',
    borderRadius: '5',
    borderColor: '#000',
    margin: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#393e41',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
