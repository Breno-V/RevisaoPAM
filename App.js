import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaHome from './src/screens/home/TelaHome';
import TelaLogin from './src/screens/login/TelaLogin';
import TelaOP from './src/screens/outrasOpcoes/TelaOP';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={TelaHome} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={TelaLogin} options={{headerShown: false}}/>
        <Stack.Screen name="OutrasOpcoes" component={TelaOP} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

