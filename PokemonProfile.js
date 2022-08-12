import { Styles } from "./styles";
import React, { useState, setState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { navigation } from "./App";

const PokemonProfile = (props) => {
    const [pokemon, setPokemon] = useState(["Bulbassauro", "Charmander"]);
    console.log(pokemon)

    function mudarPokemons() {
        console.log("Mudou")
    }

    return(
        <View>
            <Text>{pokemon.map(item => {
                return item + "\n";
            })}</Text>

            <Button title="Mudar" onPress={mudarPokemons}/>
        </View>
    );
}

export default PokemonProfile;