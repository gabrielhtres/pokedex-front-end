import { Styles } from "./styles";

class PokemonProfile {
    constructor(props) {
        this.state = {
            pokemon: 'Teste'
        };
    }

    componentDidMount() {

    }

    render() {
        return(
            <h1>{this.state.pokemon}</h1>
        );
    }
}

export default PokemonProfile;