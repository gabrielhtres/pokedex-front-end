import { Styles } from "./styles";
import React, { useState, setState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { navigation } from "./App";
import { useNavigation, Link } from "@react-navigation/native";
import Grass from './assets/badges/grass.svg'
// import { Badge } from "native-base";

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
            <View style={{ // Parte de cima da tela
                height: "40%",
                backgroundColor: '#cef79f'
            }}>
                <View style={{  // Parte do Pokémon com imagem e detalhes
                    height: "80%",
                    // backgroundColor: "red",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                    alignItems: "center",
                    
                 }}>    
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" }}
                style={{ width: "100px", height: "100px", flexShrink: "50%"/*, paddingRight: "5%"*/ }}
                    />
                    <View style={{ // Caixa dos detalhes do Pokémon
                        /*marginLeft: "5%"*/flexShrink: "50%"
                    }}>
                        <Text style={{ marginBottom: "2px" }}>#001</Text>
                        <Text style={{ marginBottom: "2px" }}>Bulbassauro</Text>
                        {/* <Badge>
                            Grass
                        </Badge> */}
                        {/* <Text>Grass</Text> */}
                        {/* <Text>Poison</Text> */}
                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            flexWrap: "wrap"
                        }}>
                            <Image source={Grass}
                                style={{ width: "70px", height: "25px", marginRight: "2px" }}
                            />
                            <Image source={require('./assets/badges/poison.svg')}
                                style={{ width: "70px", height: "25px" }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ // Parte dos botões
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