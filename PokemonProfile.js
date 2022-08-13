import { Styles } from "./styles";
import React, { useState, setState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { navigation } from "./App";
import { useNavigation, Link } from "@react-navigation/native";

const PokemonProfile = (props) => {
    const [pokemon, setPokemon] = useState(["Bulbassauro", "Charmander"]);
    console.log(pokemon)

    function mudarPokemons() {
        const navigation = useNavigation();
        navigation.goTo()
    }

    return(
        <View>
            <Text>{pokemon.map(item => {
                return item + "\n";
            })}</Text>
            <Link to={{ screen: 'Home' }}>
                <Button title="Mudar"/>
            </Link>
            
        </View>
    );
}

export default PokemonProfile;