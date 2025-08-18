import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaRegister from './src/screens/register/TelaRegister';
import TelaLogin from './src/screens/login/TelaLogin';
import TelaOP from './src/screens/outrasOpcoes/TelaOP';
import TelaNome from './src/screens/nome/telaNome';
import TelaNascimento from './src/screens/nascimento/TelaNascimento';
import TelaEndereco from './src/screens/endereco/TelaEndereco';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={TelaRegister} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={TelaLogin} options={{headerShown: false}}/>
        <Stack.Screen name="OutrasOpcoes" component={TelaOP} options={{headerShown: false}}/>
        <Stack.Screen name="Nome" component={TelaNome} options={{headerShown: false}}/>
        <Stack.Screen name="Nascimento" component={TelaNascimento} options={{headerShown: false}}/>
        <Stack.Screen name="Endereco" component={TelaEndereco} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

