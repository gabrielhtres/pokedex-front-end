import { Text, View, Button } from 'react-native';
import { Styles } from "./styles";

const Home = () => {
    return (
        <View style={Styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Button title="Botão"/>
        </View>
      );
}

export default Home;