import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { Styles } from './styles';
import PokemonProfile from './PokemonProfile';
import Home from './Home';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// const navigation = useNavigation();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="PokemonProfile"
          component={PokemonProfile}
          options={{ title: 'PokemonProfile' }}
        />
        {/* https://reactnavigation.org/docs/use-navigation - Documentação navigation */}
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={Styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Button title="Botão"/>
    // </View>
  );
}
