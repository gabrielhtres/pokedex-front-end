import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { Styles } from './styles';
import PokemonProfile from './PokemonProfile';

export default function App() {

  function renderizar() {
    return <PokemonProfile />;
  }

  return (
    <View style={Styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Botão" onClick={renderizar}/>
    </View>
  );
}
