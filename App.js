import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { Styles } from './styles';
import PokemonProfile from './PokemonProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PokemonProfile"
          component={PokemonProfile}
          options={{ title: 'Welcome' }}
        />

      
        {/* https://reactnavigation.org/docs/use-navigation - Documentação navigation */}
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={Styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Button title="Botão" onClick={renderizar}/>
    // </View>
  );
}
