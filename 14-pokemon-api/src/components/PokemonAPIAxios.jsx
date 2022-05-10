import React, {useState} from 'react';
import axios from 'axios';

const PokemonAPIAxios = () => {

    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then(convertedResponse =>{
                console.log("response received ", convertedResponse.data.results)
                setPokemonList(convertedResponse.data.results)
            })
            .catch(err => {
                console.log("error response", err)
            })
        }

    return (
        <>
            <div>
                <button onClick={getPokemon}>Click here to get the latest Pokemon</button>
            </div>
            <hr />
            <table>
                <tr>
                    <th>Pokemon Name</th>
                    <th>URL</th>
                </tr>
            {
                pokemonList.map((pokemon, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{pokemon.name}</td>
                            <td><a href={pokemon.url}>{pokemon.url}</a></td>
                        </tr>
                    )
                })
            }
            </table>
        </>
    )
}

export default PokemonAPIAxios;