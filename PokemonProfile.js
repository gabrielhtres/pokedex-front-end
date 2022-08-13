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
        <View style={{
            height: '100%',
            backgroundColor: '#cef79f'
        }}>
            <View style={{
                height: "40%",
                backgroundColor: '#cef79f',
            }}>
                <Image
                    source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" }}
                    style={{ width: "100px", height: "100px"}}
                />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: "auto",
                    marginBottom: "5%"
                }}>
                    <Text style={{ color: "white" }}>Sobre</Text>
                    <Text style={{ color: "white" }}>Status</Text>
                    <Text style={{ color: "white" }}>Evolução</Text>
                </View>
            </View>
            <View style={{
                height: "60%",
                backgroundColor: 'white',
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"
            }}>

            </View>
        </View>
    );
}

export default PokemonProfile;